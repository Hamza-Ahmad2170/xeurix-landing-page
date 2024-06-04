type NavBarToggleProps = {
  isToggleOpen: boolean;
  setIsToggleOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavBarToggle({
  isToggleOpen,
  setIsToggleOpen,
}: NavBarToggleProps) {
  return (
    <button
      className="relative right-0 top-0 z-20 flex h-10 w-10 rounded-md border-2 shadow-2xl xl:hidden"
      onClick={() => setIsToggleOpen(!isToggleOpen)}
    >
      <div className="absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center">
        <span
          className={`absolute h-0.5 w-5 transform bg-white transition duration-300 ease-in-out ${
            isToggleOpen ? "rotate-45" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          className={`absolute h-0.5 w-5 transform bg-white transition duration-300 ease-in-out ${
            isToggleOpen ? "rotate-45" : ""
          }`}
        ></span>
        <span
          className={`absolute h-0.5 w-5 transform bg-white transition duration-300 ease-in-out ${
            isToggleOpen ? "-rotate-45" : "translate-y-1.5"
          }`}
        ></span>
      </div>
    </button>
  );
}
