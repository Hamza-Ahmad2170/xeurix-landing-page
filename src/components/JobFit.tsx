import MaxScreen from "./MaxScreen";
import Image from "next/image";

// image
import laptop from "../../public/images/laptop_banner.png";
import laptopBanner from "../../public/images/laptop_isometric.png";
import BtnLink from "./BtnLink";

export default function JobFit() {
  return (
    <section id="home">
      <div className="gradient-job-fit pb-10 lg:py-10 2xl:py-32">
        <div className="container">
          <div className="flex min-h-[calc(100dvh-90px)] flex-col py-10 lg:flex-row lg:items-center 2xl:py-0 2xl:pb-12">
            <div className="order-last w-full space-y-3 py-10 md:space-y-5 lg:-order-last lg:w-1/2 lg:py-0">
              <h1 className="text-[1.5rem] leading-relaxed sm:text-4xl sm:leading-relaxed lg:text-5xl lg:leading-relaxed 2xl:text-[3.9rem] 2xl:leading-relaxed">
                The World’s First
                <br />
                <span className="font-extrabold">
                  AI-Driven Job Simulations
                </span>
                <br />
                For Hiring.
              </h1>
              <p className="max-w-3xl text-lg sm:text-2xl">
                Precisely assess job-fit, cultural-fit, skills with advanced job
                simulations and data-powered insights.
              </p>
              <div className="pt-2">
                <BtnLink className="inline-block" variant="pill" href="/demo">
                  Request Free Trial
                </BtnLink>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <Image
                src={laptop}
                alt="3D job simulation in a virtual office where candidate is performing life-like tasks for a realistic job role evaluation and enhanced talent acquisition."
                priority
                title="3D job simulation in a virtual office where candidate is performing life-like tasks for a realistic job role evaluation and enhanced talent acquisition."
                className="lg:hidden"
              />
              <Image
                src={laptopBanner}
                alt="3D job simulation in a virtual office where candidate is performing life-like tasks for a realistic job role evaluation and enhanced talent acquisition."
                priority
                title="3D job simulation in a virtual office where candidate is performing life-like tasks for a realistic job role evaluation and enhanced talent acquisition."
                className="absolute right-0 top-[55%] hidden w-[37.5rem] -translate-y-1/2 translate-x-0 lg:block 2xl:w-[56.25rem] laptop:w-[40.625rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
