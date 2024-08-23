import logo from "../../../public/svg/xeurix.svg";
import demo from "../../../public/svg/demo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import BtnLink from "../BtnLink";
import NavLinks from "./NavLinks";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 hidden bg-[#001b27] py-4 text-white lg:block">
      <div className="container flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Image src={logo} alt="Xeurix Logo" title="logo" />
          <span className="sr-only">Home</span>
        </Link>
        <nav>
          <ul className="flex items-center justify-center gap-10">
            <NavLinks />
          </ul>
        </nav>
        <ul className="hidden items-center gap-4 font-bold xl:flex 2xl:text-lg">
          <li>
            <Link
              href="https://app.xeurix.com/"
              className="flex items-center gap-2"
            >
              <FaUser /> Login
            </Link>
          </li>
          <li>
            <BtnLink
              href="/demo"
              variant="pill"
              className="flex items-center justify-between gap-2"
            >
              <Image src={demo} alt="Demo" title="Demo" />
              Request Demo
            </BtnLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
