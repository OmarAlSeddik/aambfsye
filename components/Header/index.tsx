import { User } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
    <header className="flex flex-col text-sm">
      <div className="flex justify-between bg-primary p-2 text-[0.9rem] font-semibold text-gray-300 md:px-8">
        <div className="flex gap-4">
          <div className="flex gap-2">
            <span className="text-gray-400">Phone:</span>
            <span className="cursor-pointer transition hover:text-white">
              02348993
            </span>
          </div>
          <Separator orientation="vertical" className="bg-gray-400" />
          <div className="flex gap-2">
            <span className="text-gray-400">Email:</span>
            <span className="cursor-pointer transition hover:text-white">
              infoyemen@aambfs.org
            </span>
          </div>
        </div>
        <div className="flex cursor-pointer items-center gap-2 transition hover:text-white">
          <User />
          <span>Log In</span>
        </div>
      </div>
      <div className="flex border-b border-primary bg-white md:px-4">
        <div className="relative h-[5.15625rem] w-[13.125rem]">
          <Image src="/homepage/logo-1.webp" alt="Logo" fill />
        </div>
        <DesktopNav />
      </div>
    </header>
  );
};

export default Header;
