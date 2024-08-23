"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { homeNavLinks, otherNavLinks } from "@/lib/data";

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <>
      {pathName === "/" &&
        homeNavLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className="relative block py-3 font-bold duration-300 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-[#d4145a] before:transition-transform before:duration-300 hover:text-[#d4145a] hover:before:scale-x-100 lg:p-0 lg:py-0 lg:before:absolute lg:before:bottom-0 lg:hover:text-white 2xl:text-lg"
            >
              {link.name}
            </Link>
          </li>
        ))}

      {pathName !== "/" &&
        otherNavLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.path}
              className="relative block py-3 font-bold duration-300 before:absolute before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-[#d4145a] before:transition-transform before:duration-300 hover:text-[#d4145a] hover:before:scale-x-100 lg:p-0 lg:py-0 lg:before:bottom-0 lg:hover:text-white 2xl:text-lg"
            >
              {link.name}
            </Link>
          </li>
        ))}
    </>
  );
}
