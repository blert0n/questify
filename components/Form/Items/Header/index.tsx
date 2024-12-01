import { cn, getPrimaryColor } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import { useFormSelectors } from "@/store";
import { RichTextEditor } from "@/components/RichTextEditor";

export const FormHeader = () => {
  const theme = useFormSelectors.use.theme();
  const updateThemeHeader = useFormSelectors.use.updateHeaderTheme();
  const updateThemeText = useFormSelectors.use.updateTextTheme();
  const updateForm = useFormSelectors.use.updateFormDetails();
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
          "h-full rounded-b-md p-6 pb-2 bg-white",
          !selected && "cursor-pointer"
        )}
        style={{
          borderLeft: selected
            ? `5px solid ${getPrimaryColor(theme.primaryColor)}`
            : "none",
        }}
      >
        <RichTextEditor
          options={{
            className: cn(
              "w-full",
              fontSizeMapper(theme.Header.fontSize),
              fontMapper[theme.Header.fontFamily]
            ),
            showBottomBorder: selected,
          }}
          value={theme.Header.text}
          placeholder="Form name"
          name="form-header"
          onChange={(html) => updateThemeHeader("text", html)}
        />
        <RichTextEditor
          options={{
            className: cn(
              "w-full",
              fontSizeMapper(theme.Text.fontSize),
              fontMapper[theme.Text.fontFamily]
            ),
            showBottomBorder: selected,
          }}
          value={theme.Text.text}
          placeholder="Form description"
          name="form-description"
          onChange={(html) => updateThemeText("text", html)}
        />
      </div>
    </div>
  );
};
