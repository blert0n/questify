import Link from "next/link";
export default function Nav() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center text-2xl h-[100px]">
        <Link href="/" className="flex justify-center items-center gap-2">
          Questify
        </Link>
      </div>
    </div>
  );
}
