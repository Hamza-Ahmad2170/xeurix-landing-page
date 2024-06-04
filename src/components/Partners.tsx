import Image from "next/image";
import Heading from "./SectionHeading";
import Paragraph from "./SectionParagraph";

export default function Partners() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#eeebed] bg-[url('/img/pattern2.webp')]">
      <div className="container flex flex-col gap-10 text-center">
        <Heading>ATS Integration Partners</Heading>
        <Paragraph className="max-w-lg">
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
      </div>
    </div>
  );
}
