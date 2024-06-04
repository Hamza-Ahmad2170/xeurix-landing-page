import Heading from "./SectionHeading";
import Paragraph from "./SectionParagraph";

export default function Collaborate() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="container flex flex-col gap-10 text-center">
        <Heading>Engage, Collaborate, and Hire</Heading>
        <Paragraph className="max-w-4xl">
          With Xeurix collaborate and create a frictionless hiring funnel by
          eliminating tedious back-and-forth communication
        </Paragraph>
      </div>
    </div>
  );
}
