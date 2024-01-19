import { apolloClient } from "@/lib";
import { CreateFormDocument, CreateFormMutation } from "@/lib/graphql";
import { prepareCreateItems } from "@/lib/prepareData";
import { FormDetailsSlice, ItemSlice, ThemeSlice } from "@/types";
import { toast } from "react-toastify";
import { StateCreator } from "zustand";
import { closeFormModal } from "../actions";

export const createFormDetailsSlice: StateCreator<
  ThemeSlice & ItemSlice & FormDetailsSlice,
  [],
  [],
  FormDetailsSlice
> = (set, get) => ({
  id: 0,
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
  saveForm: async () => {
    if (!get().items.length)
      return toast.info("At least one form item is required");

    set((state) => ({ ...state, loading: true }));
    try {
      await apolloClient.mutate<CreateFormMutation>({
        mutation: CreateFormDocument,
        variables: {
          data: {
            name: get().name,
            items: {
              create: prepareCreateItems(get().items),
            },
            style: get().theme,
            ownerId: "",
          },
        },
      });
      set((state) => ({ ...state, loading: false }));
      toast.success("Form created successfully!");
      closeFormModal();
    } catch (error) {
      set((state) => ({ ...state, loading: false }));
      console.error("Error saving form:", error);
      toast.error("Something went wrong! Please try again later.");
    }
  },
});
