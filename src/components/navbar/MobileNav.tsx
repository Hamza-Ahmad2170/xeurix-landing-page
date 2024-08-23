"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "../../../public/svg/xeurix.svg";
import NavBtn from "./NavBtn";
import { cn } from "@/lib/utils";
import { VscChromeClose } from "react-icons/vsc";
import NavLinks from "./NavLinks";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const overlayClasses = cn(
    "fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20 xl:hidden",
    {
      block: isOpen,
      hidden: !isOpen,
    },
  );

  return (
    <header className="sticky top-0 z-50 bg-[#001b27] py-5 text-white lg:hidden">
      <div className="container flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Image src={logo} alt="Xeurix Logo" />
        </Link>
        <NavBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className={overlayClasses} onClick={() => setIsOpen(false)} />
        <nav
          className={cn(
            "fixed top-0 z-50 h-dvh w-[300px] bg-[#001b27] px-6 pt-10 transition-[left,transform] duration-500 ease-in-out sm:w-96",
            {
              "left-0": isOpen,
              "left-0 -translate-x-96": !isOpen,
            },
          )}
        >
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Home">
              <Image src={logo} alt="Xeurix Logo" />
            </Link>
            <span className="cursor-pointer" onClick={() => setIsOpen(false)}>
              <VscChromeClose className="size-6" />
            </span>
          </div>
          <ul className="mt-8">
            <NavLinks />
          </ul>
        </nav>
      </div>
    </header>
  );
}
