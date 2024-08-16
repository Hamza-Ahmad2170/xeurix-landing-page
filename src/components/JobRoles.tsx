import MaxScreen from "./MaxScreen";
import SectionHeader from "./SectionHeader";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "next/image";
import { jobRoles } from "@/lib/data";

export default function JobRoles() {
  return (
    <section className="bg-[#e4f4fb]" id="jobRoles">
      <div className="mx-auto max-w-6xl px-4">
        <MaxScreen>
          <SectionHeader>
            <Heading>Job Roles</Heading>
            <Paragraph className="max-w-2xl">
              Our platform is designed to meet the needs for virtually any job
              role from entry level to senior leadership role.
            </Paragraph>
          </SectionHeader>
          <div className="flex flex-wrap justify-evenly gap-y-10 pt-16 lg:justify-between">
            {jobRoles.map((job) => (
              <div
                key={job.text}
                className="basis-56 rounded-xl text-center sm:basis-[21rem]"
              >
                <Image
                  src={job.image}
                  alt={job.alt}
                  className="mx-auto w-52 sm:w-28"
                />
                <h3 className="py-3 text-xl font-bold">{job.heading}</h3>
                <p className="text-xl">{job.text}</p>
              </div>
            ))}
          </div>
          <div className="pt-14 text-center">
            {/* <p className="font-bold pb-8">And many more</p> */}
            <button className="inline-block rounded-md bg-[#d4145a] px-8 py-2 text-xl font-bold text-white">
              Get Started
            </button>
          </div>
        </MaxScreen>
      </div>
    </section>
  );
}
