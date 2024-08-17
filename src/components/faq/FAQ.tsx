"use client";
import React from "react";
import { Accordion, AccordionItem } from "react-accessible-accordion";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import FAQAccordion from "./FAQAccordion";
import MaxScreen from "../MaxScreen";
import { faqItems } from "@/lib/data";
import FadeUp from "../FadeUp";

export default function FAQ() {
  return (
    <div className="bg-[#f4f5f7] py-10" id="faqs">
      <div className="container">
        <MaxScreen className="gap-10">
          <FadeUp>
            <div className="relative space-y-5 text-center">
              <div className="absolute bottom-1/2 z-10 w-full text-center text-[10rem] font-bold leading-6 text-[#29abe2] opacity-10">
                FAQ
              </div>
              <Heading>Question and Answers</Heading>
              <Paragraph className="mx-auto max-w-2xl">
                Answers to Common Questions About Xeurix’s AI-Powered Hiring
                Platform and Job Simulations.
              </Paragraph>
            </div>
          </FadeUp>

          <Accordion
            className="flex w-full flex-wrap justify-center pt-20 sm:gap-4 xl:flex-nowrap"
            allowZeroExpanded
          >
            <FadeUp className="w-full xl:basis-1/2">
              {faqItems.slice(0, 3).map((items) => (
                <AccordionItem
                  key={items.question}
                  className="border-b-[1px] border-[#7b5eea]"
                >
                  <FAQAccordion
                    accordionTitle={items.question}
                    accordionItem={items.answer}
                  />
                </AccordionItem>
              ))}
            </FadeUp>
            <FadeUp className="w-full xl:basis-1/2">
              {faqItems.slice(3, 6).map((items) => (
                <AccordionItem
                  key={items.question}
                  className="border-b-[1px] border-[#7b5eea]"
                >
                  <FAQAccordion
                    accordionTitle={items.question}
                    accordionItem={items.answer}
                  />
                </AccordionItem>
              ))}
            </FadeUp>
          </Accordion>
        </MaxScreen>
      </div>
    </div>
  );
}
