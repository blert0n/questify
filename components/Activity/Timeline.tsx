interface P {
  date?: string;
  title?: string;
  description?: string;
}

const TimelineItem = ({ date, title, description }: P) => {
  return (
    <li className="mb-4 ms-4">
      <div className="absolute w-3 h-3 bg-red-500 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
        {date}
      </time>
      <h3 className="text-md font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-sm font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </li>
  );
};

export default TimelineItem;
