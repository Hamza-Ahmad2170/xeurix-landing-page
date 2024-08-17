import Heading from "./Heading";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";
import MaxScreen from "./MaxScreen";
import { PlatformData } from "@/lib/data";
import Image from "next/image";
import FadeUp from "./FadeUp";

export default function Platform() {
  return (
    <div className="text-white" id="platform">
      <div className="bg-[#001b27]">
        <div className="mx-auto max-w-6xl px-4">
          <MaxScreen>
            <FadeUp>
              <SectionHeader>
                <Heading className="text-2xl">
                  AI-Powered Hiring Platform
                </Heading>
                <Paragraph className="max-w-4xl">
                  Every job is unique, and so is our assessment approach. At
                  Xeurix, we harness AI to create hyper-customized simulations
                  tailored precisely to each role and company.
                </Paragraph>
              </SectionHeader>
            </FadeUp>
            <FadeUp>
              <ul className="flex flex-wrap items-stretch justify-center gap-8 pt-16">
                {PlatformData.map((platform) => (
                  <FadeUp
                    key={platform.heading}
                    className="basis-[22rem] rounded-lg bg-white text-black"
                  >
                    <Image src={platform.image} alt={platform.heading} />
                    <div className="space-y-2 px-4 pb-10 pt-4">
                      <h3 className="text-2xl font-bold">{platform.heading}</h3>
                      <p> {platform.paragraph}</p>
                    </div>
                  </FadeUp>
                ))}
              </ul>
            </FadeUp>
          </MaxScreen>
        </div>
      </div>
    </div>
  );
}
