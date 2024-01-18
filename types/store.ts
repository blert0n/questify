import { FormType } from "@/lib/graphql";
import { Theme, FormItem } from "./form";

export type FormDetailsSlice = {
  id?: number;
  name: string;
  isFavorite: boolean;
  selectedComponent: string;
  editMode: boolean;
  updateFormDetails: <K extends keyof FormDetailsSlice>(
    prop: K,
    value: FormDetailsSlice[K]
  ) => void;
  saveForm: () => void;
};

export type ThemeSlice = {
  theme: Theme;
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

export type ItemSlice = {
  items: FormItem[];
  updateItem: <K extends keyof FormItem>(
    id: string,
    prop: K,
    value: FormItem[K]
  ) => void;
  addItem: (type: FormType) => void;
  deleteItem: (id: string) => void;
  duplicateItem: (id: string) => void;
  reorder: (startIndex: number, endIndex: number) => void;
};
export type SubItemSlice = {
  addOption: (itemId: string) => void;
  updateOption: (itemId: string, subItemId: string, value: string) => void;
  updateOptionLabel: (itemId: string, subItemId: string, label: string) => void;
  deleteOption: (itemId: string, subItemId: string) => void;
  reorderOptions: (
    itemId: string,
    startIndex: number,
    endIndex: number
  ) => void;
};

export type ThemeKeys = keyof Theme;
export type HeaderThemeKeys = keyof Theme["Header"];
export type QuestionThemeKeys = keyof Theme["Question"];
export type TextThemeKeys = keyof Theme["Text"];
