import { cn } from "@/lib/utils";

type MaxScreenProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MaxScreen({ children, className }: MaxScreenProps) {
  return (
    <div
      className={cn(
        "min-h-dvh py-20",
        className,
      )}
    >
      {children}
    </div>
  );
}
