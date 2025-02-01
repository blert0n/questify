import { initialFormData, templateMapper } from "./../../types/initialData";
import { FormDetailsSlice, ItemSlice, ThemeSlice, initialTheme } from "@/types";
import { toast } from "react-toastify";
import { StateCreator } from "zustand";
import { editForm, loadFormData, openFormModal, saveForm } from "../actions";

const TEMPLATES = [
  "rsvp",
  "orderRequest",
  "jobApplication",
  "employeeSurvey",
  "travelSurvey",
  "healthAssessment",
  "petAdoptionInquiry",
  "volunteerInterestForm",
  "demographicInformation",
  "patientSatisfactionSurvey",
  "socialMediaUsage",
  "onlineShoppingExperience",
];
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
  activeTab: 0,
  editMode: true,
  loading: false,
  loadingThumbnail: "",
  operation: "",
  selectedResponse: "",
  responsesTab: 0,
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
    !get().id ? await saveForm() : await editForm(get().id);
  },
  loadForm: async (id, tab = 0, response) => {
    set((state) => ({
      ...state,
      loading: true,
      operation: tab === 0 ? "edit" : "viewResponse",
    }));
    const form = await loadFormData(id);
    if (!form) return set((state) => ({ ...state, loading: false }));
    set((state) => ({
      ...state,
      id: form.id,
      name: form.name,
      isFavorite: form.favorite,
      theme: form.style,
      activeTab: tab,
      operation: "",
      loading: false,
      items: (form.FormItems ?? []).map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { formId, items, ...rest } = item;
        const mutableItems = [...item.items];
        return {
          ...rest,
          options: mutableItems,
          origin: "server",
        };
      }),
      ...(response
        ? {
            selectedResponse: response,
            responsesTab: 1,
          }
        : {}),
    }));
    openFormModal();
  },
  loadTemplate: (template) => {
    if (!TEMPLATES.includes(template)) return;
    const templateData = templateMapper[template];
    set((state) => ({
      ...state,
      ...templateData,
    }));
    openFormModal();
  },
});
