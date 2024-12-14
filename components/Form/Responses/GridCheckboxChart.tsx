import { pluralize } from "@/lib/utils";
import ReactHtmlParser from "react-html-parser";
import { getRandomColorFromPalette } from "@/lib/colors";
import { useMemo } from "react";
import { SubItem } from "@/types/form";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ScrollArea, ScrollBar } from "@/components/ui";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const optionsChart = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Answers chart",
    },
  },
};

interface Answer {
  id: string;
  value?: string;
}

interface AnswerMap {
  [rowId: string]: string;
}

interface P {
  name: string;
  count: number;
  answers: Answer[];
  options: SubItem[];
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
}

const prepareChartData = (
  answers: Answer[],
  rows: SubItem[],
  columns: SubItem[]
): ChartData => {
  return columns.reduce(
    (accumulator: ChartData, column) => {
      const dataset = {
        label: column.value,
        data: Array(rows.length).fill(0),
        backgroundColor: getRandomColorFromPalette(),
      };

      for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
        const row = rows[rowIndex];

        for (const answer of answers) {
          let parsedAnswer: AnswerMap = {};

          try {
            parsedAnswer = JSON.parse(answer.value ?? "{}");
          } catch {
            parsedAnswer = {};
          }

          if (parsedAnswer[row.id] === column.value) {
            dataset.data[rowIndex] += 1;
          }
        }
      }

      accumulator.datasets.push(dataset);

      return accumulator;
    },
    {
      labels: rows.map((row) => row.value),
      datasets: [],
    }
  );
};

export const GridCheckboxChart = ({ name, count, answers, options }: P) => {
  const rows = options.filter((option) => option.grid === "row");
  const columns = options.filter((option) => option.grid === "column");
  const chartData = useMemo(
    () => prepareChartData(answers, rows, columns),
    [answers, columns, rows]
  );

  return (
    <div className="flex flex-col gap-1 h-auto">
      {ReactHtmlParser(name)}
      <div className="text-sm text-gray-500">
        {pluralize(count, "response")}
      </div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md p-2">
        <Bar options={optionsChart} data={chartData} />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
