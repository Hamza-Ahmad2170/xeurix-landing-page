import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Slide from "./Fade";
import { hireSmarterData } from "@/lib/data";

export default function HireSmarter() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4">
        <MaxScreen>
          <SectionHeader className="pt-20">
            <Heading>Hire Smarter with Xeurix</Heading>
            <Paragraph className="max-w-3xl">
              Unlock the full potential of your hiring process with Xeurix’s
              advanced job simulations and data-driven hiring platform.
            </Paragraph>
          </SectionHeader>
          {hireSmarterData.map((data, index) => (
            <div
              key={index}
              className="flex flex-wrap gap-x-8 gap-y-12 py-12 sm:py-20"
            >
              <div
                className={cn(
                  "w-full space-y-3 sm:space-y-5 lg:w-[calc(50%-2rem)]",
                  {
                    "lg:order-2": index % 2 > 0,
                  },
                )}
              >
                <Slide>
                  <h3 className="pb-2 text-xl font-bold sm:text-[1.625rem]">
                    {data.title}
                  </h3>
                  <p className="sm:text-2xl">{data.paragraph}</p>
                </Slide>
              </div>
              <div className="w-full lg:w-[calc(50%-2rem)]">
                <Image src={data.image} alt={data.title} />
              </div>
            </div>
          ))}
        </MaxScreen>
      </div>
    </section>
  );
}
