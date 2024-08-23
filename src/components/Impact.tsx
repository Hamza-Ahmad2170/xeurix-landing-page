import BtnLink from "./BtnLink";

import Container from "./Container";
import Heading from "./Heading";
import ImpactCountDown from "./ImpactCountDown";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";

export default function Impact() {
  return (
    <section
      className="bg-[url('/images/pattern/parallax-4.jpg')] bg-no-repeat"
      id="impact"
    >
      <Container>
        <MaxScreen>
          <SectionHeader>
            <Heading className="text-3xl">Why Xeurix: The Impact?</Heading>
            <Paragraph className="hidden max-w-5xl md:block">
              Xeurix revolutionizes hiring by blending advanced AI with
              immersive 3D simulations. Select below to compare traditional
              hiring methods with Xeurix’s cutting-edge approach.
            </Paragraph>
            <Paragraph className="md:hidden">
              Xeurix revolutionizes hiring by blending advanced AI with
              immersive 3D simulations
            </Paragraph>
          </SectionHeader>
          <ImpactCountDown />
          <div className="pt-16 text-center">
            <BtnLink href="/demo">Request Demo</BtnLink>
          </div>
        </MaxScreen>
      </Container>
    </section>
  );
}
