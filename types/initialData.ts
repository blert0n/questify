import { Theme, FormItem, SubItem, InitialFormData } from "./form";
import { v4 as uuidv4 } from "uuid";
import {
  rsvp,
  orderRequest,
  jobApplication,
  employeeSurvey,
  travelSurvey,
  healthAssessment,
  petAdoptionInquiry,
  volunteerInterestForm,
  demographicInformation,
  patientSatisfactionSurvey,
  socialMediaUsage,
  onlineShoppingExperience,
} from "@/lib/templates";
import { FormState } from "./";
import { FormItemType_Enum } from "@/lib/graphql";

type Options = {
  options: FormItem["options"];
};

const titleMapper = {
  DATE: "Date",
  DROPDOWN: "Dropdown",
  LINEAR_SCALE: "Scale",
  LONG: "Textarea",
  MULTIPLE_CHOICE: "Multiple choice",
  MULTIPLE_CHOICE_GRID: "Multiple choice grid",
  SHORT: "Text",
  SINGLE_CHOICE: "Single choice",
  SINGLE_CHOICE_GRID: "Single choice grid",
  TEXT: "Paragraph",
  RATING: "Rating",
  PHONE_NUMBER: "Phone number",
  SECTION: "Page",
};

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
  selectedResponse: "",
  responsesTab: 0,
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
  primaryColor: "#673ab7",
  secondaryColor: "#e1d8f1",
};

const generateOptions = (type: FormItemType_Enum): Options => {
  switch (type) {
    case FormItemType_Enum.LinearScale:
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
    case FormItemType_Enum.Rating:
      return {
        options: [
          {
            id: uuidv4(),
            value: "5",
            order: 1,
          },
        ],
      };
    case FormItemType_Enum.SingleChoice:
    case FormItemType_Enum.MultipleChoice:
    case FormItemType_Enum.Dropdown:
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
    case FormItemType_Enum.SingleChoiceGrid:
    case FormItemType_Enum.MultipleChoiceGrid:
      return {
        options: [
          {
            id: uuidv4(),
            value: "Row 1",
            order: 1,
            grid: "row",
          },
          {
            id: uuidv4(),
            value: "Row 2",
            order: 2,
            grid: "row",
          },
          {
            id: uuidv4(),
            value: "Column 1",
            order: 1,
            grid: "column",
          },
          {
            id: uuidv4(),
            value: "Column 2",
            order: 2,
            grid: "column",
          },
        ],
      };
    default:
      return {
        options: [],
      };
  }
};

export const newInputItem: (
  type: FormItemType_Enum,
  lastOrder?: number
) => FormItem = (type, lastOrder = 0) => ({
  id: uuidv4(),
  name: titleMapper[type],
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
export const newGridItem: (
  grid?: "row" | "column",
  lastOrder?: number
) => SubItem = (grid = "row", lastOrder = 0) => ({
  id: uuidv4(),
  value: `${grid === "row" ? "Row" : "Column"} ${lastOrder + 1}`,
  grid,
  order: lastOrder + 1,
});

export const templateMapper: Record<string, FormState> = {
  rsvp,
  orderRequest,
  jobApplication,
  employeeSurvey,
  travelSurvey,
  healthAssessment,
  petAdoptionInquiry,
  volunteerInterestForm,
  demographicInformation,
  patientSatisfactionSurvey,
  socialMediaUsage,
  onlineShoppingExperience,
};
