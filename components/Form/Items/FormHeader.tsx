import { cn } from "@/lib";
import { fontMapper } from "@/lib/fonts";
import StyledInput from "../../StyledInput";
import { useFormSelectors } from "@/store";
import { deserializeString } from "../../StyledInput/deserializer";

interface P {
  isEditing?: boolean;
}

export const FormHeader = ({ isEditing }: P) => {
  const theme = useFormSelectors.use.theme();
  const updateThemeHeader = useFormSelectors.use.updateHeaderTheme();
  const updateThemeText = useFormSelectors.use.updateTextTheme();
  const formHeader = deserializeString("Untitled form");
  const formDescription = deserializeString("Description");
  return (
    <div
      className={cn(
        "border-l-[5px] border-l-sky-600 h-full rounded-b-md p-4 bg-white",
        !isEditing && "cursor-pointer"
      )}
    >
      <StyledInput
        className={cn("w-full", fontMapper[theme.Header.fontFamily])}
        initialValue={formHeader}
        style={{ fontSize: `${theme.Header.fontSize}px` }}
        onChange={(html) => updateThemeHeader("text", html)}
        noLineBreak
        showBottomBorder={isEditing}
      />
      <StyledInput
        className={cn("w-full", fontMapper[theme.Text.fontFamily])}
        initialValue={formDescription}
        style={{ fontSize: `${theme.Text.fontSize}px` }}
        onChange={(html) => updateThemeText("text", html)}
        noLineBreak
        showBottomBorder={isEditing}
      />
    </div>
  );
};
