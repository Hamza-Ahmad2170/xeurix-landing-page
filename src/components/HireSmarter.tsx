import Heading from "./Heading";
import HireSmarterItem from "./HireSmarterItem";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";
import SectionHeader from "./SectionHeader";

export default function HireSmarter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-8">
        <MaxScreen>
          <SectionHeader>
            <Heading>Hire Smarter with Xeurix</Heading>
            <Paragraph className="max-w-xl">
              Unlock the full potential of your hiring process with Xeurix’s
              advanced job simulations and data-driven hiring platform.
            </Paragraph>
          </SectionHeader>
          <HireSmarterItem />
        </MaxScreen>
      </div>
    </section>
  );
}
