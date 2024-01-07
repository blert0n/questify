import { useCallback, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter } from "../ui/dialog";
import { Dropzone } from "./Dropzone";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useBoolean } from "usehooks-ts";
import { FileDisplay } from "./FileDisplay";

export const INITIAL_IMAGE_PROPERTIES: Image = {
  name: "",
  type: "",
  initialDataUrl: "",
  dataUrl: "",
  origin: "client",
};

export interface Image {
  name: string;
  type: string;
  initialDataUrl: string;
  dataUrl: string;
  origin: "client" | "server";
}
interface P {
  image?: Image;
  aspectRatio?: number;
  lockRatio?: boolean;
  noCrop?: boolean;
  onRemoveFn?: () => void;
  onSaveFn?: (image: Image) => void;
  showIconsOnly?: boolean;
}

const ASPECT_RATIO = 4 / 1;

export const Uploader = ({
  image: existingImage,
  aspectRatio = ASPECT_RATIO,
  lockRatio = true,
  noCrop = false,
  onRemoveFn,
  onSaveFn,
  showIconsOnly = false,
}: P) => {
  const [image, setImage] = useState<Image>(
    existingImage ?? INITIAL_IMAGE_PROPERTIES
  );
  const imageRef = useRef<HTMLImageElement>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImage({
        name: acceptedFiles[0].name,
        type: acceptedFiles[0].type,
        initialDataUrl: reader.result as string,
        dataUrl: reader.result as string,
        origin: "client",
      });
    });
    reader.readAsDataURL(acceptedFiles[0]);
  }, []);

  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    width: 100,
    height: 0,
    x: 0,
    y: 0,
  });

  const {
    value: uploadModal,
    toggle: toggleUploadModal,
    setFalse: closeUploadModal,
  } = useBoolean(false);

  const handleSubmit = () => {
    onSaveFn?.({ ...image, initialDataUrl: "" });
    closeUploadModal();
  };

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    if (!imageRef?.current) return;
    const imageElement = e.currentTarget;
    const containerWidth = imageElement.parentElement?.offsetWidth || 1;
    const containerHeight = imageElement.parentElement?.offsetHeight || 1;

    let newWidth = containerWidth;
    let newHeight = containerWidth / aspectRatio;
    if (newHeight > containerHeight) {
      newHeight = containerHeight;
      newWidth = containerHeight * aspectRatio;
      if (newWidth > containerWidth) {
        newWidth = containerWidth;
        newHeight = containerWidth / aspectRatio;
      }
    }
    const newCrop: Crop = {
      unit: "px",
      width: (newWidth / containerWidth) * imageRef.current.width,
      height: (newHeight / containerHeight) * imageRef.current.height,
      x: 0,
      y: 0,
    };
    setCrop(newCrop);
    onCropComplete(newCrop);
  };

  const onCropComplete = (crop: Crop) => {
    if (!imageRef.current) return;
    const canvas = document.createElement("canvas");
    const pixelRatio = window.devicePixelRatio;
    const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
    const scaleY = imageRef.current.naturalHeight / imageRef.current.height;
    const context = canvas.getContext("2d");

    if (!context) return;

    canvas.width = crop.width * pixelRatio * scaleX;
    canvas.height = crop.height * pixelRatio * scaleY;

    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.imageSmoothingQuality = "high";

    context.drawImage(
      imageRef.current,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width * scaleX,
      crop.height * scaleY
    );

    setImage((prev) => ({
      ...prev,
      dataUrl: canvas.toDataURL(prev.type),
    }));
  };

  return (
    <>
      <FileDisplay
        image={image}
        toggleUploadModal={toggleUploadModal}
        handleImageChange={(image) => setImage(image)}
        onRemoveFn={onRemoveFn}
        showIconsOnly={showIconsOnly}
      />
      <Dialog open={uploadModal} modal>
        <DialogContent className="w-full xxs:w-[576px] flex flex-col">
          <div className="max-h-96 max-w-full">
            {image.name ? (
              <div className="relative max-h-full max-w-full flex justify-center">
                <ReactCrop
                  crop={noCrop ? undefined : crop}
                  aspect={aspectRatio}
                  className="max-h-full"
                  locked={lockRatio}
                  onChange={(c) => setCrop(c)}
                  onComplete={onCropComplete}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.initialDataUrl}
                    style={{
                      height: "100%",
                      maxHeight: "24rem",
                      objectFit: "contain",
                    }}
                    alt="uploadedImg"
                    onLoad={noCrop ? handleSubmit : onImageLoad}
                    ref={imageRef}
                  />
                </ReactCrop>
              </div>
            ) : (
              <Dropzone onDrop={onDrop} />
            )}
          </div>
          <DialogFooter>
            <Button
              variant={"outline"}
              size={"sm"}
              onClick={() => {
                setImage(INITIAL_IMAGE_PROPERTIES);
                closeUploadModal();
              }}
            >
              Close
            </Button>
            <Button size={"sm"} onClick={handleSubmit}>
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
