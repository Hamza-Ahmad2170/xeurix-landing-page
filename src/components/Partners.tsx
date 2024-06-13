import Image from "next/image";
import Heading from "./SectionHeading";
import Paragraph from "./SectionParagraph";
import MaxScreen from "./MaxScreen";

export default function Partners() {
  return (
    <div className="bg-[#eeebed] bg-[url('/img/pattern2.webp')]">
      <div className="container">
        <MaxScreen className="text-center">
          <Heading>ATS Integration Partners</Heading>
          <Paragraph className="max-w-xl">
            Integrate with over 45 major applicant tracking systems to create
            seamless workflows
          </Paragraph>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="basis-24">
              <Image
                src="https://placehold.co/200x200/png"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="basis-24">
              <Image
                src="https://placehold.co/200x200/png"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="basis-24">
              <Image
                src="https://placehold.co/200x200/png"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="basis-24">
              <Image
                src="https://placehold.co/200x200/png"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="basis-24">
              <Image
                src="https://placehold.co/200x200/png"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="basis-24">
              <Image
                src="https://placehold.co/200x200/png"
                alt=""
                width={200}
                height={200}
              />
            </div>
          </div>
          <p className="font-bold">And more</p>
        </MaxScreen>
      </div>
    </div>
  );
}
