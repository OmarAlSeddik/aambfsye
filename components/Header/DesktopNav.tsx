"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ListItem from "./ListItem";

const DesktopNav = () => {
  return (
    <>
      <NavigationMenu className="ml-auto hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About the Academy</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-[25rem] flex-col p-2">
                <ListItem
                  href="/an-overview-about-the-academy"
                  title="An Overview"
                />
                <ListItem
                  href="/a-word-from-the-president"
                  title="Messages and Speeches"
                />
                <ListItem href="/why-academy" title="Why Academy?" />
                <ListItem
                  href="/educational-philosophy"
                  title="Educational Philosophy"
                />
                <ListItem href="/board-of-trustees" title="Board of Trustees" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Academics</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-[25rem] flex-col p-2">
                <ListItem
                  href="/admission-and-registration"
                  title="Admission and Registration"
                />
                <ListItem href="/" title="PhD Programs" />
                <ListItem href="/" title="Master Programs" />
                <ListItem
                  href="/academic-rules-and-regulations"
                  title="Acedemic Rules and Regulations"
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Training</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex w-[25rem] flex-col p-2">
                <ListItem
                  href="/training-programs-and-professional-diplomas"
                  title="Training Programs and Professional Diplomas"
                />
                <ListItem
                  href="/international-certificates"
                  title="International Certificates"
                />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="https://ojs.aambfsye.org/arab-Journal" target="_blank">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Journals
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/consultancy" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Consultancy
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/statistics" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Statistics
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Language</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="flex flex-col p-2">
                <ListItem href="/" title="Arabic" />
                <ListItem href="/" title="English" />
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default DesktopNav;
