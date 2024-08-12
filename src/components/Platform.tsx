import Heading from "./Heading";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";
import MaxScreen from "./MaxScreen";
import Tailored_Simulations from "../../public/images/platform/Tailored_Simulations.png";
import character from "../../public/images/platform/ai_characters.png";
import evaluation from "../../public/images/platform/ai_evaluation.png";
import Image from "next/image";
import { Fragment } from "react";

const PlatformData = [
  {
    heading: "1. Tailored Simulations",
    paragraph:
      "We meticulously analyze your job description and organizational culture to identify the skills most predictive of job success. Our AI then matches these requirements with our extensive library of job scenarios to create a realistic simulation that accurately predicts job performance and cultural fit.",
    image: Tailored_Simulations,
  },
  {
    heading: "2. Custom Trained AI Characters",
    paragraph:
      "Each job scenario features custom-trained AI characters that emulate real-life colleagues and workplace challenges. These characters interact with candidates in real-time, providing a realistic and immersive evaluation experience.",
    image: character,
  },
  {
    heading: "3. In-Depth Evaluations",
    paragraph:
      "Our AI analyzes thousands of data points to provide detailed insights into candidates' strengths and weaknesses. We generate tailored interview questions based on their performance, ensuring informed hiring decisions based on measurable metrics.",
    image: evaluation,
  },
];

export default function Platform() {
  return (
    <div className="bg-[#001b27] text-white">
      <div className="max-w-6xl mx-auto px-8">
        <MaxScreen>
          <SectionHeader>
            <Heading>AI-Powered Hiring Platform</Heading>
            <Paragraph className="max-w-4xl">
              Every job is unique, and so is our assessment approach. At Xeurix,
              we harness AI to create hyper-customized simulations tailored
              precisely to each role and company.
            </Paragraph>
          </SectionHeader>
          <div className="grid grid-cols-1 lg:grid-cols-2 pt-20 ">
            {PlatformData.map((platform) => (
              <Fragment key={platform.heading}>
                <div className="space-y-5 pt-24">
                  <h3 className="text-xl font-bold">{platform.heading}</h3>
                  <p>{platform.paragraph}</p>
                </div>
                <Image
                  src={platform.image}
                  alt={platform.heading}
                  className=""
                />
              </Fragment>
            ))}
          </div>
        </MaxScreen>
      </div>
    </div>
  );
}
