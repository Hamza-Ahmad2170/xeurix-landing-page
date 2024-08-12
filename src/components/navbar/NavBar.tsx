import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "../svg/logo";
import DemoSvg from "../svg/Demo";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 hidden bg-[#001b27] text-white xl:block">
      <div className="container flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <nav>
          <ul className="flex">
            <NavLinks />
          </ul>
        </nav>
        <div className="hidden items-center xl:flex">
          <Link href="https://app.xeurix.com/" className="px-4 py-5">
            Login
          </Link>
          <Link
            href="/demo"
            className="flex items-center justify-between gap-2 rounded-full bg-[#d4145a] px-5 py-2"
          >
            <DemoSvg />
            Request Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
