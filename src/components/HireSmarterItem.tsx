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
    active: true,
    image: boostJobFit,
    paragraph: `Identify candidates who perfectly align with your job requirements and company culture. Xeurix job simulations let you evaluate candidates' true abilities in real-time scenarios. Our detailed job fit scores offer insights into candidates' personality, soft skills, reasoning, and job-related skills. This ensures a strong match for long-term success, reduced turnover, and enhanced team productivity.
`,
  },
  {
    title: "Eliminate Bias",
    active: false,
    image: eliminate_bias,
    paragraph:
      "Ensure fair hiring decisions by relying on measurable performance metrics instead of subjective judgment. Xeurix's objective evaluations assess candidates' true abilities and potential in realistic scenarios. This approach promotes diversity and inclusion, enabling you to select the best fit for your team based on evidence, not biases.",
  },
  {
    title: "Faster Hiring",
    active: false,
    image: faster_hiring,
    paragraph:
      "Accelerate your hiring process with Xeurix. Our job simulations provide instant, detailed assessments of candidates' skills and fit, reducing the time spent on lengthy interview rounds. By identifying top talent quickly and efficiently, Xeurix helps you fill positions faster, keeping your business agile and competitive.",
  },
  {
    title: "Hire Remotely",
    active: false,
    image: remotehiring,
    paragraph:
      "Expand your talent pool and hire the best candidates from anywhere in the world. Our 3D job simulations offer the most realistic virtual experience, allowing candidates to step into the role without visiting the office. Evaluate skills and fit remotely, ensuring you find the right talent, no matter where they are.",
  },
];

export default function HireSmarterItem() {
  const [activeTab, setActiveTab] = useState(tabs);

  const handleActiveTab = (title: string) => {
    setActiveTab((prevTab) =>
      prevTab.map((tab) =>
        tab.title === title
          ? { ...tab, active: true }
          : { ...tab, active: false },
      ),
    );
  };

  const currentTab = activeTab.find((tab) => tab.active);

  return (
    <>
      <ul className="flex justify-center gap-12 pt-5">
        {activeTab.map((tab) => (
          <li key={tab.title}>
            <button
              className={cn("rounded-md px-6 py-1 text-center text-lg", {
                "bg-[#d4145a] text-white": tab.active,
                "bg-[#ccd8e5]": !tab.active,
              })}
              onClick={() => handleActiveTab(tab.title)}
              type="button"
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-16 lg:grid-cols-2">
        <div className="flex flex-col gap-5 pt-1">
          <h3 className="text-xl font-semibold">{currentTab?.title}</h3>
          <p>{currentTab?.paragraph}</p>
        </div>
        <Image
          src={currentTab?.image || tabs[0].image}
          alt={currentTab?.title + " image"}
        />
      </div>
      <div className="text-center">
        <Link
          href="/demo"
          className="rounded-md bg-[#29abe2] px-6 py-1 text-white"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}
