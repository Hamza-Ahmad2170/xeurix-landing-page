import React from "react";
import MaxScreen from "./MaxScreen";
import Heading from "./Heading";
import WorkEmail from "./WorkEmail";
import Image from "next/image";
import laptopHalf from "../../public/images/laptop_isometric.png";
import laptopFull from "../../public/images/laptop_banner.png";

export default function JobFit() {
  return (
    <section className="gradient-job-fit relative">
      <div className="container">
        <MaxScreen className="min-h-[calc(100dvh-66px)] flex justify-between items-center flex-col xl:flex-row ">
          <div className="xl:basis-2/4 flex flex-col gap-8 order-2 xl:order-1 py-20 xl:py-0">
            <Heading className="font-bold text-4xl leading-snug  lg:text-[2.8rem] 2xl:text-[4.3rem]">
              Boost Job Fit, Employee Productivity, and Retention.
            </Heading>
            <p className="text-lg sm:text-2xl">
              The world’s first
              <span className="font-bold"> AI-driven job simulations</span> for
              hiring, training, and retaining talent.
            </p>
            <WorkEmail />
          </div>
          <div className="hidden xl:block xl:basis-3/6  order-1 xl:order-2">
            <Image
              src={laptopHalf}
              alt="laptop"
              priority
              className="absolute max-[1600px]:max-w-[700px] max-[1800px]:max-w-[900px] min-[1800px]:max-w-[900px] -translate-y-[55%] top-1/2 right-0"
            />
          </div>
          <div className="block xl:hidden basis-full order-1 xl:order-2">
            <Image src={laptopFull} alt="laptop" priority className="" />
          </div>
        </MaxScreen>
      </div>
    </section>
  );
}
