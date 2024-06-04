"use client";
import { useState } from "react";
import Link from "next/link";
import DemoSvg from "./svg/Demo.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import XeurixLogo from "./svg/XeurixLogo.svg";
import NavLinks from "./NavLinks";
import NavDropdown from "./NavDropdown";
import NavBarToggle from "./NavBarToggle";

const navLinks = [
  "products",
  "Assessment",
  "By Industry",
  "By Job Role",
  "Resources",
  "FAQs",
];

export default function NavBar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  return (
    <header className="bg-[#001b27] py-3 text-white xl:py-0 ">
      <nav className="container justify-between xl:flex ">
        <div className="flex items-center justify-between">
          <Link href="/">
            <XeurixLogo />
          </Link>

          <NavBarToggle
            isToggleOpen={isToggleOpen}
            setIsToggleOpen={setIsToggleOpen}
          />
        </div>
        <ul
          className={` transition-[visibility]  xl:visible  ${
            isToggleOpen ? "visible block" : "hidden"
          } xl:flex`}
        >
          {navLinks.map((link) => (
            <NavLinks key={link} link={link} />
          ))}
          <li className="group relative z-50 px-4 py-3 xl:py-5">
            <button className="flex cursor-default items-center  duration-500 hover:text-[#d4145a]">
              dropdown
              <MdOutlineKeyboardArrowDown className="group-hover:rotate-180" />
            </button>
            <NavDropdown />
          </li>
        </ul>

        <ul className="hidden items-center xl:flex">
          <li>
            <Link href={"/login"} className="px-4 py-5">
              Login
            </Link>
          </li>
          <li>
            <Link
              href={"/demo"}
              className="flex items-center justify-between gap-2 rounded-full bg-[#d4145a]  px-5 py-2"
            >
              <DemoSvg />
              Request Demo
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
