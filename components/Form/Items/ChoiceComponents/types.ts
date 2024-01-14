import { TextStyling } from "@/types";
export interface Option {
  id: string;
  order?: number;
  index: number;
  value: string;
  addon?: boolean;
  selected?: boolean;
  locked?: boolean;
  isDraggable?: boolean;
  type?: string;
  styling: TextStyling;
  onChange?: (value: string) => void;
  onRemove?: () => void;
  onClick?: () => void;
}
