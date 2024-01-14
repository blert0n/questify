import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui";
import { cn, getPrimaryColor } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { FormComponent, initialFormData } from "@/types";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import ReactHtmlParser from "react-html-parser";

export const LiveDate = ({ item, theme = initialFormData }: FormComponent) => {
  const [date, setDate] = useState<Date | undefined>();

  const color = getPrimaryColor(theme.primaryColor);

  return (
    <div
      key={item.id}
      className={
        "flex flex-col gap-3 w-full min-h-[120px] rounded-md bg-white p-6 overflow-hidden"
      }
    >
      {item.image?.dataUrl && (
        <div className="flex justify-center max-h-[300px] object-contain">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={item.image?.dataUrl}
            className="object-contain rounded-md"
            alt="short component image"
          />
        </div>
      )}
      <div className="flex flex-col justify-between items-start gap-6">
        <div
          className={cn(
            fontMapper[theme.Question.fontFamily],
            fontSizeMapper(theme.Question.fontSize)
          )}
        >
          {ReactHtmlParser(item.name)}
        </div>
        <div
          className={cn(
            "flex flex-col gap-2 min-w-[200px] w-full",
            fontMapper[theme.Text.fontFamily],
            fontSizeMapper(theme.Text.fontSize)
          )}
        >
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                modifiersStyles={{
                  selected: { background: color },
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};
