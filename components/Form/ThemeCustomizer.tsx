import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Palette, X } from "lucide-react";
import { CustomSelect } from "../controlled-inputs/select";
import { Input } from "../ui/input";
import Circle from "@uiw/react-color-circle";

interface P {
  visible: boolean;
  toggle: () => void;
}

export const ThemeCustomizer = ({ visible, toggle }: P) => {
  return (
    <Dialog.Root open={visible} onOpenChange={toggle}>
      <Dialog.Overlay />
      <Dialog.Content
        className="absolute right-0 top-0 xxs:w-[300px] w-full h-full shadow-lg overflow-y-auto"
        aria-modal="true"
      >
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
          <div className="p-4 flex flex-col gap-4 shadow-sm">
            <p className="font-semibold">Text style</p>
            <div className="flex flex-col gap-2">
              <div>Header</div>
              <div className="flex gap-2 items-center">
                <div className="w-3/4 ">
                  <CustomSelect
                    options={[
                      { placeholder: "A", value: "A" },
                      { placeholder: "B", value: "B" },
                    ]}
                  />
                </div>
                <div className="w-1/4">
                  <CustomSelect
                    options={Array.from({ length: 7 }, (_, i) => ({
                      placeholder: `${i + 18}`,
                      value: `${i + 18}`,
                    }))}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Question</div>
              <div className="flex gap-2 items-center">
                <div className="w-3/4 ">
                  <CustomSelect
                    options={[
                      { placeholder: "A", value: "A" },
                      { placeholder: "B", value: "B" },
                    ]}
                  />
                </div>
                <div className="w-1/4">
                  <CustomSelect
                    options={Array.from({ length: 7 }, (_, i) => ({
                      placeholder: `${i + 18}`,
                      value: `${i + 18}`,
                    }))}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Text</div>
              <div className="flex gap-2 items-center">
                <div className="w-3/4 ">
                  <CustomSelect
                    options={[
                      { placeholder: "A", value: "A" },
                      { placeholder: "B", value: "B" },
                    ]}
                  />
                </div>
                <div className="w-1/4">
                  <CustomSelect
                    options={Array.from({ length: 7 }, (_, i) => ({
                      placeholder: `${i + 18}`,
                      value: `${i + 18}`,
                    }))}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-4 shadow-sm">
            <p className="font-semibold">Header</p>
            <Input type="file" />
          </div>
          <div className="p-4 flex flex-col gap-4 shadow-sm">
            <p className="font-semibold">Color</p>
            <Circle
              colors={[
                "#db4437",
                "#673ab7",
                "#3f51b5",
                "#4285f4",
                "#03a9f4",
                "#00bcd4",
                "#ff5722",
                "#ff9800",
                "#009688",
                "#4caf50",
                "#607d8b",
                "#9e9e9e",
              ]}
            />
          </div>
          <div className="p-4 flex flex-col gap-4 shadow-sm">
            <p className="font-semibold">Color</p>
            <Circle
              colors={[
                "#db4437",
                "#673ab7",
                "#3f51b5",
                "#4285f4",
                "#03a9f4",
                "#00bcd4",
              ]}
            />
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};
