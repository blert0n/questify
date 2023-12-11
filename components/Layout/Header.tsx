import { Search } from "../ui/search";
import { BellIcon } from "@radix-ui/react-icons";
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  useUser,
} from "@clerk/nextjs";
import Questify from "@/public/images/questify.png";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="pt-4 md:px-4 px-1 flex flex-col">
      <div className=" h-[100px] flex flex-row items-center">
        <div className="lg:w-1/2 w-1/6 md:text-xl sm:text-sm text-xs font-bold text-gray-700">
          <Image
            src={Questify}
            width={48}
            height={48}
            alt="logo"
            className="cursor-pointer hover:animate-spin"
          />
        </div>
        <div className="flex lg:w-1/2 w-5/6 items-center justify-end">
          <Search className="md:px-2 px-1" />
          <div className="flex justify-center items-center h-[32px] w-[32px]">
            <BellIcon className="h-[24px] w-[24px] hover:scale-110" />
          </div>
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
