import { useResponsesQuery } from "@/lib/graphql";
import { FormType } from "@/types";
import { List } from "./List";
import { pluralize } from "@/lib/utils";
import { PieChart } from "./PieChart";

interface P {
  formId?: string;
}

const componentMapper = {
  [FormType.Short]: List,
  [FormType.Long]: List,
  [FormType.SingleChoice]: PieChart,
  [FormType.MultipleChoice]: PieChart,
  [FormType.LinearScale]: PieChart,
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
      <div className="w-full h-16 bg-white shadow-lg rounded-sm p-4 text-lg">
        {!formData || formData.responses === 0 ? (
          <>Waiting on responses</>
        ) : (
          <>{pluralize(formData.responses, "response")}</>
        )}
      </div>
      {Boolean(formData?.responses) &&
        (formData?.FormItems ?? []).map((item) => {
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
              />
            </div>
          );
        })}
    </div>
  );
};
