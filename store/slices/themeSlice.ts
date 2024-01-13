import { StateCreator } from "zustand";
import {
  initialFormData,
  ThemeSlice,
  ItemSlice,
  FormDetailsSlice,
} from "@/types";
import { htmlToText } from "@/lib";

export const createThemeSlice: StateCreator<
  ThemeSlice & ItemSlice & FormDetailsSlice,
  [],
  [],
  ThemeSlice
> = (set) => ({
  theme: initialFormData,
  updateHeaderTheme: (prop, value) => {
    set((state) => ({
      ...state,
      theme: {
        ...state.theme,
        Header: {
          ...state.theme.Header,
          [prop]: value,
        },
      },
    }));
    if (prop === "text") {
      set((state) => ({ ...state, name: String(htmlToText(value as string)) }));
    }
  },
  updateQuestionTheme: (prop, value) =>
    set((state) => ({
      ...state,
      theme: {
        ...state.theme,
        Question: {
          ...state.theme.Question,
          [prop]: value,
        },
      },
    })),
  updateTextTheme: (prop, value) =>
    set((state) => ({
      ...state,
      theme: {
        ...state.theme,
        Text: {
          ...state.theme.Text,
          [prop]: value,
        },
      },
    })),
  updateTheme: (prop, value) =>
    set((state) => ({
      ...state,
      theme: {
        ...state.theme,
        [prop]: value,
      },
    })),
  resetTheme: () =>
    set((state) => ({
      ...state,
      theme: initialFormData,
      items: [],
      selectedComponent: "formHeader",
    })),
});
