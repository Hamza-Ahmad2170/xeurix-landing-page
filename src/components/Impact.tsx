"use client";
import { useState } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import MaxScreen from "./MaxScreen";

const impactData = [
  {
    title: "Manual Evaluation",
    content:
      "Manual evaluation rely on human intuition and manual processes to evaluate candidates. This traditional method involves reviewing resumes, conducting interviews, and making subjective decisions.",
    numbers: [0, 0, 0],
    subHeading: [
      {
        title: "Time Saved",
        text: "Limited time savings due to extensive manual processes.",
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
        text: "Moderate time savings through automated keyword filtering.",
      },
      {
        title: "Employee Retention",
        text: "Retention rates are variable; may not accurately reflect candidate suitability beyond keywords.",
      },
      {
        title: "Employee Productivity",
        text: "Productivity can be impacted by overlooking soft skills and real-world capabilities",
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
        text: "Moderate time savings with structured assessment tools.",
      },
      {
        title: "Employee Retention",
        text: "Improved retention rates compared to manual assessments but still limited by test scope.",
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
        text: "Up to 20% boost in productivity with candidates accurately assessed for their roles.",
      },
    ],
  },
];

export default function Impact() {
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
    <div className="bg-[url('/images/parallax-4.jpg')] bg-cover bg-center bg-no-repeat py-20">
      <div className="container">
        <MaxScreen>
          <Heading className="text-center">Why Xeurix: The Impact?</Heading>
          <Paragraph className="max-w-4xl text-center">
            Xeurix revolutionizes hiring by blending advanced AI with immersive
            3D simulations. Select below to compare traditional hiring methods
            with Xeurix’s cutting-edge approach.
          </Paragraph>
          <div className="mx-auto max-w-5xl pt-10">
            <ul className="flex justify-between rounded-md bg-slate-600/20">
              {impactData.map((data, index) => (
                <li
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`md:text-bas relative basis-1/2 rounded-md py-2 text-center ${
                    activeTabIndex === index ? "bg-[#d4145a] text-white" : ""
                  }`}
                >
                  <button>
                    {activeTabIndex === index && (
                      <span className="absolute left-[45%] top-full h-0 w-0 border-x-8 border-t-[16px] border-x-transparent border-t-[#d4145a]"></span>
                    )}
                    {data.title}
                  </button>
                </li>
              ))}
            </ul>
            <div className="py-4">
              <p>{impactData[activeTabIndex].content}</p>
            </div>
            <div
              className="flex flex-wrap justify-center gap-x-4 gap-y-20 py-6 md:flex-row md:justify-between"
              ref={ref}
            >
              {impactData[activeTabIndex].numbers.map((num, index) => (
                <div key={index} className="w-80 text-center">
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
                      className="text-4xl font-semibold"
                    />
                  )}
                  <span className="text-4xl font-semibold">%</span>
                  <p className="py-4 text-xl font-semibold">
                    {impactData[activeTabIndex].subHeading[index].title}
                  </p>
                  <p>{impactData[activeTabIndex].subHeading[index].text}</p>
                </div>
              ))}
            </div>
          </div>
        </MaxScreen>
      </div>
    </div>
  );
}
