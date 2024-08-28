import { Theme, FormItem, FormType } from "./form";

export type FormDetailsSlice = {
  id?: string;
  name: string;
  isFavorite: boolean;
  selectedComponent: string;
  activeTab: number;
  editMode: boolean;
  loading: boolean;
  loadingThumbnail: string;
  operation: string;
  updateFormDetails: <K extends keyof FormDetailsSlice>(
    prop: K,
    value: FormDetailsSlice[K]
  ) => void;
  saveForm: () => void;
  loadForm: (id: string, tab?: number) => void;
  resetForm: () => void;
  loadTemplate: (template: string) => void;
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
};

export type ItemSlice = {
  items: FormItem[];
  deletedItems: string[];
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

type NonFunctionKeyNames<T> = Exclude<
  {
    // eslint-disable-next-line @typescript-eslint/ban-types
    [key in keyof T]: T[key] extends Function ? never : key;
  }[keyof T],
  undefined
>;
type RemoveFunctions<T> = Pick<T, NonFunctionKeyNames<T>>;

export type FormState = RemoveFunctions<
  ThemeSlice & ItemSlice & FormDetailsSlice
>;
