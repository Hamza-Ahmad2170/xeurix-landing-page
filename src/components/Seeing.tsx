import Image from "next/image";
import Heading from "./SectionHeading";
import Paragraph from "./SectionParagraph";
import { ImArrowRight } from "react-icons/im";
import MaxScreen from "./MaxScreen";

export default function Seeing() {
  return (
    <section className="bg-[#e4f4fb] bg-[url('/img/pattern1.webp')] bg-contain bg-center bg-no-repeat py-8">
      <div className="container">
        <MaxScreen className="text-center">
          <Heading>Seeing is believing</Heading>
          <Paragraph className="max-w-[40.6rem]">
            With Xeurix’s life-like{" "}
            <span className="font-semibold text-[#d4145a]">
              {" "}
              3D job simulations
            </span>
            , immerse candidates in <span className="underline">your</span> job
            roles to assess job fit based on evidence, not intuition.
          </Paragraph>

          <Image
            src="https://placehold.co/700x400/png"
            alt="job"
            priority={true}
            width={700}
            height={400}
            className="mx-auto cursor-pointer"
            quality={60}
          />
          <p className="flex items-center justify-center gap-4 pt-20 text-xl text-blue-500">
            Platform Overview <ImArrowRight color="rgb(63 131 248)" />
          </p>
        </MaxScreen>
      </div>
    </section>
  );
}
