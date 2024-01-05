import { useCreateFormSelectors } from "@/store";
import StyledInput from "../StyledInput";
import { deserializeString } from "../StyledInput/deserializer";
import { cn } from "@/lib";
import { fontMapper } from "@/lib/fonts";

export const Form = () => {
  const theme = useCreateFormSelectors.use.theme();
  const updateThemeHeader = useCreateFormSelectors.use.updateHeaderTheme();
  const updateThemeText = useCreateFormSelectors.use.updateTextTheme();
  const formHeader = deserializeString("Untitled form");
  const formDescription = deserializeString("Description");

  return (
    <div className="w-full md:max-w-3xl">
      <div
        className="w-full border-t-[10px] rounded-md h-auto shadow-md"
        style={{
          borderColor: theme.primaryColor,
        }}
      >
        <div className="border-l-[5px] border-l-sky-600 h-full rounded-bl-[5px] p-4 bg-white">
          {/* Form Name & Description */}
          <StyledInput
            className={cn("w-full", fontMapper[theme.Header.fontFamily])}
            initialValue={formHeader}
            style={{ fontSize: `${theme.Header.fontSize}px` }}
            onChange={(html) => updateThemeHeader("text", html)}
            noLineBreak
          />
          <StyledInput
            className={cn("w-full", fontMapper[theme.Text.fontFamily])}
            initialValue={formDescription}
            style={{ fontSize: `${theme.Text.fontSize}px` }}
            onChange={(html) => updateThemeText("text", html)}
            noLineBreak
          />
        </div>
      </div>
    </div>
  );
};
