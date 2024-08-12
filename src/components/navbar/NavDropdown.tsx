import Link from "next/link";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function NavDropdown() {
  return (
    <li className="group relative z-50 px-4 py-3 xl:py-5">
      <button className="flex items-center duration-500 hover:text-[#d4145a]">
        dropdown
        <MdOutlineKeyboardArrowDown className="group-hover:rotate-180" />
      </button>

      <div className="right-0 top-[60px] z-[100] hidden duration-500 group-hover:block xl:absolute">
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
    </li>
  );
}
