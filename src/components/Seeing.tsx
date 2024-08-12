import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";

export default function Seeing() {
  return (
    <section className="bg-[#e0f2fb]">
      <div className="max-w-6xl mx-auto px-8">
        <MaxScreen>
          <SectionHeader>
            <Heading>Seeing is believing</Heading>
            <Paragraph className="max-w-2xl">
              With Xeurix’s life-like With Xeurix’s life-like{" "}
              <span className="font-semibold text-[#d4145a]">
                3D job simulations
              </span>{" "}
              , step candidates in your unique job roles before you even
              interview them. Evaluate job fit based on evidence, not intuition.
            </Paragraph>
          </SectionHeader>
          <video loop muted autoPlay className="h-auto w-full pt-8">
            <source src="/video/xeurix_sim.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </MaxScreen>
      </div>
    </section>
  );
}
