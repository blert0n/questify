import { createItemSlice } from "./itemSlice";
import { createThemeSlice } from "./themeSlice";
import { ItemSlice, ThemeSlice } from "@/types";
import { create } from "zustand";

export const useFormStore = create<ThemeSlice & ItemSlice>()((...a) => ({
  ...createThemeSlice(...a),
  ...createItemSlice(...a),
}));
