import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Tailored_Simulations from "../../public/images/platform/Tailored_Simulations.png";
import character from "../../public/images/platform/ai_characters.png";
import evaluation from "../../public/images/platform/ai_evaluation.png";
import Image from "next/image";
import { cn } from "@/lib/utils";
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
    <section className="bg-[#001b27] text-white">
      <div className="container py-20">
        <Heading className="text-center">AI-Powered Hiring Platform</Heading>
        <Paragraph className="m-auto max-w-2xl pt-5">
          Every job is unique, and so is our assessment approach. At Xeurix, we
          harness AI to create hyper-customized simulations tailored precisely
          to each role and company.
        </Paragraph>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-20 lg:grid-cols-2">
          {PlatformData.map((platform, index) => (
            <Fragment key={platform.heading}>
              <div className="space-y-4 pt-[5rem]">
                <h3 className="text-xl font-bold">{platform.heading}</h3>
                <p>{platform.paragraph}</p>
              </div>
              <Image
                src={platform.image}
                alt="platform"
                className={cn("", { "row-start-2": index % 2 > 0 })}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
