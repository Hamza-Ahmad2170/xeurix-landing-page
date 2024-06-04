import Link from "next/link";

export default function NavDropdown() {
  return (
    <div className="right-0 top-[60px] z-50 hidden duration-500 group-hover:block xl:absolute">
      <ul className="grid w-full grid-cols-1 gap-2 rounded-md bg-white p-4 text-black xl:w-60 xl:grid-cols-2">
        <li>
          <Link href={"/login"} className="px-4 py-5">
            Login
          </Link>
        </li>
        <li>
          <Link href={"/login"} className="px-4 py-5">
            Login
          </Link>
        </li>
        <li>
          <Link href={"/login"} className="px-4 py-5">
            Login
          </Link>
        </li>
        <li>
          <Link href={"/login"} className="px-4 py-5">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}
