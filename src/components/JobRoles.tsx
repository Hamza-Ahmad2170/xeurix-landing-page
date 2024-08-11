import Image from "next/image";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import MaxScreen from "./MaxScreen";
import support_staff from "../../public/svg/jobRoles/supportstaff.svg";
import analyst from "../../public/svg/jobRoles/analyst.svg";
import executives from "../../public/svg/jobRoles/executives.svg";
import admin_staff from "../../public/svg/jobRoles/adminstaff.svg";
import accountant from "../../public/svg/jobRoles/accountant.svg";
import sales_reps from "../../public/svg/jobRoles/sales_reps.svg";
import medical_staff from "../../public/svg/jobRoles/medicalstaff.svg";
import programmer from "../../public/svg/jobRoles/programmer.svg";
import manager from "../../public/svg/jobRoles/projectmanager.svg";

export default function JobRoles() {
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

  return (
    <div className="bg-[#e4f4fb] py-20">
      <div>
        <div className="container">
          <MaxScreen className="gap-10 text-center">
            <Heading>Job Roles</Heading>
            <Paragraph className="max-w-xl">
              Our platform is designed to meet the needs for virtually any job
              role from entry level to senior leadership role.
            </Paragraph>
            <div className="flex max-w-5xl flex-wrap justify-between gap-y-10">
              {jobRoles.map((job) => (
                <div key={job.text} className="rounded-xl lg:basis-72">
                  <Image
                    src={job.image}
                    alt={job.alt}
                    className="mx-auto w-52"
                  />
                  <h3 className="py-3 text-xl font-bold">{job.heading}</h3>
                  <p>{job.text}</p>
                </div>
              ))}
            </div>
            <p className="font-bold">And many more</p>
            <div className="text-center">
              <button className="rounded-md bg-[#d4145a] px-8 py-1 text-white">
                Get started
              </button>
            </div>
          </MaxScreen>
        </div>
      </div>
    </div>
  );
}
