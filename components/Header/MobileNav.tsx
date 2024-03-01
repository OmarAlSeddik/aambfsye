import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";

const MobileNav = () => {
  // temp
  const user = false;

  const links = [
    { title: "About the Academy", url: "/" },
    { title: "Academics", url: "/" },
    { title: "Journals", url: "https://ojs.aambfsye.org/arab-Journal" },
    { title: "Training", url: "/" },
    { title: "Consultancy", url: "/consultancy" },
    { title: "Statistics", url: "/statistics" },
    { title: "Blog", url: "/blog" },
    { title: "Contact Us", url: "/contact-us" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild className="ml-auto">
        <div className="rounded bg-primary p-2 text-3xl text-white md:hidden">
          <Menu className="size-6" />
        </div>
      </SheetTrigger>
      <SheetContent side={"top"} className="bg-primary px-0 py-4 text-gray-300">
        <nav className="flex flex-col items-center gap-4 text-lg">
          {links.map((item, index) => (
            <>
              <SheetClose asChild key={index}>
                <Link href={item.url}>{item.title}</Link>
              </SheetClose>
              <Separator />
            </>
          ))}
          {!user && (
            <SheetClose asChild>
              <Link href="/">Login</Link>
            </SheetClose>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
