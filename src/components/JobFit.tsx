import Image from "next/image";
import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Wave from "./Wave";
import laptop from "../../public/images/laptop_banner.png";
import WorkEmail from "./WorkEmail";

export default function JobFit() {
  return (
    <section className="gradient-job-fit relative overflow-x-hidden">
      <div className="container">
        <MaxScreen className="grid min-h-[calc(100dvh-66px)] grid-cols-1 gap-4 pb-52 pt-8 lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center gap-5 lg:order-1">
            <Heading className="font-bold max-[1400px]:text-[3.5rem] lg:text-[2.8rem] 2xl:text-[4.3rem]">
              Boost Job Fit, Employee Productivity, and Retention.
            </Heading>
            <p className="text-2xl">
              The world’s first
              <span className="font-bold"> AI-driven job simulations</span> for
              hiring, training, and retaining talent.
            </p>
            ``
            <WorkEmail />
          </div>
          <div className="order-1 lg:order-2">
            <Image src={laptop} alt="demo" priority />
          </div>
        </MaxScreen>
      </div>
      <Wave />
    </section>
  );
}
