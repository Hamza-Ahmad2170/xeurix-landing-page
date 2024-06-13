import Image from "next/image";
import Heading from "./SectionHeading";
import Paragraph from "./SectionParagraph";
import MaxScreen from "./MaxScreen";

export default function Simulations() {
  return (
    <div className="flex bg-black">
      <div className="container text-white">
        <MaxScreen className="text-center">
          <Heading> AI-Powered Tailored Simulations</Heading>
          <Paragraph className="max-w-4xl">
            Every job is unique, and so is our assessment approach. At Xeurix,
            we harness AI to create hyper-customized simulations tailored
            precisely to each role and company.
          </Paragraph>

          <Image
            src="https://placehold.co/600x400/png"
            alt="simulations"
            width={600}
            height={400}
            className="mx-auto"
          />
        </MaxScreen>
      </div>
    </div>
  );
}
