import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { partners } from "@/lib/data";
import FadeUp from "./FadeUp";

export default function Partners() {
  return (
    <section className="bg-[#eeebed]">
      <div className="mx-auto max-w-6xl px-4">
        <MaxScreen>
          <FadeUp>
            <SectionHeader>
              <Heading>ATS Integration Partners</Heading>
              <Paragraph className="max-w-xl">
                Integrate with over 45 major applicant tracking systems to
                create seamless workflows
              </Paragraph>
            </SectionHeader>
          </FadeUp>
          <div className="grid grid-cols-2 justify-center gap-4 py-10 md:grid-cols-4">
            {partners.map((partner) => (
              <FadeUp
                key={partner.alt}
                className="flex h-full items-center justify-center bg-white px-4 shadow-xl"
              >
                <Image
                  src={partner.image}
                  alt={partner.alt}
                  key={partner.alt}
                  className="aspect-square w-32 object-contain"
                />
              </FadeUp>
            ))}
          </div>
          <div className="text-center">
            <p className="font-bold">And more</p>
          </div>
        </MaxScreen>
      </div>
    </section>
  );
}
