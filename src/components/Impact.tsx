"use client";
import { useState } from "react";
import Heading from "./SectionHeading";
import Paragraph from "./SectionParagraph";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import MaxScreen from "./MaxScreen";

const impactData = [
  {
    title: "Manual Evaluation",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt qui explicabo soluta cum magni, cupiditate quis optio consequatur totam sapiente!",
    numbers: [10, 20, 30],
    active: true,
  },
  {
    title: "ATS/Resume Matching",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt qui explicabo soluta cum magni, cupiditate quis optio consequatur totam sapiente!",
    numbers: [40, 50, 60],
    active: true,
  },
  {
    title: "Assessment Tools",
    content:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt qui explicabo soluta cum magni, cupiditate quis optio consequatur totam sapiente!",
    numbers: [70, 80, 90],
    active: true,
  },
  {
    title: "Xeurix Platform",
    content:
      "The pinnacle of hiring technology, using AI-driven simulations that place candidates in realistic job scenarios, providing objective and detailed performance evaluations, customizable by employers.",
    numbers: [100, 110, 120],
    active: true,
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
    <div className="bg-[url('/img/parallax-4.webp')] bg-cover bg-center bg-no-repeat py-20">
      <div className="container">
        <MaxScreen>
          <Heading className="text-center">Why Xeurix: The Impact?</Heading>
          <Paragraph className="max-w-4xl text-center">
            Xeurix revolutionizes hiring by blending advanced AI with immersive
            3D simulations. Select below to compare traditional hiring methods
            with Xeurix’s cutting-edge approach.
          </Paragraph>
          <div className="mx-auto max-w-[52rem] pt-10">
            <ul className="flex justify-between rounded-md bg-slate-600/20">
              {impactData.map((data, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`relative basis-1/2 rounded-md py-2 text-[.60rem] md:text-base ${
                    activeTabIndex === index ? "bg-[#d4145a] text-white" : ""
                  }`}
                >
                  {activeTabIndex === index && (
                    <span className="absolute left-[45%] top-full h-0 w-0 border-x-8 border-t-[16px] border-x-transparent border-t-[#d4145a]"></span>
                  )}
                  {data.title}
                </button>
              ))}
            </ul>
            <div className="py-4">
              <p>{impactData[activeTabIndex].content}</p>
            </div>
            <div
              className="flex flex-wrap justify-center gap-y-20 py-6 md:flex-row md:justify-between"
              ref={ref}
            >
              {impactData[activeTabIndex].numbers.map((num, index) => (
                <div key={index} className="m-auto w-48 text-center">
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
                  <p className="py-4 text-xl font-semibold">Time Saved</p>
                  <p>Relies heavily on human intuition and manual processes,</p>
                </div>
              ))}
            </div>
          </div>
        </MaxScreen>
      </div>
    </div>
  );
}
