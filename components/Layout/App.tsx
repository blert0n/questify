import { Header } from "./Header";
import Nav from "./Nav";

interface P {
  children: React.ReactNode;
}
export default function AppLayout({ children }: P) {
  return (
    <div className="flex flex-row h-screen">
      <div className="basis-2/12 bg-primary h-screen text-white p-4">
        <Nav />
      </div>
      <div className="basis-10/12 flex flex-col w-full">
        <Header />
        <div className="bg-secondary h-screen p-4">{children}</div>
      </div>
    </div>
  );
}
