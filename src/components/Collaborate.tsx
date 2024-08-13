import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";
import dnd from "../../public/images/dnd.png";
import Image from "next/image";

export default function Collaborate() {
  return (
    <section>
      <div className="px-8">
        <MaxScreen>
          <SectionHeader className="max-w-6xl mx-auto ">
            <Heading>Engage, Collaborate, and Hire</Heading>
            <Paragraph className="mx-auto max-w-3xl">
              With Xeurix collaborate and create a frictionless hiring funnel by
              eliminating tedious back-and-forth communication.
            </Paragraph>
          </SectionHeader>
          <Image src={dnd} alt="dnd" className="pt-16 max-w-7xl mx-auto" />
        </MaxScreen>
      </div>
    </section>
  );
}
