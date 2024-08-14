"use client";
import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const impactData = [
  {
    title: "Manual Evaluation",
    content:
      "Manual evaluation rely on human intuition and manual processes to evaluate candidates. This method involves reviewing resumes, conducting interviews, and making subjective decisions.",
    numbers: [0, 0, 0],
    subHeading: [
      {
        title: "Time Saved",
        text: "Limited time savings due to extensive manual processes and no automation .",
      },
      {
        title: "Employee Retention",
        text: "Lower retention rates due to potential biases and less accurate job fit assessments",
      },
      {
        title: "Employee Productivity",
        text: "Productivity may suffer due to less precise candidate-job matches.",
      },
    ],
    active: true,
  },
  {
    title: "Resume Matching",
    content:
      "Resume screening involves filtering candidates based on their resumes. It uses keyword matching and basic criteria to shortlist applicants but may miss key skills and potential.",
    numbers: [25, 10, 10],
    active: true,
    subHeading: [
      {
        title: "Time Saved",
        text: "Moderate time savings through automated resume filtering based on job keywords.",
      },
      {
        title: "Employee Retention",
        text: "Retention rates  may not accurately reflect candidate suitability beyond keywords.",
      },
      {
        title: "Employee Productivity",
        text:
          "Productivity can be impacted by overlooking soft skills and" +
          "  " +
          "real-world capabilities",
      },
    ],
  },
  {
    title: "Assessment Tools",
    content:
      "Other assessments include psychometric tests, aptitude tests, and standardized assessments. These tools offer additional insights but may not fully capture practical job performance.",
    numbers: [30, 15, 15],
    active: true,
    subHeading: [
      {
        title: "Time Saved",
        text: "Moderate time savings with structured assessment tools and reports.",
      },
      {
        title: "Employee Retention",
        text: "Improved retention rates compared to manual assessments but still limited.",
      },
      {
        title: "Employee Productivity",
        text: "Productivity gains are moderate, depending on the alignment of test results with job demands",
      },
    ],
  },
  {
    title: "Xeurix Platform",
    content:
      "The pinnacle of hiring technology, using AI-driven simulations that place candidates in realistic job scenarios, providing objective and detailed performance evaluations, customizable by employers.",
    numbers: [50, 30, 30],
    active: true,
    subHeading: [
      {
        title: "Time Saved",
        text: "Up to 50% time saved through efficient and accurate assessments.",
      },
      {
        title: "Employee Retention",
        text: "Up to 30% improvement in employee retention by ensuring precise job fit.",
      },
      {
        title: "Employee Productivity",
        text: "Up to 30% boost in productivity with candidates accurately assessed for their roles.",
      },
    ],
  },
];

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
      <ul className="flex justify-between rounded-md bg-slate-600/20">
        {impactData.map((data, index) => (
          <li
            key={index}
            onClick={() => handleTabChange(index)}
            className={` relative basis-1/2 rounded-md py-4 text-center ${
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

      <p className="text-2xl py-8 text-center">
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
