import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 bg-[#161b29] py-8 text-gray-400">
      <div className="container flex flex-col justify-between md:flex-row">
        <div className="flex w-[15rem] flex-col gap-4">
          <div className="relative h-[5.15625rem] w-[13.125rem]">
            <Image src="/homepage/Logo-wight-5665.webp" alt="" fill />
          </div>
          <p>
            Aden, Al-Mansoura, <br /> Ninety Street, Beside Qutaibi Bank
          </p>
          <div className="flex flex-col">
            <div className="flex gap-2">
              <span>Call:</span>
              <Link href="/" className="transition hover:text-white">
                00967776866608
              </Link>
            </div>
            <div className="flex gap-2">
              <span>Email:</span>
              <Link href="/" className="transition hover:text-white">
                info@aambfsye.org
              </Link>
            </div>
          </div>
          <div className="flex gap-2 text-white">
            <a
              href="/"
              target="_blank"
              className="flex size-10 items-center justify-center rounded-full p-2 transition hover:bg-[#3b5998]"
            >
              <Facebook />
            </a>
            <a
              href="/"
              target="_blank"
              className="flex size-10 items-center justify-center rounded-full p-2 transition hover:bg-[#1DA1F2]"
            >
              <Twitter />
            </a>
            <a
              href="/"
              target="_blank"
              className="flex size-10 items-center justify-center rounded-full p-2 transition hover:bg-[#0077B5]"
            >
              <Linkedin />
            </a>
          </div>
        </div>
        <div className="flex w-[15rem] flex-col gap-4">
          <h2 className="font-bold text-white">ABOUT US</h2>
          <Separator className="bg-secondary" />
          <Link
            href="/en/educational-philosophy"
            className="transition hover:text-white"
          >
            Educational Philosophy
          </Link>
          <Link href="/en/why-academy" className="transition hover:text-white">
            Reasons to Join AAMBFS
          </Link>
          <Link
            href="/en/an-overview-about-the-academy"
            className="transition hover:text-white"
          >
            Our Story
          </Link>
          <Link
            href="/en/a-word-from-the-president"
            className="transition hover:text-white"
          >
            A Message and Speeches
          </Link>
        </div>
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
      </div>
      <Separator className="bg-gray-400/50" />
      <span className="text-center">
        © copyright 2022. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
