import { cn } from "@/lib/utils";

type ParagraphProps = {
  className?: string;
  children: React.ReactNode;
};

export default function Paragraph({ className, children }: ParagraphProps) {
  return <p className={cn("text-center text-lg", className)}>{children}</p>;
}
