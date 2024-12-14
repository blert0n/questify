import { Checkbox, ScrollArea, ScrollBar } from "@/components/ui/";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, getPrimaryColor, transform } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { FormComponent, initialTheme } from "@/types";
import { useFormikContext } from "formik";
import { ShieldAlert } from "lucide-react";
import { useMemo, useState } from "react";
import ReactHtmlParser from "react-html-parser";

interface SelectedValues {
  [key: string]: string[];
}

export const LiveMultipleChoiceGrid = ({
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

  const handleCheck = (rowId: string, column: string) => {
    setSelectedValues((prev) => {
      const updatedValue = {
        ...prev,
        [rowId]: prev[rowId] ? [...prev[rowId], column] : [column],
      };
      formState?.setFieldValue?.(item.id, JSON.stringify(updatedValue));
      return updatedValue;
    });
  };

  const handleUnchecked = (rowId: string, column: string) => {
    setSelectedValues((prev) => {
      const updatedValue = {
        ...prev,
        [rowId]: prev[rowId]?.filter((value) => value !== column) || [],
      };
      formState?.setFieldValue?.(item.id, JSON.stringify(updatedValue));
      return updatedValue;
    });
  };

  return (
    <div
      key={item.id}
      className={cn(
        "flex flex-col gap-3 w-full h-auto rounded-md bg-white p-6",
        formState?.touched[item.id] &&
          formState?.errors[item.id] &&
          "border-[1px] border-red-600"
      )}
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
      <div className="flex flex-col justify-between items-start gap-3">
        <div
          className={cn(
            "flex gap-[2px] w-full",
            fontMapper[theme.Question.fontFamily],
            fontSizeMapper(theme.Question.fontSize)
          )}
        >
          {ReactHtmlParser(item.name, { transform })}
          {item.required && <span className="text-red-600">*</span>}
        </div>
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
                    <TableCell key={column.id}>
                      <Checkbox
                        checked={selectedValues[row.id]?.includes(column.value)}
                        onCheckedChange={(isChecked) => {
                          isChecked
                            ? handleCheck(row.id, column.value)
                            : handleUnchecked(row.id, column.value);
                        }}
                        style={{
                          borderColor: checkBoxColor,
                          backgroundColor: selectedValues[row.id]?.includes(
                            column.value
                          )
                            ? checkBoxColor
                            : "initial",
                        }}
                        disabled={readonly}
                      />
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
