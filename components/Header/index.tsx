import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Ribbon from "./Ribbon";

const Header = () => {
  return (
    <header className="flex flex-col text-sm">
      <Ribbon />
      <div className="flex items-center bg-white px-4">
        <div className="relative h-[5.15625rem] w-[13.125rem]">
          <Image src="/homepage/logo-1.webp" alt="Logo" fill />
        </div>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
