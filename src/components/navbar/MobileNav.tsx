"use client";
import Link from "next/link";

import { useState } from "react";
import NavBtn from "./NavBtn";

import { cn } from "@/lib/utils";
import { VscChromeClose } from "react-icons/vsc";
import NavLinks from "./NavLinks";
import Logo from "../svg/logo";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const overlayClasses = cn(
    "absolute top-0 left-0 w-full h-full bg-black opacity-50 z-20 xl:hidden",
    {
      block: isOpen,
      hidden: !isOpen,
    }
  );

  return (
    <>
      <header className="bg-[#001b27] py-5 text-white xl:hidden">
        <div className="container flex items-center justify-between">
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>
          <NavBtn isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className={overlayClasses} onClick={() => setIsOpen(false)} />
          <nav
            className={cn(
              "absolute top-0 z-50 h-dvh w-[220px] sm:w-96 bg-[#001b27] pt-10 transition-[left,transform] duration-500 ease-in-out",
              {
                "left-0": isOpen,
                "left-0 -translate-x-96": !isOpen,
              }
            )}
          >
            <div className="flex items-center justify-between p-5">
              <Link href="/" aria-label="Home">
                <Logo />
              </Link>
              <span className="cursor-pointer" onClick={() => setIsOpen(false)}>
                <VscChromeClose className="size-6" />
              </span>
            </div>
            <ul>
              <NavLinks />
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
