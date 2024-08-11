import { cn } from "@/lib/utils";

type MaxScreenProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MaxScreen({ children, className }: MaxScreenProps) {
  return (
    <div
      className={cn(
        "flex min-h-dvh w-full flex-col items-center justify-center gap-y-5",
        className,
      )}
    >
      {children}
    </div>
  );
}
