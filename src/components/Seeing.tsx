import Image from "next/image";
import Heading from "./SectionHeading";
import Paragraph from "./SectionParagraph";
import { ImArrowRight } from "react-icons/im";

export default function Seeing() {
  return (
    <section className="flex h-screen w-full items-center justify-center bg-[#e4f4fb]">
      <div className="container flex flex-col gap-10 text-center">
        <Heading>Seeing is believing</Heading>
        <Paragraph className="max-w-xl">
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
        <p className="flex items-center justify-center gap-4 py-20 text-xl text-blue-500">
          Platform Overview <ImArrowRight color="rgb(63 131 248)" />
        </p>
      </div>
    </section>
  );
}
