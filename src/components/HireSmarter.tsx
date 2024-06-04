"use client";

import Image from "next/image";
import HireSmartItem from "./HireSmartItem";
import Heading from "./SectionHeading";
import Paragraph from "./SectionParagraph";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

const hireSmarterData = [
  {
    name: "Boot Job Fit",
    description:
      "Identify candidates who perfectly align with your job requirements and organization’s culture.",
    svg: "/svg/Job Fit.svg",
    active: true,
  },
  {
    name: "Accelerate Hiring Decisions",
    description:
      "Streamline your hiring process by swiftly ranking and advancing top candidates through the recruitment funnel",
    svg: "/svg/TimeHire.svg",
    active: false,
  },
  {
    name: "Eliminate Bias",
    description:
      "Make fair hiring decisions based on measurable performance metrics, not subjective judgment",
    svg: "/svg/Eliminate Bias.svg",
    active: false,
  },
  {
    name: "Hire Remotely",
    description:
      "Conduct efficient and large-scale virtual auditions by stepping candidates into their future role.",
    svg: "/svg/Hire Remotely.svg",
    active: false,
  },
];

export default function HireSmarter() {
  const [hireSmart, setHireSmart] = useState(hireSmarterData);
  const handleHireSmart = (name: string) => {
    setHireSmart((prev) =>
      prev.map((company) => {
        if (company.name === name) {
          return {
            ...company,
            active: true,
          };
        } else {
          return {
            ...company,
            active: false,
          };
        }
      }),
    );
  };

  const isActive = hireSmart.find((hireSmarter) => hireSmarter.active);

  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div className="container flex flex-col gap-10 text-center">
        <Heading>Hire Smarter with Xeurix</Heading>
        <Paragraph className="max-w-xl">
          Unlock the full potential of your hiring process with Xeurix’s
          advanced job simulations and data-driven hiring.
        </Paragraph>
        <div className="hidden gap-y-5 lg:flex">
          <div className="w-1/2">
            {hireSmart.map((hireSmarter) => (
              <HireSmartItem
                key={hireSmarter.name}
                hireSmarter={hireSmarter}
                onClick={() => handleHireSmart(hireSmarter.name)}
              />
            ))}
          </div>
          <div className="m-auto w-1/2">
            <Image
              src={isActive?.svg || "/svg/Job Fit.svg"}
              alt={isActive?.name || "Job Fit"}
              width={70}
              height={70}
              className="mx-auto"
            />
          </div>
        </div>
        <div className="w-full lg:hidden">
          <Accordion allowZeroExpanded>
            {hireSmart.map((item) => (
              <AccordionItem key={item.name}>
                <AccordionItemState>
                  {({ expanded }) => (
                    <>
                      <AccordionItemHeading>
                        <AccordionItemButton
                          className={`px-3 py-4 text-left ${expanded ? "bg-red-500" : ""}`}
                        >
                          {item.name}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel
                        className={`block text-sm transition-[height,visible] ${expanded ? "visible h-16 px-6 py-3" : "invisible h-0"}`}
                      >
                        <Image
                          src={item.svg}
                          width={70}
                          height={70}
                          alt=""
                          className={`${expanded} ? 'visible h-16' : 'invisible h-0'`}
                        />
                      </AccordionItemPanel>
                    </>
                  )}
                </AccordionItemState>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="pt-12 text-center">
          <button className="rounded-md bg-[#d4145a] px-6 py-[4px] text-lg text-white">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
