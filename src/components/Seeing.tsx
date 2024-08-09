import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";

export default function Seeing() {
  return (
    <section className="bg-[#e4f4fb]">
      <MaxScreen className="container gap-y-6">
        <Heading>Seeing is believing</Heading>
        <Paragraph className="max-w-2xl">
          With Xeurix’s life-like With Xeurix’s life-like{" "}
          <span className="font-semibold text-[#d4145a]">
            3D job simulations
          </span>{" "}
          , step candidates in your unique job roles before you even interview
          them. Evaluate job fit based on evidence, not intuition.
        </Paragraph>
        <video loop muted autoPlay className="h-auto w-full max-w-5xl">
          <source src="/video/xeurix_sim.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </MaxScreen>
    </section>
  );
}
