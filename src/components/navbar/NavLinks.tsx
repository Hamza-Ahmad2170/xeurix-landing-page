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
          <li key={link}>
            <Link
              href={`/#${link}`}
              className="block p-5 transition-all duration-300 hover:text-[#d4145a]"
            >
              {link}
            </Link>
          </li>
        ))}

      {pathName !== "/" &&
        otherNavLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={`/${link.path}`}
              className="block p-5 transition-all duration-300 hover:text-[#d4145a]"
            >
              {link.name}
            </Link>
          </li>
        ))}
    </>
  );
}
