import Heading from "./Heading";
import HireSmarterItem from "./HireSmarterItem";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";

export default function HireSmarter() {
  return (
    <section>
      <div className="container">
        <MaxScreen>
          <Heading>Hire Smarter with Xeurix</Heading>
          <Paragraph className="mx-auto max-w-xl">
            Unlock the full potential of your hiring process with Xeurix’s
            advanced job simulations and data-driven hiring platform.
          </Paragraph>

          <HireSmarterItem />
        </MaxScreen>
      </div>
    </section>
  );
}
