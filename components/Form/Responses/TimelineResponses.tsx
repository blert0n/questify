import TimelineItem from "@/components/Activity/Timeline";
import { useFormResponsesQuery } from "@/lib/graphql";
import { useAuth } from "@clerk/nextjs";
import dayjs from "dayjs";
import { useState } from "react";
import FormResponse from "./FormResponse";

interface P {
  formId?: string;
}

const TimelineResponses = ({ formId }: P) => {
  const { userId } = useAuth();
  const { data: { Notification: responses } = {} } = useFormResponsesQuery({
    variables: {
      formId: formId ?? "",
      ownerId: userId ?? "",
    },
    skip: !formId || !userId,
  });
  const [selectedResponse, setSelectedResponse] = useState("");

  if (selectedResponse)
    return (
      <FormResponse
        formId={formId}
        responseId={selectedResponse}
        onBackButton={() => setSelectedResponse("")}
      />
    );

  return (
    <div className="w-full bg-white shadow-lg rounded-sm p-4">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {responses?.map((response) => (
          <TimelineItem
            key={response.id}
            date={dayjs(response.createdAt).format("DD MMM, YYYY - HH:mm")}
            title="A new response has been submitted"
            formId={formId}
            relatedId={response.relatedId}
            onViewItem={() => {
              if (!response.relatedId) return;
              setSelectedResponse(response.relatedId);
            }}
          />
        ))}
      </ol>
    </div>
  );
};

export default TimelineResponses;
