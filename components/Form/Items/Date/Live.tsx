import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui";
import { cn, getPrimaryColor } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { FormComponent, initialTheme } from "@/types";
import { format } from "date-fns";
import dayjs from "dayjs";
import { useFormikContext } from "formik";
import { CalendarIcon, ShieldAlert } from "lucide-react";
import { useState } from "react";
import parse from "html-react-parser";

const formatDate = (dateString: string) => {
  const [day, month, year] = dateString.split("-").map(Number);

  const dateObject = new Date(year, month - 1, day);

  const isValid =
    dateObject &&
    dateObject.getFullYear() === parseInt(String(year)) &&
    dateObject.getMonth() === parseInt(String(month)) - 1 &&
    dateObject.getDate() === parseInt(String(day));

  const formattedDate = new Date(year, month - 1, day);

  return { isValid, formattedDate };
};

export const LiveDate = ({
  item,
  theme = initialTheme,
  readonly,
  visible,
}: FormComponent) => {
  const color = getPrimaryColor(theme.primaryColor);
  const formState = useFormikContext<Record<string, string>>();
  const formDate = formState?.values?.[item.id];
  const [date, setDate] = useState<Date | undefined>(
    readonly && formatDate(formDate).isValid
      ? formatDate(formDate).formattedDate
      : undefined
  );

  return (
    <div
      key={item.id}
      className={cn(
        "relative flex flex-col gap-3 w-full min-h-[120px] rounded-md bg-white p-6 overflow-hidden",
        formState?.touched[item.id] &&
          formState?.errors[item.id] &&
          "border-[1px] border-red-600",
        visible && "visible",
        !visible && "hidden"
      )}
    >
      {item.required && (
        <div className="absolute top-0 right-0 text-red-500 text-[18px] p-2 rounded-bl-md">
          *
        </div>
      )}
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
      <div
        className={cn(
          fontMapper[theme.Question.fontFamily],
          fontSizeMapper(theme.Question.fontSize)
        )}
      >
        {parse(item.name)}
      </div>
      <div
        className={cn(
          "flex flex-col gap-2 min-w-[200px] w-full",
          fontMapper[theme.Text.fontFamily],
          fontSizeMapper(theme.Text.fontSize)
        )}
      >
        <Popover>
          <PopoverTrigger asChild disabled={readonly}>
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
              onSelect={(date) => {
                setDate(date);
                formState?.setFieldValue(
                  item.id,
                  dayjs(date).format("DD-MM-YYYY")
                );
              }}
              initialFocus
              modifiersStyles={{
                selected: { background: color },
              }}
              disabled={readonly}
            />
          </PopoverContent>
        </Popover>
        {formState?.touched[item.id] && formState?.errors[item.id] && (
          <div className="flex gap-2 items-center text-sm text-red-600 mt-3">
            <ShieldAlert
              className="text-slate-700 stroke-red-600"
              size={20}
              strokeWidth={1.5}
            />
            {formState?.errors[item.id]}
          </div>
        )}
      </div>
    </div>
  );
};
