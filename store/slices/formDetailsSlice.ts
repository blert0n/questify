import { FormDetailsSlice, ItemSlice, ThemeSlice } from "@/types";
import { StateCreator } from "zustand";

export const createFormDetailsSlice: StateCreator<
  ThemeSlice & ItemSlice & FormDetailsSlice,
  [],
  [],
  FormDetailsSlice
> = (set) => ({
  id: 0,
  name: "Untitled Form",
  isFavorite: false,
  selectedComponent: "formHeader",
  editMode: true,
  updateFormDetails: (prop, value) =>
    set((state) => ({
      ...state,
      [prop]: value,
    })),
});
