import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import Nav from "./Nav";
import { useBoolean } from "usehooks-ts";
export default function NavMobile() {
  const { value, toggle } = useBoolean(false);
  return (
    <Sheet open={value}>
      <Menu
        className="h-[32px] w-[32px] pl-2 hover:scale-110"
        onClick={() => toggle()}
      />
      <SheetContent
        side={"left"}
        className="bg-primary px-0 text-white w-[200px]"
        onClose={() => toggle()}
        onEscapeKeyDown={() => toggle()}
      >
        <Nav closeNavMobile={() => toggle()} />
      </SheetContent>
    </Sheet>
  );
}
