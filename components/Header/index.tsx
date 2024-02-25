import Image from "next/image";
import DesktopNav from "./DesktopNav";
import Ribbon from "./Ribbon";

const Header = () => {
  return (
    <header className="flex flex-col text-sm">
      <Ribbon />
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
