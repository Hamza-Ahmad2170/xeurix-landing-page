import support_staff from "../../public/svg/jobRoles/supportstaff.svg";
import analyst from "../../public/svg/jobRoles/analyst.svg";
import executives from "../../public/svg/jobRoles/executives.svg";
import admin_staff from "../../public/svg/jobRoles/adminstaff.svg";
import accountant from "../../public/svg/jobRoles/accountant.svg";
import sales_reps from "../../public/svg/jobRoles/sales_reps.svg";
import medical_staff from "../../public/svg/jobRoles/medicalstaff.svg";
import programmer from "../../public/svg/jobRoles/programmer.svg";
import manager from "../../public/svg/jobRoles/projectmanager.svg";
import MaxScreen from "./MaxScreen";
import SectionHeader from "./SectionHeader";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Image from "next/image";

const jobRoles = [
  {
    image: support_staff,
    alt: "Support Staff",
    heading: "Support staff",
    text: "Assess customer service skills and operational efficiency.",
  },
  {
    image: analyst,
    alt: "Analyst",
    heading: "Analysts",
    text: "Evaluate analytical thinking and data interpretation skills.",
  },

  {
    image: executives,
    alt: "executives",
    heading: "executives",
    text: "Test leadership, decision-making, and strategic planning skills.",
  },
  {
    image: admin_staff,
    alt: "Admin staff",
    heading: "Admin staff",
    text: "Measure organizational abilities and multitasking efficiency.",
  },
  {
    image: accountant,
    alt: "Accountant",
    heading: "Accountants",
    text: "Assess financial acumen and accuracy in financial reporting.",
  },
  {
    image: sales_reps,
    alt: "Sales reps",
    heading: "Sales reps",
    text: "Evaluate persuasive communication and sales strategy execution..",
  },
  {
    image: medical_staff,
    alt: "Medical staff",
    heading: "Medical staff",
    text: "Test patient care skills and adherence to medical protocols.",
  },
  {
    image: programmer,
    alt: "Programmer",
    heading: "Programmers",
    text: "Assess coding proficiency and problem-solving abilities.",
  },
  {
    image: manager,
    alt: "Manager",
    heading: "Project managers",
    text: "Evaluate project planning, teamwork, and leadership skills.",
  },
];

export default function JobRoles() {
  return (
    <section className="bg-[#e4f4fb]">
      <div className="max-w-6xl mx-auto px-8">
        <MaxScreen>
          <SectionHeader>
          <Heading>Job Roles</Heading>
            <Paragraph className="max-w-xl">
              Our platform is designed to meet the needs for virtually any job
              role from entry level to senior leadership role.
            </Paragraph>
          </SectionHeader>
          <div className="flex  flex-wrap justify-between gap-y-10 pt-16">
            {jobRoles.map((job) => (
              <div
                key={job.text}
                className="rounded-xl lg:basis-72 text-center"
              >
                <Image src={job.image} alt={job.alt} className="mx-auto w-28" />
                <h3 className="py-3 text-xl font-bold">{job.heading}</h3>
                <p>{job.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center pt-20">
            <p className="font-bold pb-8">And many more</p>
            <button className=" bg-[#d4145a] rounded-md px-6 py-1 text-white inline-block text-lg">
              Get started
            </button>
          </div>
        </MaxScreen>
      </div>
    </section>
  );
}
