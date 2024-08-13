import Heading from "./Heading";
import ImpactCountDown from "./ImpactCountDown";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";

export default function Impact() {
  return (
    <section className="hidden sm:block">
      <div className="max-w-6xl px-8 mx-auto">
        <MaxScreen>
          <SectionHeader>
            <Heading>Why Xeurix: The Impact?</Heading>
            <Paragraph className="max-w-5xl">
              Xeurix revolutionizes hiring by blending advanced AI with
              immersive 3D simulations. Select below to compare traditional
              hiring methods with Xeurix’s cutting-edge approach.
            </Paragraph>
          </SectionHeader>
          <ImpactCountDown />
        </MaxScreen>
      </div>
    </section>
  );
}
