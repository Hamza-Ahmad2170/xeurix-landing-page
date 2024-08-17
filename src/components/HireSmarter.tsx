import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";

import Image from "next/image";
import { cn } from "@/lib/utils";

import { hireSmarterData } from "@/lib/data";
import FadeUp from "./FadeUp";
import Button from "./Button";

export default function HireSmarter() {
  return (
    <section
      id="benefits "
      className="bg-[url('/images/pattern/pattern21.png')] bg-right bg-no-repeat"
    >
      <div className="mx-auto max-w-6xl px-4">
        <MaxScreen>
          <FadeUp>
            <SectionHeader className="pt-4 lg:pt-20">
              <Heading className="text-2xl">Elevate Your Hiring Game</Heading>
              <Paragraph className="max-w-3xl">
                Leverage AI-Powered Job Simulations for Smarter, Faster, and
                Bias-Free Hiring Decisions.
              </Paragraph>
            </SectionHeader>
          </FadeUp>
          {hireSmarterData.map((data, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-x-8 gap-y-12 py-6 sm:py-20"
            >
              <div
                className={cn(
                  "w-full space-y-3 sm:space-y-5 lg:w-[calc(50%-2rem)]",
                  {
                    "lg:order-2": index % 2 > 0,
                  },
                )}
              >
                <FadeUp>
                  <h3 className="pb-2 text-xl font-bold sm:text-[1.625rem]">
                    {data.title}
                  </h3>
                  <p className="sm:text-2xl">{data.paragraph}</p>
                </FadeUp>
              </div>
              <FadeUp className="w-full lg:w-[calc(50%-2rem)]">
                <Image src={data.image} alt={data.title} />
              </FadeUp>
            </div>
          ))}
          <FadeUp className="text-center">
            <Button>Request Demo</Button>
          </FadeUp>
        </MaxScreen>
      </div>
    </section>
  );
}
