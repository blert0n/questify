import Link from "next/link";
import NavItem from "./NavItem";
import { useRouter } from "next/router";
import { Folder, Plus, File, Activity, LayoutTemplate } from "lucide-react";
import { useFormSelectors, useModalStoreSelectors } from "@/store";

interface P {
  closeNavMobile?: () => void;
}
export default function Nav({ closeNavMobile }: P) {
  const router = useRouter();
  const openModal = useModalStoreSelectors.use.openModal();
  const resetSession = useFormSelectors.use.resetSession();

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center text-2xl h-[100px]">
        <Link
          href="/"
          className="flex justify-center items-center gap-2"
          onClick={() => closeNavMobile?.()}
        >
          Questify
        </Link>
      </div>
      <div className="flex flex-col gap-4" onClick={() => closeNavMobile?.()}>
        <NavItem
          title="My forms"
          icon={<File size={18} />}
          active={router.pathname === "/"}
          navigateUrl="/"
        />
        <NavItem
          title="Folders"
          icon={<Folder size={18} />}
          active={router.pathname.startsWith("/folders")}
          navigateUrl="/folders"
        />
        <NavItem
          title="Activity"
          icon={<Activity size={18} />}
          active={router.pathname.startsWith("/activity")}
          navigateUrl="/activity"
        />
        <NavItem
          title="Templates"
          icon={<LayoutTemplate size={18} />}
          active={router.pathname.startsWith("/templates")}
          navigateUrl="/templates"
        />
        <NavItem
          title="Create"
          icon={<Plus size={18} />}
          active={router.pathname.startsWith("/create")}
          navigateUrl=""
          onClick={() => {
            closeNavMobile?.();
            openModal();
            resetSession();
          }}
        />
      </div>
    </div>
  );
}
