import {
  RadioGroup,
  RadioGroupItem,
  ScrollArea,
  ScrollBar,
} from "@/components/ui/";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, getPrimaryColor } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { FormComponent, initialTheme } from "@/types";
import { useFormikContext } from "formik";
import { ShieldAlert } from "lucide-react";
import { useMemo, useState } from "react";
import parse from "html-react-parser";

interface SelectedValues {
  [key: string]: string;
}

export const LiveCheckboxGrid = ({
  item,
  theme = initialTheme,
  readonly,
}: FormComponent) => {
  const checkBoxColor = getPrimaryColor(theme.primaryColor);
  const formState = useFormikContext<Record<string, string>>();
  const rows = item.options?.filter((option) => option.grid === "row");
  const columns = item.options?.filter((option) => option.grid === "column");

  const formSelectedValues = formState?.values[item.id];

  const parsedValue = useMemo(() => {
    try {
      return JSON.parse(formSelectedValues) as SelectedValues;
    } catch {
      return {} as SelectedValues;
    }
  }, [formSelectedValues]);

  const [selectedValues, setSelectedValues] =
    useState<SelectedValues>(parsedValue);

  const handleRadioChange = (rowId: string, column: string) => {
    setSelectedValues((prev) => {
      const updatedValue = { ...prev, [rowId]: column };
      formState?.setFieldValue?.(item.id, JSON.stringify(updatedValue));
      return updatedValue;
    });
  };

  return (
    <div
      key={item.id}
      className={cn(
        "relative flex flex-col gap-3 w-full h-auto rounded-md bg-white p-6",
        formState?.touched[item.id] &&
          formState?.errors[item.id] &&
          "border-[1px] border-red-600"
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
        <ScrollArea className="w-full whitespace-nowrap rounded-md p-2">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-inherit">
                <TableHead></TableHead>
                {columns?.map((column) => (
                  <TableHead key={column.id}>
                    <div
                      className={cn(
                        "flex items-center gap-2",
                        fontMapper[theme.Text.fontFamily],
                        fontSizeMapper(theme.Text.fontSize)
                      )}
                    >
                      {column.value}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows?.map((row) => (
                <TableRow key={row.id} className="hover:bg-inherit">
                  <TableHead key={row.id}>
                    <div
                      className={cn(
                        "flex items-center gap-2",
                        fontMapper[theme.Text.fontFamily],
                        fontSizeMapper(theme.Text.fontSize)
                      )}
                    >
                      {row.value}
                    </div>
                  </TableHead>
                  {columns?.map((column) => (
                    <TableCell key={column.id} className="text-center">
                      <RadioGroup
                        value={selectedValues[row.id] || ""}
                        onValueChange={(value) =>
                          handleRadioChange(row.id, value)
                        }
                        defaultValue={readonly ? formState.values[item.id] : ""}
                        disabled={readonly}
                      >
                        <RadioGroupItem
                          value={column.value}
                          id={`${row.value}-${column.value}`}
                          style={{
                            color: checkBoxColor,
                            borderColor: checkBoxColor,
                            border: "1px solid",
                          }}
                        />
                      </RadioGroup>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        {formState?.touched[item.id] && formState?.errors[item.id] && (
          <div className="flex gap-2 items-center text-sm text-red-600">
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
