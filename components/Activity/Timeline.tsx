import Link from "next/link";
interface P {
  date?: string;
  title?: string;
  description?: string;
  formId?: string;
  relatedId?: string | null;
}

const TimelineItem = ({ date, title, description, formId, relatedId }: P) => {
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
        <Link
          href={{
            pathname: "/form/[id]/[response]",
            query: { id: formId, response: relatedId },
          }}
          className="flex self-center text-blue-500 text-xs cursor-pointer mb-4 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85]"
        >
          View response
        </Link>
      )}
    </li>
  );
};

export default TimelineItem;
