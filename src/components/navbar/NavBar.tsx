import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "../svg/logo";
import DemoSvg from "../svg/Demo";
import Button from "../Button";

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
        <div className="hidden items-center font-bold xl:flex">
          <Link href="https://app.xeurix.com/" className="px-4 py-5">
            Login
          </Link>
          <Button
            variant="pill"
            className="flex items-center justify-between gap-2"
          >
            <DemoSvg />
            <Link href="/demo">Request Demo</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
