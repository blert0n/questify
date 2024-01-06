import { createItemSlice } from "./itemSlice";
import { createThemeSlice } from "./themeSlice";
import { createFormDetailsSlice } from "./formDetailsSlice";
import { ItemSlice, ThemeSlice, FormDetailsSlice } from "@/types";
import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export const useFormStore = create<ThemeSlice & ItemSlice & FormDetailsSlice>()(
  (...a) => ({
    ...createThemeSlice(...a),
    ...createItemSlice(...a),
    ...createFormDetailsSlice(...a),
  })
);
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store1", useFormStore);
}
