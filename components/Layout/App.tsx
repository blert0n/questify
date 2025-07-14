import { useBoolean } from "usehooks-ts";
import { Header } from "./Header";
import Nav from "./Nav";
import Meta from "./Title";
import { cn, useMediaScreen } from "@/lib";
import { motion } from "framer-motion";
import { FullScreenModal } from "../Form/Modal";
import { useFormSelectors, useModalStoreSelectors } from "@/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface P {
  children: React.ReactNode;
}
export default function AppLayout({ children }: P) {
  const [smScreen] = useMediaScreen("sm");
  const { value: isNavOpen, toggle: toggleNav } = useBoolean(true);
  const closeModal = useModalStoreSelectors.use.closeModal();
  const isModalVisible = useModalStoreSelectors.use.isModalVisible();
  const saveForm = useFormSelectors.use.saveForm();
  const resetSession = useFormSelectors.use.resetSession();

  return (
    <>
      <Meta />
      <div className="flex flex-row h-screen">
        <div
          className={cn(
            "w-full bg-primary sm:w-1/6 sm:block hidden h-screen text-white py-4 md:pr-4 pr-2",
            (!smScreen || !isNavOpen) && "sm:hidden w-screen"
          )}
        >
          <motion.div
            animate={smScreen && isNavOpen ? "open" : "closed"}
            variants={{
              open: {
                opacity: 1,
                x: 0,
                transition: {
                  ease: "easeIn",
                },
              },
              closed: {
                opacity: 0,
                x: "-100%",
              },
            }}
          >
            <Nav />
          </motion.div>
        </div>
        <div
          className={cn(
            "flex flex-col h-full w-full sm:w-5/6",
            (!smScreen || !isNavOpen) && "sm:w-full"
          )}
        >
          <Header toggleNav={toggleNav} />
          <div className="h-[100%] bg-secondary overflow-auto">
            <FullScreenModal
              visible={isModalVisible}
              closeFn={() => {
                closeModal();
                resetSession();
              }}
              saveFn={saveForm}
            />
            {children}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        bodyStyle={{ fontSize: "14px" }}
      />
    </>
  );
}
