import React from "react";
import MaxScreen from "./MaxScreen";

import Image from "next/image";
import laptopHalf from "../../public/images/laptop_isometric.png";
import laptopFull from "../../public/images/laptop_banner.png";
import Button from "./Button";

export default function JobFit() {
  return (
    <section className="gradient-job-fit relative" id="home">
      <div className="container">
        <MaxScreen className="flex min-h-[calc(100dvh-66px)] flex-col items-center lg:justify-between xl:flex-row">
          <div className="order-2 space-y-7 py-20 xl:order-1 xl:basis-3/5 xl:py-0">
            <h1 className="text-2xl leading-relaxed sm:text-4xl sm:leading-relaxed lg:text-6xl lg:leading-relaxed 2xl:text-7xl 2xl:leading-relaxed">
              The world’s first
              <span className="font-extrabold">
                <br /> AI-Driven Job Simulations
              </span>
              <br /> For Hiring.
            </h1>
            <p className="max-w-3xl text-lg sm:text-2xl">
              Precisely assess job-fit, cultural-fit, skills with advanced job
              simulations and data-powered insights.
            </p>
            <Button className="inline-block w-40" variant="pill">
              Free Trial
            </Button>
          </div>
          <div className="order-1 hidden xl:order-2 xl:block xl:basis-2/5">
            <Image
              src={laptopHalf}
              alt="3D job simulation in a virtual office where candidate is performing life-like tasks for a realistic job role evaluation and enhanced talent acquisition."
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
