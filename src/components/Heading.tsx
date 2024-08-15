import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children: React.ReactNode;
};
export default function Heading({ className, children }: Props) {
  return (
    <h2
      className={cn(
        "text-[1.38rem] md:text-4xl lg:text-[3.4rem] font-bold",
        className
      )}
    >
      {children}
    </h2>
  );
}
