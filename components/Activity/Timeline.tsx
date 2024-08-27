import { useRouter } from "next/router";
interface P {
  date?: string;
  title?: string;
  description?: string;
  formId?: string;
  relatedId?: string | null;
  onViewItem?: () => void;
}

const TimelineItem = ({
  date,
  title,
  description,
  formId,
  relatedId,
  onViewItem,
}: P) => {
  const router = useRouter();
  return (
    <li className="mb-4 ms-4">
      <div className="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
        {date}
      </time>
      <h3 className="text-md font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-2">
        {description}
      </p>
      {formId && relatedId && (
        <div
          className="flex self-center text-blue-500 text-xs cursor-pointer mb-4 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"
          onClick={() => {
            if (typeof onViewItem !== "function")
              return router.push({
                pathname: "/form/[id]/[response]",
                query: { id: formId, response: relatedId },
              });
            onViewItem();
          }}
        >
          View response
        </div>
      )}
    </li>
  );
};

export default TimelineItem;
