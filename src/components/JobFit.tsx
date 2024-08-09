import Image from "next/image";
import Heading from "./Heading";
import MaxScreen from "./MaxScreen";
import Wave from "./Wave";
import laptop from "../../public/images/laptop_isometric.png";

export default function JobFit() {
  return (
    <section className="gradient-job-fit relative overflow-x-hidden">
      <MaxScreen className="min-h-[calc(100dvh-66px)] pb-52 pt-16">
        <div className="container grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center gap-5 lg:order-1">
            <Heading className="font-bold max-[1400px]:text-[3.5rem] lg:text-[2.8rem] 2xl:text-[4.3rem]">
              Boost Job Fit, Employee Productivity, and Retention.
            </Heading>
            <p className="text-2xl">
              The world’s first
              <span className="font-bold"> AI-driven job simulations</span> for
              hiring, training, and retaining talent.
            </p>
            <div className="relative z-10 w-full max-w-[34rem]">
              <input
                type="text"
                placeholder="Simply enter your work email"
                className="w-full rounded-lg border border-black py-3 pl-2 italic sm:placeholder:pl-3"
                name="workEmail"
                id="workEmail"
              />
              <button className="absolute -right-14 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4145a] px-6 py-2 font-extrabold text-white">
                Try for Free
              </button>
            </div>
          </div>
          <div className="relative order-1 mx-auto">
            <Image src={laptop} alt="demo" priority />
          </div>
        </div>
      </MaxScreen>
      <Wave />
    </section>
  );
}
