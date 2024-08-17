import FadeUp from "./FadeUp";
import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";
import candidate from "../../public/images/candidate.png";
import candidateMobile from "../../public/images/candidate_mobile.png";
import Wave from "./Wave";
import Image from "next/image";

export default function Seeing() {
  return (
    <section className="relative overflow-x-clip bg-[#e0f2fb]" id="assessment">
      <div className="mx-auto max-w-6xl px-4">
        <MaxScreen>
          <FadeUp>
            <SectionHeader>
              <Heading className="text-3xl">Seeing is believing</Heading>
              <Paragraph className="max-w-5xl">
                With Xeurix’s life-like With Xeurix’s life-like{" "}
                <span className="font-semibold text-[#d4145a]">
                  3D job simulations
                </span>{" "}
                , step candidates in your unique job roles. Evaluate job fit
                based on evidence, not intuition.
              </Paragraph>
            </SectionHeader>
          </FadeUp>
          <FadeUp className="relative">
            <video
              muted
              autoPlay
              loop
              preload="none"
              className="h-auto w-full border-none pt-8"
            >
              <source src="/video/xeurix_sim.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <Image
              src={candidate}
              alt="candidate"
              className="absolute -left-[60px] bottom-64 hidden w-40 xl:block"
            />
            <Image
              src={candidateMobile}
              alt="candidate"
              className="absolute -bottom-16 left-[15%] w-28 sm:w-40 xl:hidden"
            />
          </FadeUp>
        </MaxScreen>
      </div>
      <Wave />
    </section>
  );
}
