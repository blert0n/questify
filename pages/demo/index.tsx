import { FullScreenModal } from "@/components/Form/Modal";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Index = () => {
  const router = useRouter();
  return (
    <FullScreenModal
      visible={true}
      closeFn={() => router.push("/login")}
      saveFn={() =>
        toast.info("Demo - You need to log in to be able to create forms")
      }
    />
  );
};

export default Index;
