import { cn, getPrimaryColor } from "@/lib";
import { fontMapper, fontSizeMapper } from "@/lib/fonts";
import StyledInput from "../../StyledInput";
import { useFormSelectors } from "@/store";
import { deserializeString } from "../../StyledInput/deserializer";
import { LiveHeaderProps } from "@/types";
import ReactHtmlParser from "react-html-parser";

interface P {
  selected?: boolean;
}

export const FormHeader = ({ selected = false }: P) => {
  const theme = useFormSelectors.use.theme();
  const editMode = useFormSelectors.use.editMode();
  const updateThemeHeader = useFormSelectors.use.updateHeaderTheme();
  const updateThemeText = useFormSelectors.use.updateTextTheme();
  const updateForm = useFormSelectors.use.updateFormDetails();
  const formHeader = deserializeString(theme.Header.text);
  const formDescription = deserializeString(theme.Text.text);

  if (!editMode) {
    return (
      <LiveHeader
        header={theme.Header.text ?? "Untitled"}
        description={theme.Text.text ?? "Description"}
        styling={{
          primary: theme.primaryColor,
          HFont: theme.Header.fontFamily,
          Hsize: theme.Header.fontSize,
          Tfont: theme.Text.fontFamily,
          Tsize: theme.Text.fontSize,
        }}
      />
    );
  }
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

const LiveHeader = ({ header, description, styling }: LiveHeaderProps) => {
  return (
    <div
      className="flex flex-col gap-4 w-full h-auto rounded-md p-6 bg-white"
      style={{
        borderTop: `10px solid ${styling.primary}`,
      }}
    >
      <div
        className={cn(fontMapper[styling.HFont], fontSizeMapper(styling.Hsize))}
      >
        {ReactHtmlParser(header)}
      </div>
      <div
        className={cn(fontMapper[styling.Tfont], fontSizeMapper(styling.Tsize))}
      >
        {ReactHtmlParser(description)}
      </div>
    </div>
  );
};
