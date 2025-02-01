import TimelineItem from "@/components/Activity/Timeline";
import { AppSelect } from "@/components/controlled-inputs/select";
import {
  DateRangePicker,
  type UpdateValues,
} from "@/components/ui/date-range-picker";
import {
  useActivitiesCountQuery,
  useActivitiesQuery,
  useFormsByNameQuery,
  useOldestNotificationQuery,
} from "@/lib/graphql";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import utc from "dayjs/plugin/utc";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { useAuth } from "@clerk/nextjs";
import AppLoader from "@/components/Layout/AppLoader";
import Lottie from "lottie-react";
import noActivityLottie from "@/public/lotties/noActivity.json";
import { PaginationPrevious, PaginationNext } from "@/components/ui/pagination";
import { useFormSelectors } from "@/store";
dayjs.extend(utc);
dayjs.extend(advancedFormat);

const getTimestamp = (date?: Date, type: "start" | "end" = "start") => {
  const utcDate = dayjs(date).utc(true);
  const timestampFormat = "YYYY-MM-DDTHH:mm:ss.SSSSSS";
  return type === "start"
    ? utcDate.startOf("day").format(timestampFormat)
    : utcDate.endOf("day").format(timestampFormat);
};

const limit = 6;

export default function Index() {
  const { userId } = useAuth();
  const [selectedForm, setSelectedForm] = useState("");
  const [dateFilter, setDateFilter] = useState({
    from: getTimestamp(),
    to: getTimestamp(new Date(), "end"),
  });
  const [offset, setOffset] = useState(0);

  const loadResponse = useFormSelectors().loadForm;

  const getActivitiesQueryVariables = useMemo(() => {
    return {
      ownerId: userId ?? "",
      fromDate: dateFilter.from,
      toDate: dateFilter.to,
      formName: selectedForm || "%%",
      offset,
      limit,
    };
  }, [dateFilter.from, dateFilter.to, offset, selectedForm, userId]);

  const { data: { Notification } = {}, loading } = useOldestNotificationQuery({
    variables: {
      ownerId: userId ?? "",
    },
    skip: !userId,
    onCompleted(data) {
      setDateFilter((prev) => ({
        ...prev,
        from: getTimestamp(data.Notification.at(0)?.createdAt),
      }));
    },
  });
  const { data: { Form } = {}, loading: loadingFormNames } =
    useFormsByNameQuery({
      skip:
        !userId ||
        Notification?.length === 0 ||
        Notification === undefined ||
        loading,
    });
  const {
    data: { Notification: activities } = {},
    loading: loadingActivities,
  } = useActivitiesQuery({
    variables: getActivitiesQueryVariables,
    skip:
      !userId ||
      Notification?.length === 0 ||
      Notification === undefined ||
      loading,
  });
  const { data: { Notification_aggregate: activitiesCount } = {} } =
    useActivitiesCountQuery({
      variables: getActivitiesQueryVariables,
      skip: !activities || loadingActivities,
    });
  const handleDateFilter = (values: UpdateValues) => {
    setDateFilter({
      from: getTimestamp(values.range.from),
      to: getTimestamp(values.range.to ?? new Date(), "end"),
    });
  };

  const filterByNameOptions = (Form ?? []).map((form) => ({
    placeholder: form.name,
    value: form.name,
  }));

  if (loading || loadingFormNames || loadingActivities) return <AppLoader />;
  if (!activitiesCount?.aggregate?.count)
    return (
      <div className="m-4 p-4 shadow-md rounded-sm bg-white flex flex-col gap-4">
        <Lottie
          animationData={noActivityLottie}
          className="flex justify-center self-center items-center max-w-96 max-h-96"
          loop={true}
          width={"100%"}
          height={"100%"}
        />
        <span className="text-slate-500 text-sm self-center">
          No activities yet!
        </span>
      </div>
    );

  return (
    <div className="m-4 p-4 shadow-md rounded-sm bg-white flex flex-col gap-4">
      <div className="flex justify-between flex-col xxs:flex-row">
        <div className="flex flex-col gap-2">
          <span className="text-slate-500 text-sm">
            Showing activity in time range:
          </span>
          <DateRangePicker
            showCompare={false}
            align="start"
            initialDateFrom={new Date(dateFilter.from)}
            initialDateTo={new Date(dateFilter.to)}
            onUpdate={(values) => handleDateFilter(values)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-slate-500 text-sm">
            Search activity by form:
          </span>
          <AppSelect
            className="h-[36px]"
            size={"base"}
            placeholder="Select form"
            defaultValue="All"
            value={selectedForm || "All"}
            options={[
              { placeholder: "All", value: "All" },
              ...filterByNameOptions,
            ]}
            onChange={(value) => {
              if (value === "All") {
                setSelectedForm("");
                return;
              }
              setSelectedForm(value);
            }}
          />
        </div>
      </div>
      <div>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {activities?.map((activity) => (
            <TimelineItem
              key={activity.id}
              date={dayjs(activity.createdAt).format("DD MMM, YYYY - HH:mm")}
              title="A new response has been submitted"
              description={`There's been new activity on form: ${activity.Form?.name}`}
              formId={activity.Form?.id}
              relatedId={activity.relatedId}
              onViewItem={() => {
                if (!activity.Form?.id || !activity.relatedId) return;
                loadResponse(activity.Form?.id, 1, activity.relatedId);
              }}
            />
          ))}
        </ol>
      </div>
      <div className="flex justify-between">
        {offset >= limit ? (
          <PaginationPrevious
            onClick={() => setOffset((prev) => prev - limit)}
          />
        ) : (
          <span />
        )}
        {(activitiesCount?.aggregate?.count ?? 0) > offset + limit && (
          <PaginationNext onClick={() => setOffset((prev) => prev + limit)} />
        )}
      </div>
    </div>
  );
}
