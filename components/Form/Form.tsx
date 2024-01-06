import { useFormSelectors } from "@/store";
import { deserializeString } from "../StyledInput/deserializer";
import { useState } from "react";
import { FormHeader } from "./Items/FormHeader";

export const Form = () => {
  const theme = useFormSelectors.use.theme();
  const updateThemeHeader = useFormSelectors.use.updateHeaderTheme();
  const updateThemeText = useFormSelectors.use.updateTextTheme();
  const formHeader = deserializeString("Untitled form");
  const formDescription = deserializeString("Description");
  const [editModeComponent, setEditModeComponent] = useState("formHeader");

  return (
    <div className="flex flex-col gap-4 w-full md:max-w-3xl ">
      {theme.Header.image && (
        <div className="w-full h-[150px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={theme.Header.image.dataUrl}
            className="h-full w-full rounded-md"
            alt="Header Image"
          />
        </div>
      )}
      <div
        className="w-full border-t-[10px] rounded-md h-auto shadow-md"
        style={{
          borderColor: theme.primaryColor,
        }}
      >
        <FormHeader isEditing={editModeComponent === "formHeader"} />
      </div>
    </div>
  );
};
