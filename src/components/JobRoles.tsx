import MaxScreen from "./MaxScreen";
import SectionHeader from "./SectionHeader";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "next/image";
import { jobRoles } from "@/lib/data";

import FadeUp from "./FadeUp";
import Link from "next/link";
import Container from "./Container";
import BtnLink from "./BtnLink";

export default function JobRoles() {
  return (
    <section className="bg-[#e4f4fb]" id="jobRoles">
      <Container>
        <MaxScreen>
          <FadeUp>
            <SectionHeader>
              <Heading className="text-4xl">Job Roles</Heading>
              <Paragraph className="max-w-2xl">
                Our platform is designed to meet the needs for virtually any job
                role from entry level to senior leadership role.
              </Paragraph>
            </SectionHeader>
          </FadeUp>

          <div className="flex flex-wrap justify-center gap-4">
            {jobRoles.map((job) => (
              <FadeUp
                key={job.text}
                className="w-[calc(100%/2-1rem)] pt-10 text-center last:hidden xl:w-[calc(100%/3-2rem)] last:xl:block"
              >
                <Image
                  src={job.image}
                  alt={job.alt}
                  className="mx-auto w-20 2xl:w-28"
                  title={job.alt}
                />
                <h3 className="py-1 text-xl font-bold">{job.heading}</h3>
                <p className="hidden text-lg sm:block">{job.text}</p>
              </FadeUp>
            ))}
          </div>
          <div className="pt-14 text-center">
            <BtnLink href="/demo">Get Started</BtnLink>
          </div>
        </MaxScreen>
      </Container>
    </section>
  );
}
