import React from "react";
import MaxScreen from "./MaxScreen";
import WorkEmail from "./WorkEmail";
import Image from "next/image";
import laptopHalf from "../../public/images/laptop_isometric.png";
import laptopFull from "../../public/images/laptop_banner.png";
import Link from "next/link";

export default function JobFit() {
  return (
    <section className="gradient-job-fit relative">
      <div className="container">
        <MaxScreen className="flex min-h-[calc(100dvh-66px)] flex-col items-center lg:justify-between xl:flex-row">
          <div className="order-2 space-y-7 py-20 xl:order-1 xl:basis-3/5 xl:py-0">
            <h1 className="text-7xl leading-relaxed">
              The world’s first{" "}
              <span className="font-bolder">
                <br /> AI-Driven Job Simulations{" "}
              </span>{" "}
              <br /> For Hiring.
            </h1>
            <p className="text-lg sm:text-2xl">
              Boost Job Fit, Employee Productivity, job simulations for hiring,
              training, and retaining talent.
            </p>

            <WorkEmail />
          </div>
          <div className="order-1 hidden xl:order-2 xl:block xl:basis-2/5">
            <Image
              src={laptopHalf}
              alt="laptop"
              priority
              className="absolute right-0 top-1/2 -translate-y-[55%] max-[1800px]:max-w-[900px] max-[1600px]:max-w-[700px] min-[1800px]:max-w-[900px]"
            />
          </div>
          <div className="order-1 block basis-full xl:order-2 xl:hidden">
            <Image src={laptopFull} alt="laptop" priority className="" />
          </div>
        </MaxScreen>
      </div>
    </section>
  );
}
