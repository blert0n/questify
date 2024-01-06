import { StateCreator } from "zustand";
import {
  Theme,
  initialFormData,
  HeaderThemeKeys,
  QuestionThemeKeys,
  TextThemeKeys,
  ThemeKeys,
  ThemeSlice,
  ItemSlice,
} from "@/types";

export const createThemeSlice: StateCreator<
  ThemeSlice & ItemSlice,
  [],
  [],
  ThemeSlice
> = (set) => ({
  theme: initialFormData,
  updateHeaderTheme: <K extends HeaderThemeKeys>(
    prop: K,
    value: Theme["Header"][K]
  ) =>
    set((state) => ({
      ...state,
      theme: {
        ...state.theme,
        Header: {
          ...state.theme.Header,
          [prop]: value,
        },
      },
    })),
  updateQuestionTheme: <K extends QuestionThemeKeys>(
    prop: K,
    value: Theme["Question"][K]
  ) =>
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
  updateTextTheme: <K extends TextThemeKeys>(
    prop: K,
    value: Theme["Text"][K]
  ) =>
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
  updateTheme: <K extends ThemeKeys>(prop: K, value: Theme[K]) =>
    set((state) => ({
      ...state,
      theme: {
        ...state.theme,
        [prop]: value,
      },
    })),
  resetTheme: () => set((state) => ({ ...state, theme: initialFormData })),
});
