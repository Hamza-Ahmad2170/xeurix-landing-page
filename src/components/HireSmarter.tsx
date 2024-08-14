import Heading from "./Heading";

import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";
import boostJobFit from "../../public/images/hire smarter/boost_jobfit.png";
import eliminate_bias from "../../public/images/hire smarter/eliminate_bias.png";
import remotehiring from "../../public/images/hire smarter/remotehiring.png";
import faster_hiring from "../../public/images/hire smarter/faster_hiring.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

const hireSmarterData = [
  {
    title: "Boost Job Fit",
    image: boostJobFit,
    paragraph: `Identify candidates who perfectly align with your job requirements and company culture. Xeurix job simulations let you evaluate candidates' true abilities in real-time scenarios. Our detailed job fit scores offer insights into candidates' personality, soft skills, reasoning, and job-related skills. This ensures a strong match for long-term success, reduced turnover, and enhanced team productivity.
`,
  },
  {
    title: "Eliminate Bias",
    image: eliminate_bias,
    paragraph:
      "Ensure fair hiring decisions by relying on measurable performance metrics instead of subjective judgment. Xeurix's objective evaluations assess candidates' true abilities and potential in realistic scenarios. This approach promotes diversity and inclusion, enabling you to select the best fit for your team based on evidence, not biases.",
  },
  {
    title: "Faster Hiring",
    image: faster_hiring,
    paragraph:
      "Accelerate your hiring process with Xeurix. Our job simulations provide instant, detailed assessments of candidates' skills and fit, reducing the time spent on lengthy interview rounds. By identifying top talent quickly and efficiently, Xeurix helps you fill positions faster, keeping your business agile and competitive.",
  },
  {
    title: "Hire Remotely",
    image: remotehiring,
    paragraph:
      "Expand your talent pool and hire the best candidates from anywhere in the world. Our 3D job simulations offer the most realistic virtual experience, allowing candidates to step into the role without visiting the office. Evaluate skills and fit remotely, ensuring you find the right talent, no matter where they are.",
  },
];

export default function HireSmarter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-8">
        <MaxScreen>
          <SectionHeader>
            <Heading>Hire Smarter with Xeurix</Heading>
            <Paragraph className="max-w-3xl">
              Unlock the full potential of your hiring process with Xeurix’s
              advanced job simulations and data-driven hiring platform.
            </Paragraph>
          </SectionHeader>
          {hireSmarterData.map((data, index) => (
            <div key={index} className="flex gap-x-4 flex-wrap py-20 gap-y-12">
              <div
                className={cn("space-y-5 w-full lg:w-[calc(50%-1rem)]", {
                  "lg:order-2": index % 2 > 0,
                })}
              >
                <h3 className="text-[1.625rem] font-bold pb-2">{data.title}</h3>
                <p className="text-xl sm:text-2xl">{data.paragraph}</p>
              </div>
              <div className="w-full lg:w-[calc(50%-1rem)]">
                <Image src={data.image} alt={data.title} />
              </div>
            </div>
          ))}
        </MaxScreen>
      </div>
    </section>
  );
}
