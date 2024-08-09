import Image from "next/image";
import MaxScreen from "./MaxScreen";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import dnd from "../../public/images/dnd.png";

export default function Collaborate() {
  return (
    <div className="relative bg-[url('/img/dndpink.webp')] bg-left-top bg-no-repeat pt-20">
      <div className="bg-[url('/img/DNDPattern.webp')] bg-cover bg-right-bottom bg-no-repeat">
        <div className="container">
          <MaxScreen className="text-center">
            <Heading>Engage, Collaborate, and Hire</Heading>
            <Paragraph className="max-w-xl">
              With Xeurix collaborate and create a frictionless hiring funnel by
              eliminating tedious back-and-forth communication
            </Paragraph>
            <Image src={dnd} alt="dnd" />
          </MaxScreen>
        </div>
      </div>
    </div>
  );
}
