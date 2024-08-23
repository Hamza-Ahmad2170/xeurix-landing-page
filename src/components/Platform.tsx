import Heading from "./Heading";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";
import MaxScreen from "./MaxScreen";
import { PlatformData } from "@/lib/data";
import Image from "next/image";
import FadeUp from "./FadeUp";
import Container from "./Container";

export default function Platform() {
  return (
    <div className="text-white" id="platform">
      <div className="bg-[#001b27]">
        <Container>
          <MaxScreen>
            <FadeUp>
              <SectionHeader>
                <Heading className="text-2xl">
                  AI-Powered Hiring Platform
                </Heading>
                <Paragraph className="max-w-5xl">
                  Every job is unique, and so is our assessment approach. At
                  Xeurix, we harness AI to create hyper-customized simulations
                  tailored precisely to each role and company.
                </Paragraph>
              </SectionHeader>
            </FadeUp>

            <div className="flex flex-wrap items-stretch justify-center gap-6 pt-16 lg:flex-nowrap">
              {PlatformData.map((platform) => (
                <FadeUp
                  key={platform.heading}
                  className="w-80 rounded-lg bg-white text-black lg:w-[calc(100%/3-1.5rem)]"
                >
                  <Image src={platform.image} alt={platform.heading} />
                  <div className="space-y-2 px-4 pb-10 pt-4">
                    <h3 className="text-2xl font-bold">{platform.heading}</h3>
                    <p className="sm:text-xl lg:text-base 2xl:text-2xl"> {platform.paragraph}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </MaxScreen>
        </Container>
      </div>
    </div>
  );
}
