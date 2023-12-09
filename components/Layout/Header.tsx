import { Search } from "../ui/search";
import { BellIcon } from "@radix-ui/react-icons";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <div className="pt-4 px-4 flex flex-col">
      <div className=" h-[100px] flex flex-row items-center">
        <div className="basis-1/2 text-xl font-bold text-gray-700">
          Welcome back, John!
        </div>
        <div className="flex basis-1/2 items-center justify-end">
          <Search className="px-2" />
          <BellIcon className="h-[20px] w-[20px] hover:scale-110" />
          <div className="px-2">
            <SignedIn>
              <UserButton afterSignOutUrl="/login" signInUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
};
