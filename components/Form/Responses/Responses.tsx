import {
  FormItemType_Enum,
  useResponseCounterSubscription,
  useResponsesQuery,
} from "@/lib/graphql";
import { SubItem } from "@/types";
import { List } from "./List";
import { cn, pluralize } from "@/lib/utils";
import { PieChart } from "./PieChart";
import { LinearScaleChart } from "./LinearScaleChart";
import Lottie from "lottie-react";
import waitingResponses from "@/public/lotties/waitingResponses.json";
import { Clock, LucideLineChart } from "lucide-react";
import TimelineResponses from "./TimelineResponses";
import { GridCheckboxChart } from "./GridCheckboxChart";
import { MultipleChoiceGridChart } from "./MultipleChoiceGridChart";
import { RatingChart } from "./RatingChart";
import { useFormSelectors } from "@/store";
import { setResponsesTab } from "@/store/actions";

const EMPTY_COMPONENT = () => null;

interface P {
  formId?: string;
}

const componentMapper = {
  [FormItemType_Enum.Text]: EMPTY_COMPONENT,
  [FormItemType_Enum.Short]: List,
  [FormItemType_Enum.Long]: List,
  [FormItemType_Enum.SingleChoice]: PieChart,
  [FormItemType_Enum.SingleChoiceGrid]: GridCheckboxChart,
  [FormItemType_Enum.MultipleChoice]: PieChart,
  [FormItemType_Enum.MultipleChoiceGrid]: MultipleChoiceGridChart,
  [FormItemType_Enum.LinearScale]: LinearScaleChart,
  [FormItemType_Enum.Date]: List,
  [FormItemType_Enum.Dropdown]: PieChart,
  [FormItemType_Enum.Rating]: RatingChart,
  [FormItemType_Enum.PhoneNumber]: List,
  [FormItemType_Enum.Section]: EMPTY_COMPONENT,
};

export const Responses = ({ formId }: P) => {
  const { data: { Form_by_pk: formData } = {}, refetch: refetchForm } =
    useResponsesQuery({
      variables: {
        formId: String(formId),
      },
      skip: !formId,
    });
  const { data: responsesCounter } = useResponseCounterSubscription({
    variables: {
      formId: String(formId),
    },
    skip: !formId,
    onData: () => {
      refetchForm();
    },
  });
  const selectedView = useFormSelectors().responsesTab;
  return (
    <div className="flex flex-col gap-4 w-full md:max-w-3xl p-4">
      <div className="w-full h-auto min-h-16 bg-white shadow-lg rounded-sm p-4 text-lg">
        {!formData || responsesCounter?.Form_by_pk?.responses === 0 ? (
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
              {pluralize(
                responsesCounter?.Form_by_pk?.responses ?? 0,
                "response"
              )}
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
                  onClick={() => setResponsesTab(0)}
                />
                <Clock
                  size={28}
                  className={cn(
                    "text-slate-700 hover:scale-110 cursor-pointer p-1 rounded-sm",
                    selectedView === 1 && "bg-slate-200"
                  )}
                  strokeWidth={1.5}
                  onClick={() => setResponsesTab(1)}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {Boolean(responsesCounter?.Form_by_pk?.responses && selectedView === 0) &&
        (formData?.FormItems ?? [])
          .filter((item) => item.type !== FormItemType_Enum.Text)
          .map((item) => {
            const options = (item.items ?? []) as SubItem[];
            const ResponseComponent = item.type
              ? componentMapper[item.type]
              : EMPTY_COMPONENT;
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
      {Boolean(
        responsesCounter?.Form_by_pk?.responses && selectedView === 1
      ) && <TimelineResponses formId={formData?.id} />}
    </div>
  );
};
