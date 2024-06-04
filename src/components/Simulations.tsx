import Image from "next/image";
import Heading from "./SectionHeading";
import Paragraph from "./SectionParagraph";

export default function Simulations() {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="container flex flex-col gap-10 text-center text-white">
        <Heading> AI-Powered Tailored Simulations</Heading>
        <Paragraph className="max-w-3xl">
          Every job is unique, and so is our assessment approach. At Xeurix, we
          harness AI to create hyper-customized simulations tailored precisely
          to each role and company.
        </Paragraph>

        <Image
          src="https://placehold.co/600x400/png"
          alt="simulations"
          width={600}
          height={400}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
