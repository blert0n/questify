import { cn, getPrimaryColor } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import StyledInput from "../../../StyledInput";
import { useFormSelectors } from "@/store";
import { deserializeString } from "../../../StyledInput/deserializer";

export const FormHeader = () => {
  const theme = useFormSelectors.use.theme();
  const updateThemeHeader = useFormSelectors.use.updateHeaderTheme();
  const updateThemeText = useFormSelectors.use.updateTextTheme();
  const updateForm = useFormSelectors.use.updateFormDetails();
  const formHeader = deserializeString(theme.Header.text);
  const formDescription = deserializeString(theme.Text.text);
  const selected = useFormSelectors.use.selectedComponent() === "formHeader";

  return (
    <div
      className="w-full border-t-[10px] rounded-md h-auto shadow-md"
      style={{
        borderColor: getPrimaryColor(theme.primaryColor),
      }}
      onClick={() => updateForm("selectedComponent", "formHeader")}
    >
      <div
        className={cn(
          "h-full rounded-b-md p-6 bg-white",
          !selected && "cursor-pointer"
        )}
        style={{
          borderLeft: selected
            ? `5px solid ${getPrimaryColor(theme.primaryColor)}`
            : "none",
        }}
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
