import { Trash, Image as ImageIcon, MinusCircle } from "lucide-react";
import { Image, INITIAL_IMAGE_PROPERTIES } from "./Uploader";
import RemoveImage from "@/assets/svg/RemoveImage";
interface P {
  image: Image;
  showIconsOnly: boolean;
  toggleUploadModal: () => void;
  handleImageChange: (image: Image) => void;
  onRemoveFn?: () => void;
}
export const FileDisplay = ({
  image,
  showIconsOnly,
  toggleUploadModal,
  handleImageChange,
  onRemoveFn,
}: P) => {
  if (showIconsOnly) {
    return (
      <>
        {image.name && (
          <RemoveImage
            width={24}
            height={24}
            className="fill-slate-700 hover:scale-110 cursor-pointer"
            strokeWidth={1.5}
            onClick={() => {
              handleImageChange(INITIAL_IMAGE_PROPERTIES);
              onRemoveFn?.();
            }}
          />
        )}
        {!image.name && (
          <ImageIcon
            size={20}
            className="text-slate-700 hover:scale-110 cursor-pointer"
            strokeWidth={1.5}
            onClick={toggleUploadModal}
          />
        )}
      </>
    );
  }
  return (
    <div className="flex flex-wrap gap-2 border-input border-[1px] rounded-md py-2 px-3 text-sm">
      {!image.name.length ? (
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
        <div className="flex justify-between w-full items-center">
          <div className="truncate">{image.name}</div>
          <Trash
            className="flex-shrink-0 text-slate-700 hover:scale-110 cursor-pointer"
            strokeWidth={1.5}
            onClick={() => {
              handleImageChange(INITIAL_IMAGE_PROPERTIES);
              onRemoveFn?.();
            }}
          />
        </div>
      )}
    </div>
  );
};
