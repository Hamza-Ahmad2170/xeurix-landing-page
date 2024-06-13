type SectionHeadingProps = {
  className?: string;
  children: React.ReactNode;
};

export default function SectionHeading({
  className,
  children,
}: SectionHeadingProps) {
  return (
    <h2
      className={`${className ? className : ""} w-full text-4xl font-bold max-[420px]:text-[1.2rem]`}
    >
      {children}
    </h2>
  );
}
