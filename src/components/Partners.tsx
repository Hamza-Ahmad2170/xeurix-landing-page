import Image from "next/image";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import MaxScreen from "./MaxScreen";
import partner1 from "../../public/images/partners/partner1_.jpeg";

const partners = [
  {
    image: partner1,
    alt: "Partner 1",
  },
];

export default function Partners() {
  return (
    <div className="bg-[#eeebed]">
      <div className="container">
        <MaxScreen className="text-center">
          <Heading>ATS Integration Partners</Heading>
          <Paragraph className="max-w-xl">
            Integrate with over 45 major applicant tracking systems to create
            seamless workflows
          </Paragraph>
          <div className="flex flex-wrap justify-center gap-8 py-10">
            {partners.map((partner) => (
              <div key={partner.alt} className="basis-24">
                <Image src={partner.image} alt="" />
              </div>
            ))}
          </div>
          <p className="font-bold">And more</p>
        </MaxScreen>
      </div>
    </div>
  );
}
