import { useFormSelectors } from "@/store";

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
  {
    name: "Patient satisfaction survey",
    mapKey: "patientSatisfactionSurvey",
  },
  {
    name: "Demographic Information",
    mapKey: "demographicInformation",
  },
  {
    name: "Volunteer interest form",
    mapKey: "volunteerInterestForm",
  },
  {
    name: "Pet adoption Inquiry",
    mapKey: "petAdoptionInquiry",
  },
  {
    name: "Health assessment",
    mapKey: "healthAssessment",
  },
  {
    name: "Employee Survey",
    mapKey: "employeeSurvey",
  },
  {
    name: "Travel Survey",
    mapKey: "travelSurvey",
  },
];
const Index = () => {
  const loadTemplate = useFormSelectors.use.loadTemplate();

  return (
    <div className="flex flex-col gap-2 text-gray-500 text-sm items-center justify-center bg-white shadow-md p-4 pb-12">
      <span className="text-slate-500 text-sm uppercase font-oswald m-4">
        Browse Templates
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
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
};

export default Index;
