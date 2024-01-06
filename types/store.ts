import { Theme, FormItem } from "./form";

export type State = {
  theme: Theme;
  items: FormItem[];
};

export type Actions = {
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

export type ThemeKeys = keyof Theme;
export type HeaderThemeKeys = keyof Theme["Header"];
export type QuestionThemeKeys = keyof Theme["Question"];
export type TextThemeKeys = keyof Theme["Text"];
