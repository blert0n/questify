import { ItemSlice, ThemeSlice } from "@/types";
import { StateCreator } from "zustand";

export const createItemSlice: StateCreator<
  ThemeSlice & ItemSlice,
  [],
  [],
  ItemSlice
> = (set) => ({
  items: [],
});
