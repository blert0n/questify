import { Theme, FormItem, SubItem, InitialFormData, FormType } from "./form";
import { v4 as uuidv4 } from "uuid";
import { rsvp, orderRequest, jobApplication } from "@/lib/templates";
import { FormState } from "./";

export const iconProps = {
  size: 20,
  className: "text-slate-700 hover:scale-110 cursor-pointer",
  strokeWidth: 1.5,
};

export const initialFormData: InitialFormData = {
  id: "",
  items: [],
  deletedItems: [],
  name: "Untitled Form",
  loading: false,
  isFavorite: false,
  editMode: true,
  selectedComponent: "formHeader",
  activeTab: 0,
  operation: "",
};

export const initialTheme: Theme = {
  Header: {
    fontSize: "24",
    fontFamily: "Open Sans",
    text: "Untitled form",
  },
  Question: {
    fontSize: "16",
    fontFamily: "Open Sans",
  },
  Text: {
    fontSize: "14",
    fontFamily: "Open Sans",
    text: "Description",
  },
  primaryColor: "#ffffff",
  secondaryColor: "#d9d9d9",
};

const generateOptions = (type: FormType) => {
  switch (type) {
    case FormType.LinearScale:
      return {
        options: [
          {
            id: uuidv4(),
            value: "1",
            order: 1,
            label: "Label",
          },
          {
            id: uuidv4(),
            value: "10",
            order: 2,
            label: "Label",
          },
        ],
      };
    case FormType.SingleChoice:
    case FormType.MultipleChoice:
    case FormType.Dropdown:
      return {
        options: [
          {
            id: uuidv4(),
            value: "Option 1",
            order: 1,
          },
          {
            id: uuidv4(),
            value: "Option 2",
            order: 2,
          },
        ],
      };
    default:
      return {
        options: [],
      };
  }
};

export const newInputItem: (type: FormType, lastOrder?: number) => FormItem = (
  type,
  lastOrder = 0
) => ({
  id: uuidv4(),
  name: "Question",
  order: lastOrder + 1,
  origin: "client",
  section: 0,
  type,
  required: false,
  ...generateOptions(type),
});
export const newSubItem: (lastOrder?: number) => SubItem = (lastOrder = 0) => ({
  id: uuidv4(),
  value: `Option ${lastOrder + 1}`,
  order: lastOrder + 1,
});

export const templateMapper: Record<string, FormState> = {
  rsvp: rsvp,
  orderRequest: orderRequest,
  jobApplication: jobApplication,
};
