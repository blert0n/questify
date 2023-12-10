import { Header } from "./Header";
import Nav from "./Nav";

interface P {
  children: React.ReactNode;
}
export default function AppLayout({ children }: P) {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-full sm:w-1/5 hidden sm:block bg-primary h-screen text-white p-4">
        <Nav />
      </div>
      <div className="flex flex-col h-full w-full sm:w-4/5">
        <Header />
        <div className="h-[100%] bg-secondary p-4">{children}</div>
      </div>
    </div>
  );
}
