import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import partner1 from "../../public/images/partners/partner1_.jpeg";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import xeurix from "../../public/images/partners/xeurix website pics icons.png";
import icims from "../../public/images/partners/icims.png";
import jazzhr from "../../public/images/partners/jazzhr.png";
import greenHouse from "../../public/images/partners/greenhouse.png";
import lever from "../../public/images/partners/lever_logo.png";
import breezy from "../../public/images/partners/BreezyHR3.png";
import taleo from "../../public/images/partners/taleo.png";

const partners = [
  {
    image: xeurix,
    alt: "as",
  },
  {
    image: icims,
    alt: "asd",
  },
  {
    image: jazzhr,
    alt: "sd",
  },
  {
    image: greenHouse,
    alt: "da",
  },
  {
    image: lever,
    alt: "Lever",
  },
  {
    image: breezy,
    alt: "Breezy",
  },
  {
    image: taleo,
    alt: "Taleo",
  },
];

export default function Partners() {
  return (
    <section className="bg-[#eeebed]">
      <div className="px-8 mx-auto max-w-6xl">
        <MaxScreen>
          <SectionHeader>
            <Heading>ATS Integration Partners</Heading>
            <Paragraph className="max-w-xl">
              Integrate with over 45 major applicant tracking systems to create
              seamless workflows
            </Paragraph>
          </SectionHeader>
          <div className="flex flex-wrap justify-center gap-8 py-10 items-center">
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
