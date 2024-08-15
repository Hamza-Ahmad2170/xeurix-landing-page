import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "../svg/logo";
import DemoSvg from "../svg/Demo";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 hidden bg-[#001b27] py-2 text-white xl:block">
      <div className="container flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Logo />
        </Link>
        <nav>
          <ul className="items-center gap-10 lg:flex">
            <NavLinks />
          </ul>
        </nav>
        <div className="hidden items-center xl:flex">
          <Link href="https://app.xeurix.com/" className="px-4 py-5">
            Login
          </Link>
          <Link
            href="/demo"
            className="relative z-20 flex items-center justify-between gap-4 overflow-hidden rounded-full bg-[#d4145a] px-5 py-3 text-lg text-white transition-all duration-700 before:absolute before:left-1/2 before:top-full before:-z-10 before:h-52 before:w-56 before:-translate-x-1/2 before:translate-y-0 before:rounded-full before:bg-[#28A8DF] before:transition-all before:duration-700 hover:before:translate-y-[-50%]"
          >
            <DemoSvg />
            Request Demo
          </Link>
        </div>
      </div>
    </header>
  );
}
