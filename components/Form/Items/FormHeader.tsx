import { cn } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import StyledInput from "../../StyledInput";
import { useFormSelectors } from "@/store";
import { deserializeString } from "../../StyledInput/deserializer";

interface P {
  selected?: boolean;
}

export const FormHeader = ({ selected = false }: P) => {
  const theme = useFormSelectors.use.theme();
  const updateThemeHeader = useFormSelectors.use.updateHeaderTheme();
  const updateThemeText = useFormSelectors.use.updateTextTheme();
  const updateForm = useFormSelectors.use.updateFormDetails();
  const formHeader = deserializeString("Untitled form");
  const formDescription = deserializeString("Description");
  return (
    <div
      className="w-full border-t-[10px] rounded-md h-auto shadow-md"
      style={{
        borderColor: theme.primaryColor,
      }}
      onClick={() => updateForm("selectedComponent", "formHeader")}
    >
      <div
        className={cn(
          "h-full rounded-b-md p-4 bg-white",
          !selected && "cursor-pointer",
          selected && "border-l-[5px]  border-l-sky-600"
        )}
      >
        <StyledInput
          className={cn(
            "w-full",
            fontSizeMapper(theme.Header.fontSize),
            fontMapper[theme.Header.fontFamily]
          )}
          initialValue={formHeader}
          onChange={(html) => updateThemeHeader("text", html)}
          noLineBreak
          showBottomBorder={selected}
        />
        <StyledInput
          className={cn(
            "w-full",
            fontSizeMapper(theme.Text.fontSize),
            fontMapper[theme.Text.fontFamily]
          )}
          initialValue={formDescription}
          onChange={(html) => updateThemeText("text", html)}
          noLineBreak
          showBottomBorder={selected}
        />
      </div>
    </div>
  );
};
