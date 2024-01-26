import { Separator } from "../ui";
import { FolderOpen, MoreVertical } from "lucide-react";
import Actions from "./Actions";

interface P {
  id?: string;
  name?: string;
  onSelect?: () => void;
}

export default function Folder({ id, name = "Default Folder", onSelect }: P) {
  return (
    <div className="h-48 w-36 shadow-md hover:shadow-xl rounded-md bg-white">
      <div className="h-full flex flex-col gap-1">
        <div
          className="h-2/3 flex justify-center items-center hover:cursor-pointer"
          onClick={() => onSelect?.()}
        >
          <FolderOpen
            size={108}
            className="text-gray-500 stroke-[#F8D775] fill-[#FFE9A2]"
            strokeWidth={0.5}
          />
        </div>
        <div className="h-1/3 flex flex-col gap-3 justify-end">
          <Separator />
          <div className="p-2 flex gap-2 justify-between">
            <div className="text-slate-700 text-sm whitespace-nowrap overflow-hidden text-ellipsis">
              {name}
            </div>
            {name !== "Default Folder" && (
              <div className="text-slate-500 text-xs flex items-center justify-between gap-[1px]">
                <Actions id={id} mode="edit" value={name}>
                  <MoreVertical
                    className="text-slate-500 cursor-pointer hover:scale-110"
                    strokeWidth={1.5}
                  />
                </Actions>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
