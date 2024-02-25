import Link from "next/link";
import { Separator } from "../ui/separator";

const AboutUs = () => {
  return (
    <div className="flex w-[15rem] flex-col gap-4">
      <h2 className="font-bold text-white">ABOUT US</h2>
      <Separator className="bg-secondary" />
      <Link
        href="/educational-philosophy"
        className="transition hover:text-white"
      >
        Educational Philosophy
      </Link>
      <Link href="/why-academy" className="transition hover:text-white">
        Reasons to Join AAMBFS
      </Link>
      <Link
        href="/an-overview-about-the-academy"
        className="transition hover:text-white"
      >
        Our Story
      </Link>
      <Link
        href="/a-word-from-the-president"
        className="transition hover:text-white"
      >
        A Message and Speeches
      </Link>
    </div>
  );
};

export default AboutUs;
