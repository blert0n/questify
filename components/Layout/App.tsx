import { useBoolean } from "usehooks-ts";
import { Header } from "./Header";
import Nav from "./Nav";
import Meta from "./Title";
import { cn, useMediaScreen } from "@/lib";
import { motion } from "framer-motion";

interface P {
  children: React.ReactNode;
}
export default function AppLayout({ children }: P) {
  const [smScreen] = useMediaScreen("sm");
  const { value: isNavOpen, toggle: toggleNav } = useBoolean(true);

  return (
    <>
      <Meta />
      <div className="flex flex-row h-screen">
        <motion.div
          animate={smScreen && isNavOpen ? "open" : "closed"}
          className={cn(
            "w-full bg-primary sm:w-1/6 sm:block hidden h-screen text-white py-4 md:pr-4 pr-2",
            (!smScreen || !isNavOpen) && "sm:hidden w-screen"
          )}
          variants={{
            open: {
              opacity: 1,
              x: 0,
            },
            closed: {
              opacity: 0,
              x: "-100%",
            },
          }}
        >
          <Nav />
        </motion.div>
        <div
          className={cn(
            "flex flex-col h-full w-full sm:w-5/6",
            (!smScreen || !isNavOpen) && "sm:w-full"
          )}
        >
          <Header toggleNav={toggleNav} />
          <div className="h-[100%] bg-secondary p-4">{children}</div>
        </div>
      </div>
    </>
  );
}
