import FadeUp from "./FadeUp";
import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";
import pattern from "../../public/images/pattern/patternwave.png";
import Wave from "./Wave";
import Container from "./Container";
import Image from "next/image";

export default function Seeing() {
  return (
    <section className="relative overflow-x-clip" id="assessment">
      <div className="bg-[#e0f2fb]">
        <MaxScreen>
          <Image
            src={pattern}
            alt="pattern"
            title="pattern"
            className="absolute left-0 lg:w-[175px] 2xl:left-auto 2xl:w-auto"
          />
          <FadeUp>
            <Container>
              <SectionHeader>
                <Heading className="text-3xl">Seeing is believing</Heading>
                <Paragraph className="max-w-5xl">
                  With Xeurix’s life-like With Xeurix’s life-like{" "}
                  <span className="font-semibold text-[#d4145a]">
                    3D job simulations
                  </span>
                  , step candidates in your unique job roles. Evaluate job fit
                  based on evidence, not intuition.
                </Paragraph>
              </SectionHeader>
            </Container>
          </FadeUp>
          <FadeUp className="relative">
            <video
              muted
              autoPlay
              loop
              preload="none"
              playsInline
              className="mx-auto h-auto w-full max-w-2xl border-none object-fill pt-6 lg:max-w-2xl 2xl:max-w-6xl 2xl:pt-8"
            >
              <source src="/video/Final Xeurix 2K.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </FadeUp>
        </MaxScreen>
        <Wave />
      </div>
    </section>
  );
}
