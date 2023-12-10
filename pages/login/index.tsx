import Meta from "@/components/Layout/Title";
import Login from "@/components/User/Login";
import { useClerk } from "@clerk/nextjs";

export default function Index() {
  const { loaded } = useClerk();
  console.log(loaded, "loaded");
  return (
    <>
      <Meta title="Questify - Login" />
      <Login />
    </>
  );
}
