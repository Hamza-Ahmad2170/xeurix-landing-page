import Image from "next/image";
import Container from "./Container";
import FadeUp from "./FadeUp";
import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";
import { hireSmarterData } from "@/lib/data";
import { cn } from "@/lib/utils";
import BtnLink from "./BtnLink";

export default function HireSmarter() {
  return (
    <section id="benefits">
      <Container className="bg-[url('/images/pattern/usecases.png')] bg-right bg-no-repeat">
        <MaxScreen>
          <SectionHeader className="pt-4 lg:pt-20">
            <Heading className="text-2xl">Elevate Your Hiring Game</Heading>
            <Paragraph className="max-w-3xl">
              Leverage AI-Powered Job Simulations for Smarter, Faster, and
              Bias-Free Hiring Decisions.
            </Paragraph>
          </SectionHeader>
          {hireSmarterData.map((data, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-x-8 gap-y-12 py-6 sm:py-20"
            >
              <div
                className={cn(
                  "w-full space-y-3 sm:space-y-5 lg:w-[calc(45%-2rem)]",
                  {
                    "lg:order-2": index % 2 > 0,
                  },
                )}
              >
                <FadeUp>
                  <h3 className="pb-4 text-2xl font-bold xl:pb-2 xl:text-xl 2xl:pb-6 2xl:text-2xl">
                    {data.title}
                  </h3>
                  <p className="sm:text-xl lg:text-base 2xl:text-2xl">
                    {data.paragraph}
                  </p>
                </FadeUp>
              </div>
              <FadeUp className="flex w-full justify-center lg:w-[calc(55%-2rem)]">
                <Image
                  src={data.image}
                  alt={data.title}
                  className="object-contain"
                />
              </FadeUp>
            </div>
          ))}
          <FadeUp className="text-center">
            <BtnLink href="/demo">Request Demo</BtnLink>
          </FadeUp>
        </MaxScreen>
      </Container>
    </section>
  );
}
