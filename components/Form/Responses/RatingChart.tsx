import { pluralize } from "@/lib/utils";
import parse from "html-react-parser";
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
import { Answer, ChartData } from "./types";
import { optionsChart } from "./constants";
import { getRandomColorFromPalette } from "@/lib";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface P {
  name: string;
  count: number;
  answers: Answer[];
  options: SubItem[];
}

const generateScaleOptions = (start: string = "1", end: string = "10") => {
  const startNumber = Number(start);
  const endNumber = Number(end);

  return Array.from(
    { length: endNumber - startNumber + 1 },
    (_, index) => startNumber + index
  ).map(String);
};

const prepareChartData = (answers: Answer[], options: SubItem[]): ChartData => {
  const ratings = generateScaleOptions("1", options.at(0)?.value);

  const counts = ratings.map(
    (rating) => answers.filter((answer) => answer.value === rating).length
  );

  return {
    labels: ratings,
    datasets: [
      {
        label: "Count",
        data: counts,
        backgroundColor: ratings.map(() => getRandomColorFromPalette()),
      },
    ],
  };
};

export const RatingChart = ({ name, count, answers, options }: P) => {
  const chartData = useMemo(
    () => prepareChartData(answers, options),
    [options, answers]
  );

  return (
    <div className="flex flex-col gap-1 h-auto">
      {parse(name)}
      <div className="text-sm text-gray-500">
        {pluralize(count, "response")}
      </div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md p-2">
        <Bar options={optionsChart(false)} data={chartData} />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
