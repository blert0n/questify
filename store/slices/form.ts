import { createItemSlice } from "./itemSlice";
import { createThemeSlice } from "./themeSlice";
import { createFormDetailsSlice } from "./formDetailsSlice";
import { createSubItemSlice } from "./subItemSlice";
import { createAiSlice } from "./aiSlice";
import {
  ItemSlice,
  ThemeSlice,
  FormDetailsSlice,
  SubItemSlice,
  AiSlice,
} from "@/types";
import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export const useFormStore = create<
  ThemeSlice & ItemSlice & FormDetailsSlice & SubItemSlice & AiSlice
>()((...a) => ({
  ...createThemeSlice(...a),
  ...createItemSlice(...a),
  ...createFormDetailsSlice(...a),
  ...createSubItemSlice(...a),
  ...createAiSlice(...a),
}));
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store1", useFormStore);
}
