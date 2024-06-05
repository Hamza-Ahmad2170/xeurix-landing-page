// "use client";
// import { useState } from "react";
// import Heading from "./SectionHeading";
// import Paragraph from "./SectionParagraph";

// const impactData = [
//   {
//     title: "Manuel Evaluation",
//     content:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt qui explicabo soluta cum magni, cupiditate quis optio consequatur totam sapiente!",
//     active: true,
//   },
//   {
//     title: "ATS/Resume Matching",
//     content:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt qui explicabo soluta cum magni, cupiditate quis optio consequatur totam sapiente!",
//     active: true,
//   },
//   {
//     title: "Assessment Tools",
//     content:
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt qui explicabo soluta cum magni, cupiditate quis optio consequatur totam sapiente!",
//     active: true,
//   },
//   {
//     title: "Xeurix Platform",
//     content:
//       " The pinnacle of hiring technology, using AI-driven simulations that place candidates in realistic job scenarios, providing objective and detailed performance evaluations, customizable by employers.",
//     active: true,
//   },
// ];

// export default function Impact() {
//   const [activeTabIndex, setActiveTabIndex] = useState(0);
//   return (
//     <div className="flex h-screen w-full items-center justify-center">
//       <div className="container flex flex-col gap-10 text-center">
//         <Heading>Why Xeurix: The Impact?</Heading>
//         <Paragraph className="max-w-3xl">
//           Xeurix revolutionizes hiring by blending advanced AI with immersive 3D
//           simulations. Select below to compare traditional hiring methods with
//           Xeurix’s cutting-edge approach.
//         </Paragraph>
//         <div className="mx-auto max-w-3xl">
//           <ul className="flex justify-between gap-5 rounded-md bg-slate-600/20">
//             {impactData.map((data, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveTabIndex(index)}
//                 className={`relative rounded-md p-3 ${activeTabIndex === index ? "bg-[#d4145a] text-white" : ""}`}
//               >
//                 {activeTabIndex === index && (
//                   <span className="absolute left-[45%] top-full h-0 w-0 border-x-8 border-t-[16px] border-x-transparent border-t-[#d4145a]"></span>
//                 )}
//                 {data.title}
//               </button>
//             ))}
//           </ul>
//           <div className="py-4">
//             <p>{impactData[activeTabIndex].content}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import Heading from "./SectionHeading";
import Paragraph from "./SectionParagraph";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

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
    <div className="flex h-screen w-full items-center justify-center">
      <div className="container flex flex-col gap-10 text-center">
        <Heading>Why Xeurix: The Impact?</Heading>
        <Paragraph className="max-w-3xl">
          Xeurix revolutionizes hiring by blending advanced AI with immersive 3D
          simulations. Select below to compare traditional hiring methods with
          Xeurix’s cutting-edge approach.
        </Paragraph>
        <div className="mx-auto max-w-4xl">
          <ul className="flex justify-between rounded-md bg-slate-600/20">
            {impactData.map((data, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`relative basis-1/2 rounded-md p-3 text-[.60rem] md:text-base ${activeTabIndex === index ? "bg-[#d4145a] text-white" : ""}`}
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
            className="flex flex-col flex-wrap justify-between gap-y-20 py-6 md:flex-row"
            ref={ref}
          >
            {impactData[activeTabIndex].numbers.map((num, index) => (
              <div key={index} className="mx-auto w-48 text-center md:basis-52">
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
      </div>
    </div>
  );
}
