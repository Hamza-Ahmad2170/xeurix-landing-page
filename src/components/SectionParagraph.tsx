type SectionParagraphProps = {
  className?: string;
  children: React.ReactNode;
};

export default function SectionParagraph({
  className,
  children,
}: SectionParagraphProps) {
  return (
    <p
      className={`${className ? className : ""} mx-auto max-[420px]:text-sm md:text-xl`}
    >
      {children}
    </p>
  );
}
