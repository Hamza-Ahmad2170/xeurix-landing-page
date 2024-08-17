import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";
import dnd from "../../public/images/dnd.png";
import dndMobile from "../../public/images/dnd_Mobile.png";
import Image from "next/image";
import FadeUp from "./FadeUp";

export default function Collaborate() {
  return (
    <section>
      <MaxScreen className="px-4">
        <FadeUp>
          <SectionHeader className="mx-auto max-w-6xl">
            <Heading className="text-2xl">
              Engage, Collaborate, and Hire
            </Heading>
            <Paragraph className="mx-auto max-w-3xl">
              With Xeurix collaborate and create a frictionless hiring funnel by
              eliminating tedious back-and-forth communication.
            </Paragraph>
          </SectionHeader>
        </FadeUp>
        <FadeUp className="mx-auto w-full max-w-7xl pt-16">
          <Image
            src={dnd}
            alt="Hiring funnel showcasing streamlined communication between hiring manager and recruiter, with candidate progress from shortlisted, interview, to rejection stages."
            className="hidden lg:block"
          />
          <Image
            src={dndMobile}
            alt="Hiring funnel showcasing streamlined communication between hiring manager and recruiter, with candidate progress from shortlisted, interview, to rejection stages."
            className="block lg:hidden"
          />
        </FadeUp>
      </MaxScreen>
    </section>
  );
}
