"use client";
import { impactData } from "@/lib/data";
import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ImpactCountDown() {
  const [activeTabIndex, setActiveTabIndex] = useState(3);
  const [previousTabIndex, setPreviousTabIndex] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleTabChange = (index: number) => {
    setPreviousTabIndex(activeTabIndex);
    setActiveTabIndex(index);
    setIsFirstRender(false);
  };

  return (
    <div className="mx-auto max-w-6xl pt-16">
      <ul className="hidden justify-between rounded-md bg-slate-600/20 md:flex">
        {impactData.map((data, index) => (
          <li
            key={index}
            onClick={() => handleTabChange(index)}
            className={`relative basis-1/2 rounded-md py-4 text-center ${
              activeTabIndex === index ? "bg-[#d4145a] text-white" : ""
            }`}
          >
            <button className="text-lg lg:text-[1.5rem]">
              {activeTabIndex === index && (
                <span className="absolute left-[45%] top-full h-0 w-0 border-x-8 border-t-[16px] border-x-transparent border-t-[#d4145a]"></span>
              )}
              {data.title}
            </button>
          </li>
        ))}
      </ul>

      <p className="hidden py-8 text-center text-2xl md:block">
        {impactData[activeTabIndex].content}
      </p>

      <div
        className="flex flex-wrap items-stretch justify-center gap-x-4 gap-y-20 py-8 md:flex-row lg:justify-between"
        ref={ref}
      >
        {impactData[activeTabIndex].numbers.map((num, index) => (
          <div key={index} className="w-[20rem] text-center">
            {inView && (
              <CountUp
                start={
                  isFirstRender
                    ? 0
                    : impactData[previousTabIndex].numbers[index]
                }
                end={num}
                duration={1}
                separator=","
                className="text-[5rem] font-semibold"
              />
            )}
            <span className="text-[5rem] font-semibold">%</span>
            <p className="py-4 text-2xl font-semibold">
              {impactData[activeTabIndex].subHeading[index].title}
            </p>
            <p className="text-[1.38rem]">
              {impactData[activeTabIndex].subHeading[index].text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
