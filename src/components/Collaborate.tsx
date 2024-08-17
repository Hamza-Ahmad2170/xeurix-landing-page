import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";
import dnd from "../../public/images/dnd.png";
import Image from "next/image";
import FadeUp from "./FadeUp";

export default function Collaborate() {
  return (
    <section>
      <MaxScreen className="px-4">
        <FadeUp>
          <SectionHeader className="mx-auto max-w-6xl">
            <Heading>Engage, Collaborate, and Hire</Heading>
            <Paragraph className="mx-auto max-w-3xl">
              With Xeurix collaborate and create a frictionless hiring funnel by
              eliminating tedious back-and-forth communication.
            </Paragraph>
          </SectionHeader>
        </FadeUp>
        <FadeUp className="mx-auto w-full max-w-7xl pt-16">
          <Image src={dnd} alt="" />
        </FadeUp>
      </MaxScreen>
    </section>
  );
}
