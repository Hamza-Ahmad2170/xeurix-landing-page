export default function NavLinks({ link }: { link: string }) {
  return (
    <a
      href={`#${link}`}
      className="block px-4 py-3 duration-500 hover:text-[#d4145a] xl:py-5"
    >
      {link}
    </a>
  );
}
