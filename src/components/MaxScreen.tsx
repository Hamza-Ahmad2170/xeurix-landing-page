type MaxScreenProps = {
  children: React.ReactNode;

  className?: string;
};

export default function MaxScreen({ children, className }: MaxScreenProps) {
  return (
    <div
      className={`flex min-h-dvh w-full flex-col items-center justify-center gap-10 py-10 ${className}`}
    >
      {children}
    </div>
  );
}
