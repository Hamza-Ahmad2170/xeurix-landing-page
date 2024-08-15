"use client";

import { homeNavLinks, otherNavLinks } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathName = usePathname();

  return (
    <>
      {pathName === "/" &&
        homeNavLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={`${link.path}`}
              className="relative block py-3 pl-4 font-bold duration-300 before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:origin-left before:scale-x-0 before:bg-[#d4145a] before:transition-transform before:duration-300 hover:text-[#d4145a] hover:before:scale-x-100 lg:p-0 lg:hover:text-white"
            >
              {link.name}
            </Link>
          </li>
        ))}

      {pathName !== "/" &&
        otherNavLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={`${link.path}`}
              className="block p-5 transition-all duration-300 hover:text-[#d4145a]"
            >
              {link.name}
            </Link>
          </li>
        ))}
    </>
  );
}
