import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import { partners } from "@/lib/data";
import FadeUp from "./FadeUp";
import Container from "./Container";
import watersplash from "../../public/images/pattern/watersplash.png";

export default function Partners() {
  return (
    <section className="bg-[#eeebed]">
      <Container>
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
          <FadeUp className="sm:partnersGrid grid grid-cols-2 grid-rows-[repeat(4,150px)] justify-center gap-4 py-6 2xl:grid-cols-4 2xl:grid-rows-[150px,150px] 2xl:pt-10">
            {partners.map((partner) => (
              <div
                key={partner.alt}
                className="partners flex items-center justify-center bg-white"
              >
                <Image
                  src={partner.image}
                  alt={partner.alt}
                  title={partner.alt}
                  className="w-28 2xl:w-40"
                />
              </div>
            ))}
          </FadeUp>
          <div className="pt-10 text-center">
            <p className="mx-auto text-base font-semibold sm:text-xl 2xl:text-[1.5rem]">
              And more
            </p>
          </div>
        </MaxScreen>
      </Container>
    </section>
  );
}
