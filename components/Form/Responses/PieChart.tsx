import { pluralize } from "@/lib/utils";
import ReactHtmlParser from "react-html-parser";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { pieChartPalette } from "@/lib/colors";
import { useMemo } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

interface Answer {
  id: string;
  value?: string;
}

interface P {
  name: string;
  count: number;
  answers: Answer[];
}
const prepareChartData = (answers: Answer[]) => {
  const positionMap: Record<string, number> = {};
  answers.forEach((answer) => {
    const positions = answer.value?.split(",");
    positions?.forEach((position) => {
      const trimmedPosition = position.trim();
      positionMap[trimmedPosition] = (positionMap[trimmedPosition] || 0) + 1;
    });
  });
  return {
    labels: Object.keys(positionMap),
    values: Object.values(positionMap),
  };
};
export const PieChart = ({ name, count, answers }: P) => {
  const chartData = useMemo(() => prepareChartData(answers), [answers]);
  return (
    <div className="flex flex-col gap-1 h-auto">
      {ReactHtmlParser(name)}
      <div className="text-sm text-gray-500">
        {pluralize(count, "response")}
      </div>
      <div className="h-72 ml-auto mr-auto">
        <Pie
          data={{
            labels: chartData.labels,
            datasets: [
              {
                data: chartData.values,
                backgroundColor: pieChartPalette,
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                display: true,
                position: "bottom",
              },
            },
          }}
        />
      </div>
    </div>
  );
};
