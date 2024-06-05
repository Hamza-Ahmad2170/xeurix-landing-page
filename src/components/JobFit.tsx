import Image from "next/image";
import Model from "./Model";
import Wave from "./Wave";

export default function JobFit() {
  return (
    // < className="job-fit relative -z-0 flex h-screen w-full justify-center lg:items-center">
    <div className="job-fit relative -z-0 py-10">
      <div className="container">
        <div className="flex h-[calc(100dvh-64px)] w-full justify-center lg:items-center">
          <div className="grid grid-cols-1 items-center justify-between gap-6 lg:grid-cols-2 lg:py-0">
            <div className="order-2 space-y-10 lg:order-2">
              <h1 className="max-w-[21.5rem] text-3xl font-bold leading-normal sm:max-w-[26rem] sm:text-4xl lg:max-w-[26rem] lg:text-4xl lg:leading-[3rem] xl:max-w-[33rem] xl:text-[46px] xl:leading-[4rem]">
                Boost Job Fit, Employee Productivity, and Retention.
              </h1>
              <p className="max-w-[25rem] sm:text-lg sm:leading-snug">
                The world’s first
                <span className="font-extrabold">
                  {" "}
                  AI-driven job simulations{" "}
                </span>
                for hiring, training, and retaining talent.
              </p>
              <div className="relative z-10 w-full max-w-[34rem]">
                <input
                  type="text"
                  placeholder="Simply enter your work email"
                  className="w-full rounded-lg border border-black py-3 pl-3 text-sm italic placeholder:pl-3 sm:text-base"
                />
                <button className="absolute -right-14 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4145a] px-6 py-2 text-sm font-extrabold text-white placeholder:text-sm sm:text-sm">
                  Try for Free
                </button>
              </div>
            </div>

            <Model className="order-1 lg:order-2">
              <Image
                src="https://placehold.co/600x500/png"
                alt="job"
                priority={true}
                width={600}
                height={500}
                className="mx-auto cursor-pointer"
                quality={60}
              />
            </Model>
          </div>
        </div>
      </div>
      <Wave />
    </div>
  );
}
