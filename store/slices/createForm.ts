import { create } from "zustand";
import { Theme, initialFormData } from "@/types";

type State = {
  theme: Theme;
};

type Actions = {
  updateHeaderTheme: <K extends HeaderThemeKeys>(
    prop: K,
    value: Theme["Header"][K]
  ) => void;
  updateQuestionTheme: <K extends QuestionThemeKeys>(
    prop: K,
    value: Theme["Question"][K]
  ) => void;
  updateTextTheme: <K extends TextThemeKeys>(
    prop: K,
    value: Theme["Text"][K]
  ) => void;
  updateTheme: <K extends ThemeKeys>(prop: K, value: Theme[K]) => void;
  resetTheme: () => void;
};

type ThemeKeys = keyof Theme;
type HeaderThemeKeys = keyof Theme["Header"];
type QuestionThemeKeys = keyof Theme["Question"];
type TextThemeKeys = keyof Theme["Text"];

export const useCreateFormStore = create<State & Actions>((set) => ({
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
}));
