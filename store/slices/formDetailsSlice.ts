import { initialFormData, templateMapper } from "./../../types/initialData";
import { FormDetailsSlice, ItemSlice, ThemeSlice, initialTheme } from "@/types";
import { toast } from "react-toastify";
import { StateCreator } from "zustand";
import { loadFormData, openFormModal, saveForm } from "../actions";
import _ from "lodash";
export const createFormDetailsSlice: StateCreator<
  ThemeSlice & ItemSlice & FormDetailsSlice,
  [],
  [],
  FormDetailsSlice
> = (set, get) => ({
  id: "",
  name: "Untitled Form",
  isFavorite: false,
  selectedComponent: "formHeader",
  editMode: true,
  loading: false,
  updateFormDetails: (prop, value) =>
    set((state) => ({
      ...state,
      [prop]: value,
    })),
  resetForm: () => {
    set((state) => ({
      ...state,
      theme: initialTheme,
      ...initialFormData,
    }));
  },
  saveForm: async () => {
    if (!get().items.length)
      return toast.info("At least one form item is required");
    await saveForm();
  },
  loadForm: async (id) => {
    const form = await loadFormData(id);
    if (!form) return;
    set((state) => ({
      ...state,
      id: form.id,
      name: form.name,
      isFavorite: form.favorite,
      theme: form.style,
      items: form.items.map((item) => {
        const itemWithoutItems = _.omit(item, "item.items");
        return {
          ...itemWithoutItems,
          options: item.items,
          origin: "server",
        };
      }),
    }));
    openFormModal();
  },
  loadTemplate: (template) => {
    if (!["rsvp", "contact", "registration"].includes(template)) return;
    const templateData = templateMapper[template];
    set((state) => ({
      ...state,
      ...templateData,
    }));
    openFormModal();
  },
});
