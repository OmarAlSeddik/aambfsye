import Link from "next/link";
import { Separator } from "../ui/separator";

const Academics = () => {
  return (
    <div className="flex w-[15rem] flex-col gap-4">
      <h2 className="font-bold text-white">ACADEMICS</h2>
      <Separator className="bg-secondary" />
      <Link href="/" className="transition hover:text-white">
        Master Programs
      </Link>
      <Link href="/" className="transition hover:text-white">
        Int’l Professional Certificates
      </Link>
      <Link href="/" className="transition hover:text-white">
        Training Programs & Diplomas
      </Link>
    </div>
  );
};

export default Academics;
