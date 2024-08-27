import { Popover, PopoverContent, PopoverTrigger } from "../../ui/popover";
import { cn } from "@/lib";
import { CheckCircle2, Plus } from "lucide-react";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { useBoolean } from "usehooks-ts";
interface P {
  colors?: string[];
  showColorPicker?: boolean;
  color?: string;
  onChange?: (color: string) => void;
}

const defaultColors = [
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
];

const ColorPicker = ({
  colors = defaultColors,
  color,
  showColorPicker = false,
  onChange,
}: P) => {
  const [selectedColor, setSelectedColor] = useState(color ?? "#ffffff");
  const [customColor, setCustomColor] = useState(
    color && colors.includes(color) ? "" : color
  );
  const [hovered, setHovered] = useState("");
  const { value: isColorPickerVisible, toggle: toggleColorPicker } =
    useBoolean(false);
  return (
    <div className="flex flex-wrap gap-1">
      {colors.map((color) => (
        <div
          key={color}
          className="flex items-center justify-center  h-9 w-9 rounded-sm shadow-md cursor-pointer hover:scale-110"
          style={{ background: color }}
          onClick={() => {
            setSelectedColor(color);
            setCustomColor("");
            onChange?.(color);
          }}
          onMouseOver={() => setHovered(color)}
          onMouseOut={() => setHovered("")}
          onBlur={() => setHovered("")}
        >
          <CheckCircle2
            size={22}
            className={cn(
              "fill-[#54b2d3] text-white",
              selectedColor === color && "visible",
              selectedColor !== color && hovered !== color && "hidden",
              hovered === color && "visible opacity-50"
            )}
          />
        </div>
      ))}
      {showColorPicker && (
        <Popover
          open={isColorPickerVisible}
          onOpenChange={() => toggleColorPicker()}
        >
          <PopoverTrigger asChild>
            <div
              className="flex items-center justify-center  h-9 w-9 rounded-sm shadow-md cursor-pointer hover:scale-110 bg-white"
              onMouseOver={() => setHovered("custom")}
              onMouseOut={() => setHovered("")}
              onBlur={() => setHovered("")}
              style={{
                background: customColor || "#ffffff",
              }}
            >
              {customColor ? (
                <CheckCircle2
                  size={22}
                  className={cn("fill-[#54b2d3] text-white")}
                />
              ) : (
                <Plus size={22} className="text-slate-500" />
              )}
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0 mx-1">
            <SketchPicker
              color={customColor || "#ffffff"}
              presetColors={[]}
              disableAlpha
              onChange={(color) => {
                setSelectedColor("");
                setCustomColor(color.hex);
              }}
              onChangeComplete={(color) => {
                setSelectedColor("");
                setCustomColor(color.hex);
                onChange?.(color.hex);
              }}
            />
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
};

export default ColorPicker;
