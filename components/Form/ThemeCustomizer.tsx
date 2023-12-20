import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Palette, X } from "lucide-react";

interface P {
  visible: boolean;
  toggle: () => void;
}

export const ThemeCustomizer = ({ visible, toggle }: P) => {
  return (
    <Dialog.Root open={visible} onOpenChange={toggle}>
      <Dialog.Overlay />
      <Dialog.Content className="absolute right-0 top-0 w-[240px] h-full shadow-lg">
        <div className="flex flex-col h-full w-full">
          <div className="flex justify-between border-b-2 shadow-sm p-4">
            <div className="flex flex-row gap-2">
              <Palette
                className="text-slate-700 cursor-pointer"
                strokeWidth={1.5}
              />
              <div>Theme</div>
            </div>
            <X
              className="flex justify-end items-end text-slate-700 hover:scale-110 cursor-pointer"
              strokeWidth={1.5}
              onClick={toggle}
            />
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
