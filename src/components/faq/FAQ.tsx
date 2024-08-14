"use client";
import React from "react";
import { Accordion, AccordionItem } from "react-accessible-accordion";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import FAQAccordion from "./FAQAccordion";
import MaxScreen from "../MaxScreen";

const faqItems = [
  {
    question: "What is Xeurix?",
    answer:
      "Xeurix is an advanced hiring platform that uses AI-powered 3D job simulations to evaluate candidates based on real-world scenarios, ensuring the best job and cultural fit.",
  },
  {
    question: "How does Xeurix improve the hiring process?",
    answer:
      "Xeurix enhances hiring by providing objective, data-driven insights into candidates' skills and fit. Our simulations replicate real job tasks, allowing you to assess true performance rather than relying on resumes or interviews alone.",
  },
  {
    question: " Can Xeurix be customized for any job role?",
    answer:
      "Yes, Xeurix offers hyper-customized simulations tailored to your specific job roles and organizational culture. Our AI matches your job requirements with relevant scenarios to create an accurate assessment.",
  },
  {
    question: "How does Xeurix ensure fairness in hiring?",
    answer:
      "Xeurix eliminates bias by focusing on measurable performance metrics instead of subjective judgment. Each candidate is evaluated equally based on how they perform in realistic job scenarios.",
  },
  {
    question: "How long does it take to implement Xeurix?",
    answer:
      "Xeurix is quick to set up and can be integrated into your hiring process in just a few days. We offer support throughout the implementation to ensure a smooth transition.",
  },
  {
    question: "What kind of support do you offer after implementation?",
    answer:
      "We provide ongoing support, including updates, training, and customization services to ensure Xeurix continues to meet your evolving hiring needs.",
  },
];

export default function FAQ() {
  return (
    <div className="bg-[#f4f5f7] py-10">
      <div className="container">
        <MaxScreen className="gap-10">
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

          <Accordion
            className="flex w-full flex-wrap justify-center sm:gap-4 xl:flex-nowrap pt-20"
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
        </MaxScreen>
      </div>
    </div>
  );
}
