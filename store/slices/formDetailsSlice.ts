import { FormDetailsSlice, ItemSlice, ThemeSlice } from "@/types";
import { StateCreator } from "zustand";

export const createFormDetailsSlice: StateCreator<
  ThemeSlice & ItemSlice & FormDetailsSlice,
  [],
  [],
  FormDetailsSlice
> = (set, get) => ({
  id: 0,
  name: "",
  isFavorite: false,
  selectedComponent: "formHeader",
  editMode: true,
  updateFormDetails: <K extends keyof FormDetailsSlice>(
    prop: K,
    value: FormDetailsSlice[K]
  ) =>
    set((state) => ({
      ...state,
      [prop]: value,
    })),
});
