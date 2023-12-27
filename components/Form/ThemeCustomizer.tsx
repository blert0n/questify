import React, { useState } from "react";
import { Palette, PlusCircle, X, CheckCheck, Save } from "lucide-react";
import { Input } from "../ui/input";
import Circle from "@uiw/react-color-circle";
import { FontPicker } from "./FontPicker";
import { FontSizePicker } from "./FontSizePicker";
import { useBoolean } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";
import Chrome from "@uiw/react-color-chrome";
import { GithubPlacement } from "@uiw/react-color-github";
import { Sheet, SheetContent } from "../ui/sheet";
import { generateShades } from "@/lib";

interface P {
  visible: boolean;
  toggle: () => void;
}

export const ThemeCustomizer = ({ visible, toggle }: P) => {
  const { value: isCustomColor, toggle: toggleCustomColor } = useBoolean(false);
  const [primaryColor, setPrimaryColor] = useState("#db4437");
  const [shades, setShades] = useState(generateShades(primaryColor));
  const [secondaryColor, setSecondaryColor] = useState(shades[0]);
  const {
    value: showColorPicker,
    toggle: toggleColorPicker,
    setFalse: closeColorPicker,
  } = useBoolean(false);

  const handlePrimaryColorChange = (color: string) => {
    setPrimaryColor(color);
    const updatedShades = generateShades(color);
    setSecondaryColor(updatedShades[0]);
    setShades(updatedShades);
  };

  return (
    <Sheet open={visible}>
      <SheetContent
        className="sm:w-[300px] h-screen w-full p-0 flex flex-col gap-0 overflow-y-auto overflow-x-hidden"
        side={"right"}
        onClose={toggle}
        onEscapeKeyDown={toggle}
      >
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
                <FontPicker />
              </div>
              <div className="w-1/4">
                <FontSizePicker start={18} end={24} placeholder={"Size"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Question</div>
            <div className="flex gap-2 items-center">
              <div className="w-3/4 ">
                <FontPicker />
              </div>
              <div className="w-1/4">
                <FontSizePicker start={12} end={18} placeholder={"Size"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Text</div>
            <div className="flex gap-2 items-center">
              <div className="w-3/4 ">
                <FontPicker />
              </div>
              <div className="w-1/4">
                <FontSizePicker start={9} end={12} placeholder={"Size"} />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4 shadow-sm">
          <p className="font-semibold">Header</p>
          <Input type="file" />
        </div>
        <div className="p-4 flex flex-col gap-4 shadow-sm">
          <div className="flex justify-between flex-wrap items-center">
            <p className="font-semibold">Color</p>
            {showColorPicker ? (
              <CheckCheck
                className="text-slate-700 cursor-pointer"
                strokeWidth={1.5}
                onClick={toggleColorPicker}
              />
            ) : (
              <PlusCircle
                className="text-slate-700 cursor-pointer"
                strokeWidth={1.5}
                onClick={toggleColorPicker}
              />
            )}
          </div>
          <AnimatePresence initial={false} mode="wait">
            {showColorPicker && (
              <motion.div
                key="customColor"
                initial={{ x: 1050, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                }}
                exit={{ x: 1050, opacity: 0 }}
                className="flex justify-center"
              >
                <Chrome
                  color={primaryColor}
                  style={{ float: "left" }}
                  placement={GithubPlacement.Right}
                  onChange={(color) => {
                    !isCustomColor && toggleCustomColor();
                    handlePrimaryColorChange(color.hex);
                  }}
                />
              </motion.div>
            )}
            {!showColorPicker && (
              <motion.div
                key="colors"
                initial={{ x: 1050, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.3,
                }}
                exit={{ x: 1050, opacity: 0 }}
              >
                <Circle
                  key="1"
                  color={primaryColor}
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
                    ...(Boolean(isCustomColor) ? [primaryColor] : []),
                  ]}
                  onChange={(color) => {
                    handlePrimaryColorChange(color.hex);
                    isCustomColor && toggleCustomColor();
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="p-4 flex flex-col gap-4 shadow-sm">
          <p className="font-semibold">Background</p>
          <Circle
            color={secondaryColor}
            colors={shades}
            onChange={(color) => setSecondaryColor(color.hex)}
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
