import { IoSearchOutline } from "react-icons/io5";

type Props = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

function BlogSearchBar({ searchTerm, setSearchTerm }: Props) {
  return (
    <form className="relative mx-auto w-full max-w-[450px]">
      <input
        placeholder="Search"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full overflow-hidden rounded-[20px] border-2 border-[#29abe2] py-2 pl-3 text-sm outline-none ring-0 placeholder:text-sm focus:ring-0"
      />
      <button
        className="absolute right-3 top-1/2 -translate-y-1/2"
        type="submit"
      >
        <IoSearchOutline />
      </button>
    </form>
  );
}

export default BlogSearchBar;
