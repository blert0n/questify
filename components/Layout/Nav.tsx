import Link from "next/link";
import NavItem from "./NavItem";
import { FileIcon, DashboardIcon, PlusIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";

interface P {
  closeNavMobile?: () => void;
}
export default function Nav({ closeNavMobile }: P) {
  const router = useRouter();
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center text-2xl h-[100px]">
        <Link href="/" className="flex justify-center items-center gap-2">
          Questify
        </Link>
      </div>
      <div
        className="flex flex-col gap-4"
        onClick={() => (closeNavMobile ? closeNavMobile() : undefined)}
      >
        <NavItem
          title="My forms"
          icon={<FileIcon />}
          active={router.pathname === "/"}
          navigateUrl="/"
        />
        <NavItem
          title="Templates"
          icon={<DashboardIcon />}
          active={router.pathname.startsWith("/templates")}
          navigateUrl="/templates"
        />
        <NavItem
          title="Create"
          icon={<PlusIcon />}
          active={router.pathname.startsWith("/create")}
          navigateUrl="/create"
        />
      </div>
    </div>
  );
}
