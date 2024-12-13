import { useResponsesQuery } from "@/lib/graphql";
import { FormType, SubItem } from "@/types";
import { List } from "./List";
import { cn, pluralize } from "@/lib/utils";
import { PieChart } from "./PieChart";
import { LinearScaleChart } from "./LinearScaleChart";
import Lottie from "lottie-react";
import waitingResponses from "@/public/lotties/waitingResponses.json";
import { Clock, LucideLineChart } from "lucide-react";
import { useState } from "react";
import TimelineResponses from "./TimelineResponses";

interface P {
  formId?: string;
}

const componentMapper = {
  [FormType.Short]: List,
  [FormType.Long]: List,
  [FormType.SingleChoice]: PieChart,
  [FormType.MultipleChoice]: PieChart,
  [FormType.LinearScale]: LinearScaleChart,
  [FormType.Date]: List,
  [FormType.Dropdown]: PieChart,
};

export const Responses = ({ formId }: P) => {
  const { data: { Form_by_pk: formData } = {} } = useResponsesQuery({
    variables: {
      formId: String(formId),
    },
    skip: !formId,
  });
  const [selectedView, setSelectedView] = useState(0);
  return (
    <div className="flex flex-col gap-4 w-full md:max-w-3xl p-4">
      <div className="w-full h-auto min-h-16 bg-white shadow-lg rounded-sm p-4 text-lg">
        {!formData || formData.responses === 0 ? (
          <div className="flex flex-col gap-2 justify-center">
            <Lottie
              animationData={waitingResponses}
              className="flex justify-center self-center items-center max-w-24 max-h-24"
              loop={true}
              width={"100%"}
              height={"100%"}
            />
            <span className="text-slate-500 text-sm uppercase font-oswald self-center">
              Waiting on responses
            </span>
          </div>
        ) : (
          <div className="flex justify-between items-start">
            <span className="text-slate-500 uppercase font-oswald">
              {pluralize(formData.responses, "response")}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 text-sm">Switch views</span>
              <div className="flex gap-2">
                <LucideLineChart
                  size={28}
                  className={cn(
                    "text-slate-700 hover:scale-110 cursor-pointer p-1 rounded-sm",
                    selectedView === 0 && "bg-slate-200"
                  )}
                  strokeWidth={1.5}
                  onClick={() => setSelectedView(0)}
                />
                <Clock
                  size={28}
                  className={cn(
                    "text-slate-700 hover:scale-110 cursor-pointer p-1 rounded-sm",
                    selectedView === 1 && "bg-slate-200"
                  )}
                  strokeWidth={1.5}
                  onClick={() => setSelectedView(1)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {Boolean(formData?.responses && selectedView === 0) &&
        (formData?.FormItems ?? []).map((item) => {
          const options = (item.items ?? []) as SubItem[];
          const ResponseComponent = componentMapper[item.type as FormType];
          return (
            <div
              key={item.id}
              className="w-full bg-white shadow-lg rounded-sm p-4"
            >
              <ResponseComponent
                name={item.name}
                count={item.Answers_aggregate.aggregate?.count ?? 0}
                answers={item.Answers}
                options={options}
              />
            </div>
          );
        })}
      {Boolean(formData?.responses && selectedView === 1) && (
        <TimelineResponses formId={formData?.id} />
      )}
    </div>
  );
};
