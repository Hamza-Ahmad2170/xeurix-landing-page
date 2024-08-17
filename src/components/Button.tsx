import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "pill";
  type?: "button" | "submit";
};

export default function Button({
  children,
  className,
  variant,
  type = "button",
}: ButtonProps) {
  return (
    <button
      className={cn(
        "relative z-20 overflow-hidden rounded-md bg-[#d4145a] px-8 py-2 text-base font-bold text-white transition-all duration-700 before:absolute before:left-1/2 before:top-full before:-z-10 before:h-52 before:w-56 before:-translate-x-1/2 before:translate-y-0 before:rounded-full before:bg-[#28A8DF] before:transition-all before:duration-700 hover:before:translate-y-[-50%] sm:text-lg",
        className,
        {
          "rounded-full px-5 py-3": variant === "pill",
        },
      )}
      type={type}
    >
      {children}
    </button>
  );
}
