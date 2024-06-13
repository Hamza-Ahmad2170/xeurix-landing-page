import Image from "next/image";
import Wave from "./Wave";
import Model from "./Model";

function JobFit() {
  return (
    <div className="job-fit relative -z-10 overflow-x-hidden">
      <div className="container">
        <div className="flex min-h-[calc(100dvh-64px)] flex-col-reverse justify-end gap-8 py-10 lg:flex-row lg:items-center lg:justify-center">
          <div className="space-y-5 text-left lg:basis-1/2">
            <h1 className="max-w-[17rem] text-2xl font-bold leading-normal sm:max-w-[26rem] sm:text-4xl lg:max-w-[26rem] lg:text-4xl lg:leading-[3rem] xl:max-w-[33rem] xl:text-[46px] xl:leading-[4rem]">
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
                className="w-full rounded-lg border border-black py-3 pl-2 text-xs italic placeholder:text-xs sm:text-base sm:placeholder:pl-3 sm:placeholder:text-sm"
              />
              <button className="absolute -right-14 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4145a] px-6 py-2 text-xs font-extrabold text-white sm:text-sm">
                Try for Free
              </button>
            </div>
          </div>
          <Model className="lg:basis-1/2">
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
      <Wave />
    </div>
  );
}
export default JobFit;
