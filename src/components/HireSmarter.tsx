import Heading from "./Heading";
import HireSmarterItem from "./HireSmarterItem";
import MaxScreen from "./MaxScreen";
import Paragraph from "./Paragraph";

export default function HireSmarter() {
  return (
    <section>
      <div className="container py-10">
        <MaxScreen>
          <div className="text-center">
            <Heading>Hire Smarter with Xeurix</Heading>
            <Paragraph className="mx-auto max-w-xl pt-5 text-lg">
              Unlock the full potential of your hiring process with Xeurix’s
              advanced job simulations and data-driven hiring platform.
            </Paragraph>
          </div>
          <HireSmarterItem />
        </MaxScreen>
      </div>
    </section>
  );
}
