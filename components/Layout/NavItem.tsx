import { cn } from "@/lib";
import Link from "next/link";

interface P {
  title: string;
  icon: React.ReactNode;
  navigateUrl: string;
  active?: boolean;
  onClick?: () => void;
}
export default function NavItem({
  title,
  icon,
  active,
  navigateUrl,
  onClick,
}: P) {
  return (
    <Link
      className={cn(
        "flex flex-row gap-1 sm:gap-2 text-base h-10 items-center px-1 lg:px-4 cursor-pointer",
        active && "border-l-4 ",
        !active && "ml-1 opacity-50"
      )}
      href={navigateUrl}
      onClick={() => onClick?.()}
    >
      <div className="basis-1/5">{icon}</div>
      <div className="basis-4/5 text-sm md:text-base">{title}</div>
    </Link>
  );
}
