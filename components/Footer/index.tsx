import { Separator } from "../ui/separator";
import AboutUs from "./AboutUs";
import Academics from "./Academics";
import Contact from "./Contact";
import Pages from "./Pages";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 bg-[#161b29] py-8 text-gray-400">
      <div className="container flex flex-col justify-between gap-8 md:flex-row md:gap-4">
        <Contact />
        <AboutUs />
        <Academics />
        <Pages />
      </div>
      <Separator className="bg-gray-400/50" />
      <span className="text-center">
        © copyright 2022. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
