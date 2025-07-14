import { useFormSelectors, useModalStoreSelectors } from "@/store";
import { Plus } from "lucide-react";

const templates = [
  {
    name: "RSVP",
    image: "images/rsvp.png",
    mapKey: "rsvp",
  },
  {
    name: "Order request",
    image: "images/orderRequest.png",
    mapKey: "orderRequest",
  },
  {
    name: "Job application",
    image: "images/jobApplication.png",
    mapKey: "jobApplication",
  },
];
export default function Templates() {
  const loadTemplate = useFormSelectors.use.loadTemplate();
  const openModal = useModalStoreSelectors.use.openModal();
  const resetSession = useFormSelectors.use.resetSession();

  return (
    <div className="flex flex-col gap-2 text-gray-500 text-sm items-center justify-center">
      Start a new form
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 self-center">
        <div className="flex flex-col gap-2">
          <div
            className="flex flex-col items-center justify-center gap-2 border-[1.5px] border-gray-200 w-[150px] h-[140px] shadow-md hover:shadow-xl hover:cursor-pointer rounded-md bg-white"
            onClick={() => {
              openModal();
              resetSession();
            }}
          >
            <Plus size={48} className="text-gray-500" strokeWidth={0.5} />
          </div>
          Blank
        </div>
        {templates.map((template, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div
              className="flex flex-col gap-2 w-[150px] h-[140px] shadow-md hover:shadow-xl hover:cursor-pointer rounded-md bg-white"
              onClick={() => loadTemplate(template.mapKey)}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={template.image}
                alt="template"
                className="h-full rounded-md"
              />
            </div>
            {template.name}
          </div>
        ))}
      </div>
    </div>
  );
}
