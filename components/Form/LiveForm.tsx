import { FormItem, Theme } from "@/types";
import {
  LiveShortComponent,
  LiveLongComponent,
  LiveOneChoice,
  LiveMultiChoice,
  LiveLinearScale,
  LiveDate,
  LiveDropdown,
  HeaderImage,
  LiveHeader,
  LiveText,
  LiveCheckboxGrid,
  LiveMultipleChoiceGrid,
  LiveRating,
  LivePhoneNumber,
} from "./Items";
import { FormItemType_Enum } from "@/lib/graphql";
import { useFormSelectors } from "@/store";
import { useState } from "react";
import { Button } from "../ui/button";
import { useFormikContext } from "formik";
import { cn } from "@/lib";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const EMPTY_COMPONENT = () => null;

const componentMapper = {
  [FormItemType_Enum.Text]: LiveText,
  [FormItemType_Enum.Short]: LiveShortComponent,
  [FormItemType_Enum.Long]: LiveLongComponent,
  [FormItemType_Enum.SingleChoice]: LiveOneChoice,
  [FormItemType_Enum.MultipleChoice]: LiveMultiChoice,
  [FormItemType_Enum.LinearScale]: LiveLinearScale,
  [FormItemType_Enum.Date]: LiveDate,
  [FormItemType_Enum.Dropdown]: LiveDropdown,
  [FormItemType_Enum.SingleChoiceGrid]: LiveCheckboxGrid,
  [FormItemType_Enum.MultipleChoiceGrid]: LiveMultipleChoiceGrid,
  [FormItemType_Enum.Rating]: LiveRating,
  [FormItemType_Enum.PhoneNumber]: LivePhoneNumber,
  [FormItemType_Enum.Section]: EMPTY_COMPONENT,
};

interface P {
  theme: Theme;
  items: FormItem[];
  readonly?: boolean;
  showSubmit?: boolean;
}

export default function LiveForm({
  theme,
  items,
  readonly = false,
  showSubmit = true,
}: P) {
  const formik = useFormikContext<Record<string, string>>();
  const getPagesMap = useFormSelectors.use.getPagesMap();
  const pagesMap = getPagesMap(items);
  const pagesMapKeys = Object.keys(pagesMap);
  const maxPage = Math.max(...pagesMapKeys.map(Number));
  const [page, setPage] = useState(1);

  const handlePageChange = (direction: "next" | "prev") => {
    setPage((prevState) => {
      let newPage = prevState;
      if (direction === "next") {
        newPage = Math.min(prevState + 1, maxPage);
      } else if (direction === "prev") {
        newPage = Math.max(prevState - 1, 1);
      }
      return newPage;
    });
  };

  return (
    <>
      <HeaderImage theme={theme} />
      <LiveHeader theme={theme} />
      {items
        .sort((a, b) => a.order - b.order)
        .map((item) => {
          const DynamicComponent = item.type
            ? componentMapper[item.type]
            : EMPTY_COMPONENT;
          return (
            <DynamicComponent
              key={item.id}
              item={item}
              theme={theme}
              readonly={readonly}
              visible={pagesMap[page]?.includes(item.order)}
              onPageChange={handlePageChange}
            />
          );
        })}
      <div className="flex justify-between items-center gap-2">
        <div
          className={cn(
            "flex items-center gap-1",
            pagesMapKeys.length <= 1 && "hidden"
          )}
        >
          <Button
            className={cn(page === 1 && "hidden")}
            type="submit"
            size={"sm"}
            style={{
              backgroundColor: theme.primaryColor,
            }}
            loading={formik?.isSubmitting}
            onClick={() => handlePageChange("prev")}
          >
            Previous
          </Button>
          <Button
            className={cn(page === maxPage && "hidden")}
            type="submit"
            size={"sm"}
            style={{
              backgroundColor: theme.primaryColor,
            }}
            loading={formik?.isSubmitting}
            onClick={() => handlePageChange("next")}
          >
            Next
          </Button>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  (page !== maxPage || !showSubmit) && "hidden",
                  !formik?.isValid && "opacity-50 hover:cursor-not-allowed"
                )}
                type="submit"
                size={"sm"}
                style={{
                  backgroundColor: theme.primaryColor,
                }}
                loading={formik?.isSubmitting}
                onClick={() => {
                  if (!formik?.isValid) return;
                  formik?.handleSubmit();
                }}
              >
                Submit
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Make sure you have filled all required items</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
}
