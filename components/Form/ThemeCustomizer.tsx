import React, { useState } from "react";
import { Palette, PlusCircle, X, CheckCheck } from "lucide-react";
import Circle from "@uiw/react-color-circle";
import { FontPicker } from "./Customizers/FontPicker";
import { FontSizePicker } from "./Customizers/FontSizePicker";
import { useBoolean } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";
import Chrome from "@uiw/react-color-chrome";
import { GithubPlacement } from "@uiw/react-color-github";
import { Sheet, SheetContent } from "../ui/sheet";
import { generateShades } from "@/lib";
import { Uploader } from "../Image";
import { useFormSelectors } from "@/store";
import { Theme } from "@/types";

interface P {
  visible: boolean;
  toggle: () => void;
}

export const ThemeCustomizer = ({ visible, toggle }: P) => {
  const { value: isCustomColor, toggle: toggleCustomColor } = useBoolean(false);
  const { value: showColorPicker, toggle: toggleColorPicker } =
    useBoolean(false);

  const theme = useFormSelectors.use.theme();
  const updateHeaderTheme = useFormSelectors.use.updateHeaderTheme();
  const updateQuestionTheme = useFormSelectors.use.updateQuestionTheme();
  const updateTextTheme = useFormSelectors.use.updateTextTheme();
  const updateTheme = useFormSelectors.use.updateTheme();

  const [shades, setShades] = useState(generateShades(theme.primaryColor));
  const [chromeColor, setChromeColor] = useState("");

  const handlePrimaryColorChange = (color: string) => {
    updateTheme("primaryColor", color);
    const updatedShades = generateShades(color);
    updateTheme("secondaryColor", updatedShades[0]);
    setShades(updatedShades);
  };

  return (
    <Sheet open={visible} onOpenChange={toggle}>
      <SheetContent
        className="sm:w-[300px] h-screen w-full p-0 flex flex-col gap-0 overflow-y-auto overflow-x-hidden"
        side={"right"}
        onClose={toggle}
        onEscapeKeyDown={toggle}
      >
        <div className="flex justify-between items-center h-[73px] border-b-2 shadow-md p-4">
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
                <FontPicker
                  defaultValue={theme.Header.fontFamily}
                  onChange={(font) =>
                    updateHeaderTheme(
                      "fontFamily",
                      font as Theme["Header"]["fontFamily"]
                    )
                  }
                />
              </div>
              <div className="w-1/4">
                <FontSizePicker
                  start={18}
                  end={24}
                  placeholder={"Size"}
                  defaultValue={theme.Header.fontSize}
                  onChange={(size) => {
                    updateHeaderTheme(
                      "fontSize",
                      size as Theme["Header"]["fontSize"]
                    );
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Question</div>
            <div className="flex gap-2 items-center">
              <div className="w-3/4 ">
                <FontPicker
                  defaultValue={theme.Question.fontFamily}
                  onChange={(font) =>
                    updateQuestionTheme(
                      "fontFamily",
                      font as Theme["Question"]["fontFamily"]
                    )
                  }
                />
              </div>
              <div className="w-1/4">
                <FontSizePicker
                  start={12}
                  end={18}
                  placeholder={"Size"}
                  defaultValue={theme.Question.fontSize}
                  onChange={(size) =>
                    updateQuestionTheme(
                      "fontSize",
                      size as Theme["Question"]["fontSize"]
                    )
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>Text</div>
            <div className="flex gap-2 items-center">
              <div className="w-3/4 ">
                <FontPicker
                  defaultValue={theme.Text.fontFamily}
                  onChange={(font) =>
                    updateTextTheme(
                      "fontFamily",
                      font as Theme["Text"]["fontFamily"]
                    )
                  }
                />
              </div>
              <div className="w-1/4">
                <FontSizePicker
                  start={12}
                  end={15}
                  placeholder={"Size"}
                  defaultValue={theme.Text.fontSize}
                  onChange={(size) =>
                    updateTextTheme(
                      "fontSize",
                      size as Theme["Text"]["fontSize"]
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4 shadow-sm">
          <p className="font-semibold">Header</p>
          <Uploader
            image={theme.Header.image}
            onSaveFn={(image) => updateHeaderTheme("image", image)}
            onRemoveFn={() => updateHeaderTheme("image", undefined)}
          />
        </div>
        <div className="p-4 flex flex-col gap-4 shadow-sm">
          <div className="flex justify-between flex-wrap items-center">
            <p className="font-semibold">Color</p>
            {showColorPicker ? (
              <CheckCheck
                className="text-slate-700 cursor-pointer"
                strokeWidth={1.5}
                onClick={() => {
                  toggleColorPicker();
                  !isCustomColor && toggleCustomColor();
                  handlePrimaryColorChange(chromeColor);
                }}
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
                  color={chromeColor}
                  style={{ float: "left" }}
                  placement={GithubPlacement.Right}
                  onChange={(color) => {
                    setChromeColor(color.hex);
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
                  color={theme.primaryColor}
                  colors={[
                    "#ffffff",
                    "#db4437",
                    "#673ab7",
                    "#3f51b5",
                    "#4285f4",
                    "#03a9f4",
                    "#ff5722",
                    "#ff9800",
                    "#009688",
                    "#4caf50",
                    "#607d8b",
                    "#9e9e9e",
                    ...(Boolean(isCustomColor) ? [theme.primaryColor] : []),
                  ]}
                  onChange={(color) => {
                    handlePrimaryColorChange(color.hex);
                    isCustomColor && toggleCustomColor();
                  }}
                  className="colorPicker"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="p-4 flex flex-col gap-4 shadow-sm">
          <p className="font-semibold">Background</p>
          <Circle
            color={theme.secondaryColor}
            colors={shades}
            onChange={(color) => updateTheme("secondaryColor", color.hex)}
            className="colorPicker"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
