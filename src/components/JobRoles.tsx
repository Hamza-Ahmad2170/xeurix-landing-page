import Image from "next/image";
import Heading from "./SectionHeading";
import Paragraph from "./SectionParagraph";
import MaxScreen from "./MaxScreen";

export default function JobRoles() {
  const jobRoles = [
    {
      image: "https://placehold.co/100x100/png",
      name: "Support staff",
    },
    {
      image: "https://placehold.co/100x100/png",
      name: "Admin staff",
    },
    {
      image: "https://placehold.co/100x100/png",
      name: "Analyst",
    },
    {
      image: "https://placehold.co/100x100/png",
      name: "Mangers",
    },
    {
      image: "https://placehold.co/100x100/png",
      name: "Programers",
    },
    {
      image: "https://placehold.co/100x100/png",
      name: "Accountants",
    },
  ];

  return (
    <div className="bg-[#e4f4fb] py-20">
      <div className="container">
        <MaxScreen className="text-center">
          <Heading>Job Roles</Heading>
          <Paragraph className="max-w-lg">
            Our platform is designed to meet the needs for virtually any job
            role from entry level to senior leadership role.
          </Paragraph>
          <div className="flex w-full flex-wrap justify-center">
            {jobRoles.map((job) => (
              <div className="p-4 text-center lg:basis-40" key={job.name}>
                <Image
                  src={job.image}
                  alt={job.name}
                  width={100}
                  height={100}
                  className="mx-auto rounded-lg"
                />
                <p className="py-3 font-bold">{job.name}</p>
              </div>
            ))}
          </div>
          <p className="font-bold">And many more</p>
        </MaxScreen>
      </div>
    </div>
  );
}
