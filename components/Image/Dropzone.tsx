import React, { useRef } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib";

interface P {
  onDrop: (acceptedFiles: File[]) => void;
}

export const Dropzone = ({ onDrop }: P) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: true,
  });
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current?.click();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-4  w-full h-full">
      <div
        {...getRootProps()}
        className={cn(
          "flex flex-col gap-2 p-2 w-full items-center border-dashed border-2 border-input rounded-lg",
          isDragActive && "border-slate-700"
        )}
      >
        <Upload
          size={72}
          className="text-slate-700 hover:scale-110 cursor-pointer"
          strokeWidth={1.5}
        />
        <div className="flex flex-col items-center gap-1">
          <p>Drag files to upload</p>
          <p>or</p>
          <Button size="sm" variant={"outline"} onClick={handleClick}>
            Browse
          </Button>
          <input {...getInputProps()} ref={fileInputRef} />
        </div>
      </div>
    </div>
  );
};
