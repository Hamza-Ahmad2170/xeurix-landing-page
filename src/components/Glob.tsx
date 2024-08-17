import Image from "next/image";
import FadeUp from "./FadeUp";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";
import glob from "../../public/images/globe.png";
import globBottom from "../../public/images/globe_bottom.png";

export default function Glob() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-20">
      <FadeUp>
        <Image
          src={glob}
          alt="Global remote hiring with objective job fit scores and ranking for faster hiring."
        />
      </FadeUp>
      <FadeUp>
        <SectionHeader className="py-10">
          <Heading>Hire Smarter with Xeurix</Heading>
          <Paragraph className="max-w-3xl">
            Unlock the full potential of your hiring process with Xeurix’s
            advanced job simulations and data-driven hiring platform.
          </Paragraph>
        </SectionHeader>
      </FadeUp>
      <FadeUp>
        <Image
          src={globBottom}
          alt="Candidate successfully hired with evaluations on teamwork, cultural fit, soft skills, listening, adaptivity, and negotiation."
        />
      </FadeUp>
    </section>
  );
}
