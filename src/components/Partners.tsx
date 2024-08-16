import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { partners } from "@/lib/data";

export default function Partners() {
  return (
    <section className="bg-[#eeebed]">
      <div className="mx-auto max-w-6xl px-4">
        <MaxScreen>
          <SectionHeader>
            <Heading>ATS Integration Partners</Heading>
            <Paragraph className="max-w-xl">
              Integrate with over 45 major applicant tracking systems to create
              seamless workflows
            </Paragraph>
          </SectionHeader>
          <div className="flex flex-wrap items-center justify-center gap-8 py-10">
            {partners.map((partner) => (
              <div key={partner.alt} className="basis-24">
                <Image src={partner.image} alt="" />
              </div>
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
