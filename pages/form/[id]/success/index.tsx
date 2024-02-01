import Lottie from "lottie-react";
import submitted from "@/public/lotties/submitted.json";
import { useRouter } from "next/router";
export default function Index() {
  const router = useRouter();
  const { backgroundColor } = router.query;
  console.log(backgroundColor, "backgroundColor");
  return (
    <div
      className="w-full h-full flex justify-center items-center p-4"
      style={{ backgroundColor: String(backgroundColor) }}
    >
      <div className="w-full xxs:w-64 h-64 bg-white border-t-[1.5px] border-gray-200 rounded-lg shadow-lg flex flex-col gap-2 items-center justify-center">
        <p className="text-gray-500">Form submitted!</p>
        <Lottie
          animationData={submitted}
          className="flex justify-center items-center p-16"
          loop={true}
          style={{ padding: 0 }}
        />
        <p
          className="text-gray-500 hover:cursor-pointer underline"
          onClick={() => router.back()}
        >
          Submit another response
        </p>
      </div>
    </div>
  );
}
