import { cn } from "@/lib/utils";

type ParagraphProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Paragraph({ className, children }: ParagraphProps) {
  return (
    <p
      className={cn(
        "mx-auto text-center text-base font-semibold sm:text-xl 2xl:text-[1.5rem]",
        className,
      )}
    >
      {children}
    </p>
  );
}
