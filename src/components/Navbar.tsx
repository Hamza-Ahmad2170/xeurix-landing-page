"use client";

import Link from "next/link";
import { useState } from "react";

import XeurixLogo from "./svg/XeurixLogo.svg";
import NavBarToggle from "./NavBarToggle";
import DemoSvg from "./svg/Demo.svg";
import NavDropdown from "./NavDropdown";
import { usePathname } from "next/navigation";

import NavLinks from "./NavLinks";

const homeNavLinks = [
  "products",
  "Assessment",
  "By Industry",
  "By Job Role",
  "Resources",
  "FAQs",
];

const otherNavLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Contact us",
    path: "/contact-us",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#001b27] py-3 text-white xl:py-0">
      <div className="relative">
        <nav className="container flex items-center justify-between">
          <Link href={"/"}>
            <XeurixLogo />
          </Link>

          <NavBarToggle isOpen={isOpen} setIsOpen={setIsOpen} />

          <div
            className={`absolute left-0 right-0 -z-10 grow justify-center bg-[#001b27] opacity-100 transition-[top] duration-300 ease-in xl:static xl:z-10 xl:flex xl:min-h-max ${isOpen ? "top-full" : "-top-80 opacity-0"}`}
          >
            <ul className="container min-h-64 items-center justify-center xl:flex xl:min-h-max">
              {pathName === "/" &&
                homeNavLinks.map((link) => (
                  <li key={link}>
                    <NavLinks link={link} />
                  </li>
                ))}

              {pathName !== "/" &&
                otherNavLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="block py-3 transition-all duration-500 hover:text-[#d4145a] xl:px-4 xl:py-5"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              <NavDropdown />
            </ul>
          </div>

          <ul className="hidden items-center xl:flex">
            <li>
              <Link href={"/login"} className="px-4 py-5">
                Login
              </Link>
            </li>
            <li>
              <Link
                href={"/demo"}
                className="flex items-center justify-between gap-2 rounded-full bg-[#d4145a] px-5 py-2"
              >
                <DemoSvg />
                Request Demo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
