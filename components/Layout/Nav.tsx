import Link from "next/link";
import NavItem from "./NavItem";
import { FileIcon, DashboardIcon } from "@radix-ui/react-icons";
export default function Nav() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center text-2xl h-[100px]">
        <Link href="/" className="flex justify-center items-center gap-2">
          Questify
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <NavItem title="My forms" icon={<FileIcon />} active />
        <NavItem title="Templates" icon={<DashboardIcon />} />
      </div>
    </div>
  );
}
