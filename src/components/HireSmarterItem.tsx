"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import boostJobFit from "../../public/images/hire smarter/boost_jobfit.png";
import eliminate_bias from "../../public/images/hire smarter/eliminate_bias.png";
import faster_hiring from "../../public/images/hire smarter/faster_hiring.png";
import remotehiring from "../../public/images/hire smarter/remotehiring.png";
import Link from "next/link";

const tabs = [
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

export default function HireSmarterItem() {
  const [current, setCurrent] = useState(0);

  const handleCurrent = (index: number) => {
    setCurrent(index);
  };

  return (
    <>
      <ul className="grid justify-center gap-y-8 pt-16 pb-20 sm:grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
        {tabs.map((tab, index) => (
          <li key={tab.title} className="text-center ">
            <button
              className={cn(
                "rounded-md px-6 py-1 text-center text-lg xl:text-xl",
                {
                  "bg-[#d4145a] text-white": index === current,
                  "bg-[#ccd8e5]": !(index === current),
                }
              )}
              onClick={() => handleCurrent(index)}
              type="button"
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-semibold">{tabs[current].title}</h3>
          <p className="md:text-lg lg:text-xl">{tabs[current].paragraph}</p>
        </div>
        <Image src={tabs[current].image} alt={tabs[current].title} />
      </div>
      <div className="text-center pt-20">
        <Link
          href="/demo"
          className="rounded-md bg-[#29abe2] px-6 py-1 text-white inline-block text-lg"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}
