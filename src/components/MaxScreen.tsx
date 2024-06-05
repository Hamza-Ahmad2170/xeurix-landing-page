type MaxScreenProps = {
  children: React.ReactNode;

  className?: string;
};

export default function MaxScreen({ children, className }: MaxScreenProps) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-10 py-10 xl:h-dvh xl:py-0 ${className}`}
    >
      {children}
    </div>
  );
}
