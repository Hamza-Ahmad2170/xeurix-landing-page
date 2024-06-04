"use client";
import React from "react";
import FAQAccordion from "./FAQAccordion";
import { Accordion, AccordionItem } from "react-accessible-accordion";

const faqItems = [
  {
    question: "What is a 3D gamified assessment?",
    answer:
      "Our 3D gamified assessments use 3D graphics that simulate being on the job as much as possible",
  },
  {
    question: "How is Xeurix different from other assessments?",
    answer:
      "Unlike other assessments, we don’t just rely on self reports via multiple choice questions, or abstract games. We look at how candidates perform in real life situations- and in multiple scenarios.",
  },
  {
    question: "Do candidates need to install the game?",
    answer: "No, candidates can access Xeurix via web browser.",
  },
  {
    question: "How does Xeurix measure candidates’ abilities?",
    answer:
      "Xeurix measures candidates’ key traits and abilities from multiple data points. This means we analyze everything from behavioral data to direct skillsets and natural conversations to ensure our conclusions are as fair and accurate as possible.",
  },
  {
    question: "Is the game customizable?",
    answer:
      "Yes! Recruiters and hiring managers can decide which aspects are most important to measure and build their own tasks.",
  },
  {
    question: "Can recruiters an hiring mangers collaborate?",
    answer:
      "Yes. Recruiters and hiring managers each have a dashboard from which they can collaborate.",
  },
];

export default function FAQ() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#f4f5f7] bg-[url('/img/zigzag1.webp')] bg-right bg-no-repeat">
      <div className="container py-28">
        <div className="relative mb-[60px] text-center">
          <div className="absolute left-0 top-0 z-10 w-full text-center text-[10rem] font-bold leading-6 text-[#29abe2] opacity-10">
            FAQ
          </div>
          <h3 className="text-5xl font-medium leading-[1.2]">
            Question and Answers
          </h3>
          <p className="mx-auto max-w-lg pt-8">
            Listed questions and answers, all supposed to be commonly asked in
            some context, and pertaining to a particular topic.
          </p>
        </div>

        <Accordion
          className="flex w-full flex-wrap justify-center gap-4"
          allowZeroExpanded
        >
          <div className="w-full lg:basis-1/2">
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
          </div>
          <div className="w-full lg:basis-1/2">
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
          </div>
        </Accordion>
      </div>
    </div>
  );
}
