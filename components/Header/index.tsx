import Image from "next/image";
import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Ribbon from "./Ribbon";

const Header = () => {
  return (
    <header className="flex flex-col text-sm">
      <Ribbon />
      <div className="flex items-center bg-white px-4">
        <Link href="/">
          <div className="relative h-[5.15625rem] w-[13.125rem]">
            <Image src="/home/logo-1.webp" alt="Logo" fill />
          </div>
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
