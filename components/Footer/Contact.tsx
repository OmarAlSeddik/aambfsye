import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
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
  );
};

export default Contact;
