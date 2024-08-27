import { useResponsesQuery } from "@/lib/graphql";
import { FormType, SubItem } from "@/types";
import { List } from "./List";
import { pluralize } from "@/lib/utils";
import { PieChart } from "./PieChart";
import { LinearScaleChart } from "./LinearScaleChart";
import Lottie from "lottie-react";
import waitingResponses from "@/public/lotties/waitingResponses.json";

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
  return (
    <div className="flex flex-col gap-4 w-full md:max-w-3xl">
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
          <>{pluralize(formData.responses, "response")}</>
        )}
      </div>
      {Boolean(formData?.responses) &&
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
    </div>
  );
};
