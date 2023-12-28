import { useCallback, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogFooter } from "../ui/dialog";
import { Dropzone } from "./Dropzone";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useBoolean } from "usehooks-ts";
import { Trash } from "lucide-react";

interface P {
  aspectRatio?: number;
  lockRatio?: boolean;
  removeImage?: () => void;
}

const ASPECT_RATIO = 4 / 1;

export const Uploader = ({
  aspectRatio = ASPECT_RATIO,
  lockRatio = true,
  removeImage,
}: P) => {
  const [image, setImage] = useState<string | null>(null);
  const [imgName, setImgName] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (!acceptedFiles.length) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImage(reader.result as string);
      setImgName(acceptedFiles[0].name);
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

  const onImageLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
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
      unit: "%",
      width: (newWidth / containerWidth) * 100,
      height: (newHeight / containerHeight) * 100,
      x: 0,
      y: 0,
    };
    setCrop(newCrop);
  };

  return (
    <>
      <div className="flex flex-wrap gap-2 border-input border-[1px] rounded-md py-2 px-3 text-sm">
        {!image ? (
          <>
            <div
              className="font-medium cursor-pointer"
              onClick={toggleUploadModal}
            >
              Choose File
            </div>
            <div>No file chosen</div>
          </>
        ) : (
          <div className="flex justify-between w-full">
            <div className="truncate">{imgName}</div>
            <Trash
              className="text-slate-700 hover:scale-110 cursor-pointer"
              strokeWidth={1.5}
              onClick={() => {
                setImage(null);
                setImgName("");
                removeImage?.();
              }}
            />
          </div>
        )}
      </div>
      <Dialog open={uploadModal} modal>
        <DialogContent className="w-full xxs:w-[576px] flex flex-col">
          <div className="max-h-96 max-w-full">
            {image ? (
              <div className="relative max-h-full max-w-full flex justify-center">
                <ReactCrop
                  crop={crop}
                  onChange={(c) => setCrop(c)}
                  aspect={aspectRatio}
                  className="max-h-full"
                  locked={lockRatio}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    style={{
                      height: "100%",
                      maxHeight: "24rem",
                      objectFit: "contain",
                    }}
                    alt="uploadedImg"
                    onLoad={onImageLoad}
                  />
                </ReactCrop>
              </div>
            ) : (
              <Dropzone onDrop={onDrop} />
            )}
          </div>
          <DialogFooter>
            <Button size={"sm"}>Save</Button>
            <Button
              size={"sm"}
              onClick={() => {
                setImage(null);
                closeUploadModal();
              }}
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
