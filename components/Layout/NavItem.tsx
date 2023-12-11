import { cn } from "@/lib";

interface P {
  title: string;
  icon: React.ReactNode;
  active?: boolean;
}
export default function NavItem({ title, icon, active }: P) {
  return (
    <div
      className={cn(
        "flex flex-row gap-1 sm:gap-2 text-base h-10 items-center px-1 lg:px-4 cursor-pointer",
        active && "border-l-4",
        !active && "ml-1"
      )}
    >
      <div className="basis-1/5">{icon}</div>
      <div
        className="basis-4/5 text-sm md:text-base"
        style={!active ? { opacity: "50%" } : {}}
      >
        {title}
      </div>
    </div>
  );
}
