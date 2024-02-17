import { pluralize } from "@/lib/utils";
import ReactHtmlParser from "react-html-parser";

interface P {
  name: string;
  count: number;
  answers: {
    id: string;
    value?: string;
  }[];
}
export const List = ({ name, count, answers }: P) => {
  return (
    <div className="flex flex-col gap-1 h-auto">
      {ReactHtmlParser(name)}
      <div className="text-sm text-gray-500">
        {pluralize(count, "response")}
      </div>
      {answers.map((answer) => (
        <div key={answer.id} className="bg-gray-100 p-1 rounded-sm text-sm">
          {answer.value}
        </div>
      ))}
    </div>
  );
};
