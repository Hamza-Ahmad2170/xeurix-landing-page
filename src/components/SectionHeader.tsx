import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionHeader({
  children,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-4 sm:space-y-10  text-center", className)}>
      {children}
    </div>
  );
}
