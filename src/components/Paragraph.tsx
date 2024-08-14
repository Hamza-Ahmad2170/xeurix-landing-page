import { cn } from "@/lib/utils";

type ParagraphProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Paragraph({ className, children }: ParagraphProps) {
  return (
    <p
      className={cn(
        "text-center text-sm sm:text-xl md:text-[1.5rem] font-semibold mx-auto",
        className
      )}
    >
      {children}
    </p>
  );
}
