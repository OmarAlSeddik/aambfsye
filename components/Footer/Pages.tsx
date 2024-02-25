import Link from "next/link";
import { Separator } from "../ui/separator";

const Pages = () => {
  return (
    <div className="flex w-[15rem] flex-col gap-4">
      <h2 className="font-bold text-white">PAGES</h2>
      <Separator className="bg-secondary" />
      <Link href="/" className="transition hover:text-white">
        Overview
      </Link>
      <Link href="/" className="transition hover:text-white">
        Consultancy
      </Link>
    </div>
  );
};

export default Pages;
