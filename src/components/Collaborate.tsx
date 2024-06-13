import Image from "next/image";
import MaxScreen from "./MaxScreen";
import Heading from "./SectionHeading";
import Paragraph from "./SectionParagraph";
import dnd from "@/assets/images/dnd.png";

export default function Collaborate() {
  return (
    <div className="">
      <div className="container">
        <MaxScreen className="text-center">
          <Heading>Engage, Collaborate, and Hire</Heading>
          <Paragraph className="max-w-xl">
            With Xeurix collaborate and create a frictionless hiring funnel by
            eliminating tedious back-and-forth communication
          </Paragraph>
          <Image src={dnd} alt="dnd" />
        </MaxScreen>
      </div>
    </div>
  );
}
