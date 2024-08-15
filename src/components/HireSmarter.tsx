import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";
import boostJobFit from "../../public/images/hire smarter/boost_jobfit.png";
import eliminate_bias from "../../public/images/hire smarter/eliminate_bias.png";
import faster_hiring from "../../public/images/hire smarter/faster_hiring.png";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Slide from "./Fade";

const hireSmarterData = [
  {
    title: "Boost Job Fit",
    image: boostJobFit,
    paragraph: `Identify candidates who perfectly align with your job requirements and company culture. Xeurix job simulations let you evaluate candidates' true abilities in real-time scenarios. Our detailed job fit scores offer insights into candidates' personality, soft skills, reasoning, and job-related skills. This ensures a strong match for long-term success, reduced turnover, and enhanced team productivity.
`,
  },
  {
    title: "Faster Hiring",
    image: faster_hiring,
    paragraph:
      "Accelerate your hiring process with Xeurix. Our job simulations provide instant, detailed assessments of candidates' skills and fit, reducing the time spent on lengthy interview rounds. By identifying top talent quickly and efficiently, Xeurix helps you fill positions faster, keeping your business agile and competitive.",
  },
  {
    title: "Eliminate Bias",
    image: eliminate_bias,
    paragraph:
      "Ensure fair hiring decisions by relying on measurable performance metrics instead of subjective judgment. Xeurix's objective evaluations assess candidates' true abilities and potential in realistic scenarios. This approach promotes diversity and inclusion, enabling you to select the best fit for your team based on evidence, not biases.",
  },
];

export default function HireSmarter() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4">
        <MaxScreen>
          <SectionHeader className="pt-20">
            <Heading>Hire Smarter with Xeurix</Heading>
            <Paragraph className="max-w-3xl">
              Unlock the full potential of your hiring process with Xeurix’s
              advanced job simulations and data-driven hiring platform.
            </Paragraph>
          </SectionHeader>
          {hireSmarterData.map((data, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-x-8 gap-y-12 py-12 sm:py-20"
            >
              <div
                className={cn(
                  "w-full space-y-3 sm:space-y-5 lg:w-[calc(50%-2rem)]",
                  {
                    "lg:order-2": index % 2 > 0,
                  },
                )}
              >
                <Slide>
                  <h3 className="pb-2 text-xl font-bold sm:text-[1.625rem]">
                    {data.title}
                  </h3>
                  <p className="sm:text-2xl">{data.paragraph}</p>
                </Slide>
              </div>
              <div className="w-full lg:w-[calc(50%-2rem)]">
                <Image src={data.image} alt={data.title} />
              </div>
            </div>
          ))}
        </MaxScreen>
      </div>
    </section>
  );
}
