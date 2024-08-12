import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeader({children, className}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-5 text-center", className)}>
      {children}
    </div>
  )
}
