export interface Answer {
  id: string;
  value?: string;
}

export interface AnswerMap {
  [rowId: string]: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string | string[];
  }[];
}
