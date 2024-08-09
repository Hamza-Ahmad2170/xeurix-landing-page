"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import boostJobFit from "../../public/images/boost_jobfit.png";

const tabs = [
  {
    title: "Boost Job Fit",
    active: true,
    image: boostJobFit,
    paragraph1:
      "Identify candidates who perfectly align with your job requirements and company culture. Xeurix job simulations let you evaluate candidates' true abilities in real-time scenarios.",
    paragraph2:
      "Our detailed job fit scores offer insights into candidates' personality, soft skills, reasoning, and job-related skills. This ensures a strong match for long-term success, reduced turnover, and enhanced team productivity.",
  },
  {
    title: "Eliminate Bias",
    active: false,
    image: boostJobFit,
    paragraph1:
      "Identify candidates who perfectly align with your job requirements and company culture. Xeurix job simulations let you evaluate candidates' true abilities in real-time scenarios.",
    paragraph2:
      "Our detailed job fit scores offer insights into candidates' personality, soft skills, reasoning, and job-related skills. This ensures a strong match for long-term success, reduced turnover, and enhanced team productivity.",
  },
  {
    title: "Faster Hiring",
    active: false,
    image: boostJobFit,
    paragraph1:
      "Identify candidates who perfectly align with your job requirements and company culture. Xeurix job simulations let you evaluate candidates' true abilities in real-time scenarios.",
    paragraph2:
      "Our detailed job fit scores offer insights into candidates' personality, soft skills, reasoning, and job-related skills. This ensures a strong match for long-term success, reduced turnover, and enhanced team productivity.",
  },
  {
    title: "Hire Remotely",
    active: false,
    image: boostJobFit,
    paragraph1:
      "Identify candidates who perfectly align with your job requirements and company culture. Xeurix job simulations let you evaluate candidates' true abilities in real-time scenarios.",
    paragraph2:
      "Our detailed job fit scores offer insights into candidates' personality, soft skills, reasoning, and job-related skills. This ensures a strong match for long-term success, reduced turnover, and enhanced team productivity.",
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
      <ul className="flex justify-center gap-12 pt-8">
        {activeTab.map((tab) => (
          <li key={tab.title}>
            <button
              className={cn("rounded-md px-6 py-1 text-center text-lg", {
                "bg-[#d4145a] text-white": tab.active,
                "bg-[#ccd8e5]": !tab.active,
              })}
              onClick={() => handleActiveTab(tab.title)}
            >
              {tab.title}
            </button>
          </li>
        ))}
      </ul>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 pt-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center gap-5">
          <h3 className="text-lg font-semibold">{currentTab?.title}</h3>
          <p>{currentTab?.paragraph1}</p>
          <p>{currentTab?.paragraph2}</p>
        </div>
        <Image
          src={currentTab?.image || tabs[0].image}
          alt={currentTab?.title + " image"}
        />
      </div>
      <div className="text-center">
        <button className="rounded-md bg-[#29abe2] px-6 py-1 text-white">
          Get Started
        </button>
      </div>
    </>
  );
}
