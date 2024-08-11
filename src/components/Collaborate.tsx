import Image from "next/image";
import MaxScreen from "./MaxScreen";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import dnd from "../../public/images/dnd.png";

export default function Collaborate() {
  return (
    // <div className="relative">
    //   <MaxScreen className="bg-[url('/images/dndpink.png')] bg-left-top bg-no-repeat pt-20">
    //     <div className="bg-[url('/images/DNDPattern.png')] bg-cover bg-right-bottom bg-no-repeat">
    //       <div className="container mx-auto text-center">
    //         <Heading>Engage, Collaborate, and Hire</Heading>
    //         <Paragraph className="mx-auto max-w-xl">
    //           With Xeurix collaborate and create a frictionless hiring funnel by
    //           eliminating tedious back-and-forth communication
    //         </Paragraph>
    //         <Image src={dnd} alt="dnd" />
    //       </div>
    //     </div>
    //   </MaxScreen>
    // </div>
    <section className="bg-[url('/images/dndpink.png')] bg-left-top bg-no-repeat">
      <div className="container">
        <MaxScreen>
          <Heading>Engage, Collaborate, and Hire</Heading>
          <Paragraph className="mx-auto max-w-xl">
            With Xeurix collaborate and create a frictionless hiring funnel by
            eliminating tedious back-and-forth communication
          </Paragraph>
          <Image src={dnd} alt="dnd" />
        </MaxScreen>
      </div>
    </section>
  );
}
