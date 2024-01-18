import { apolloClient } from "@/lib";
import { CreateFormDocument, CreateFormMutation } from "@/lib/graphql";
import { prepareCreateItems } from "@/lib/prepareData";
import { FormDetailsSlice, ItemSlice, ThemeSlice } from "@/types";
import { StateCreator } from "zustand";

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
  updateFormDetails: (prop, value) =>
    set((state) => ({
      ...state,
      [prop]: value,
    })),
  saveForm: async () => {
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
  },
});
