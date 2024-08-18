import MaxScreen from "./MaxScreen";
import SectionHeader from "./SectionHeader";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "next/image";
import { jobRoles } from "@/lib/data";
import Button from "./Button";
import FadeUp from "./FadeUp";
import Link from "next/link";

export default function JobRoles() {
  return (
    <section className="bg-[#e4f4fb]">
      <div className="bg-[url('/images/pattern/DNDPattern1.png')] bg-right bg-no-repeat">
        <div className="mx-auto max-w-6xl px-4">
          <MaxScreen>
            <FadeUp>
              <SectionHeader>
                <Heading className="text-4xl">Job Roles</Heading>
                <Paragraph className="max-w-2xl">
                  Our platform is designed to meet the needs for virtually any
                  job role from entry level to senior leadership role.
                </Paragraph>
              </SectionHeader>
            </FadeUp>

            <div className="flex flex-wrap justify-evenly gap-y-10 pt-16 lg:justify-between">
              {jobRoles.map((job) => (
                <FadeUp
                  key={job.text}
                  className="basis-30 rounded-xl text-center max-[507px]:last:hidden sm:basis-[19rem]"
                >
                  <Image
                    src={job.image}
                    alt={job.alt}
                    className="mx-auto w-40 sm:w-28"
                  />
                  <h3 className="py-3 text-xl font-bold">{job.heading}</h3>
                  <p className="hidden text-xl sm:block">{job.text}</p>
                </FadeUp>
              ))}
            </div>
            <div className="pt-14 text-center">
              <Button className="inline-block">
                <Link href="/demo">Get Started</Link>
              </Button>
            </div>
          </MaxScreen>
        </div>
      </div>
    </section>
  );
}
