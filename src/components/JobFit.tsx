import React from "react";
import MaxScreen from "./MaxScreen";
import Heading from "./Heading";
import WorkEmail from "./WorkEmail";
import Image from "next/image";
import laptop from "../../public/images/laptop_banner.png";

export default function JobFit() {
  return (
    <section className="gradient-job-fit">
      <div className="max-w-6xl px-8 mx-auto">
        <MaxScreen className="min-h-[calc(100dvh-66px)]">
          <div className="order-2 flex flex-col justify-center gap-5 lg:order-1">
            <Heading className="font-bold max-[1400px]:text-[3.5rem] lg:text-[2.8rem] 2xl:text-[4.3rem]">
              Boost Job Fit, Employee Productivity, and Retention.
            </Heading>
            <p className="text-2xl">
              The world’s first
              <span className="font-bold"> AI-driven job simulations</span> for
              hiring, training, and retaining talent.
            </p>
            <WorkEmail />
          </div>
          <div className="order-1 lg:order-2">
            <Image src={laptop} alt="demo" priority />
          </div>
        </MaxScreen>
      </div>
    </section>
  );
}
