// hire smarter
import ai_evaluation from "../../public/images/ai_evaluation.png";
import faster_hiring from "../../public/images/faster_hiring.png";
import eliminate_bias from "../../public/images/eliminate_bias.png";

// platform
import Tailored_Simulations from "../../public/images/Tailored_Simulations.png";
import ai_characters from "../../public/images/ai-characters.png";
import boostJobFit from "../../public/images/boost_jobfit.png";

// job roles
import manager from "../../public/svg/jobRoles/projectmanager.svg";
import support_staff from "../../public/svg/jobRoles/supportstaff.svg";
import analyst from "../../public/svg/jobRoles/analyst.svg";
import executives from "../../public/svg/jobRoles/executives.svg";
import admin_staff from "../../public/svg/jobRoles/adminstaff.svg";
import accountant from "../../public/svg/jobRoles/accountant.svg";
import sales_reps from "../../public/svg/jobRoles/sales_reps.svg";
import medical_staff from "../../public/svg/jobRoles/medicalstaff.svg";
import programmer from "../../public/svg/jobRoles/programmer.svg";

// partners
import breezy from "../../public/images/Breezy.png";
import teamTailor from "../../public/images/teamtailor.png";
import greenHouse from "../../public/images/greenhouse.png";
import lever from "../../public/images/lever_logo.png";
import workable from "../../public/images/Workable.png";
import icims from "../../public/images/icims.png";
import jazzhr from "../../public/images/jazzhr.png";
import applicantStack from "../../public/images/Applicant_Stack.png";

const homeNavLinks = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "Assessment",
    path: "#assessment",
  },
  {
    name: "Benefits",
    path: "#benefits",
  },
  {
    name: "Platform",
    path: "#platform",
  },
  {
    name: "Impact",
    path: "#impact",
  },
  {
    name: "Job Roles",
    path: "#jobRoles",
  },
  {
    name: "FAQs",
    path: "#faqs",
  },
];

const otherNavLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Contact us",
    path: "/contact-us",
  },
  {
    name: "Blogs",
    path: "/blogs",
  },
];

const hireSmarterData = [
  {
    title: "Boost Job Fit",
    image: ai_evaluation,
    paragraph:
      "Identify candidates who perfectly align with your job requirements and company culture. Xeurix job simulations let you evaluate candidates' true abilities in real-time scenarios. Our detailed job fit scores offer insights into candidates' personality, soft skills, reasoning, and job-related skills. This ensures a strong match for long-term success, reduced turnover, and enhanced team productivity.",
    alt: "Candidate detail assessment with precise job fit score, evaluated on personality, soft skills, reasoning, and job-specific skills.",
  },
  {
    title: "Faster Hiring",
    image: faster_hiring,
    paragraph:
      "Accelerate your hiring process with Xeurix. Our job simulations provide instant, detailed assessments of candidates' skills and fit, reducing the time spent on lengthy interview rounds. By identifying top talent quickly and efficiently, Xeurix helps you fill positions faster, keeping your business agile and competitive.",
    alt: "Hiring funnel for streamlined process and faster informed hiring decisions with job fit rankings.",
  },
  {
    title: "Eliminate Bias",
    image: eliminate_bias,
    paragraph:
      "Ensure fair hiring decisions by relying on measurable performance metrics instead of subjective judgment. Xeurix's objective evaluations assess candidates' true abilities and potential in realistic scenarios. This approach promotes diversity and inclusion, enabling you to select the best fit for your team based on evidence, not biases.",
    alt: "Fair hiring decisions based on objective data to eliminate bias and subjectivity from recruiting.",
  },
];

const PlatformData = [
  {
    heading: "Tailored Simulations",
    paragraph:
      "We meticulously analyze your job description and work culture to identify the skills most predictive of job success. We then match these requirements with our library of job scenarios to create a simulation that predicts job performance and cultural fit.",
    image: Tailored_Simulations,
    alt: "hyper-customized tailored job simulation using job description, company culture, and industry data.",
  },
  {
    heading: "Custom AI Characters",
    paragraph:
      "Each job scenario features custom-trained AI characters that emulate real-life colleagues and workplace challenges. These characters interact with candidates in real-time, providing a realistic and immersive evaluation experience.",
    image: ai_characters,
    alt: "Custom trained AI characters to simulation real-life work characters for a realistic job simulation.",
  },
  {
    heading: "In-Depth Evaluations",
    paragraph:
      "Our AI analyzes thousands of data points to provide detailed insights into candidates' strengths and weaknesses. We generate tailored interview questions based on their performance, ensuring informed hiring decisions based on measurable metrics.",
    image: boostJobFit,
    alt: "In-depth candidate performance analytics and hiring metrics based on objective simulation data.",
  },
];

const jobRoles = [
  {
    image: support_staff,
    alt: "Support Staff",
    heading: "Support Staff",
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
    heading: "Executives",
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
    heading: "Sales Reps",
    text: "Evaluate persuasive communication and sales strategy execution.",
  },
  {
    image: medical_staff,
    alt: "Medical Staff",
    heading: "Medical Staff",
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
    heading: "Project Managers",
    text: "Evaluate project planning, teamwork, and leadership skills.",
  },
];

const partners = [
  {
    image: breezy,
    alt: "Breezy Applicant Tracking System",
  },
  {
    image: teamTailor,
    alt: "Teamtailor Applicant Tracking System",
  },
  {
    image: greenHouse,
    alt: "Greenhouse applicant tracking system",
  },
  {
    image: lever,
    alt: "Lever Applicant Tracking System",
  },
  {
    image: workable,
    alt: "Workable Applicant Tracking System",
  },
  {
    image: icims,
    alt: "icims Applicant Tracking System",
  },

  {
    image: jazzhr,
    alt: "JazzHR Applicant Tracking System",
  },
  {
    image: applicantStack,
    alt: "ApplicantStack Applicant Tracking System",
  },
];

const faqItems = [
  {
    question: "What is Xeurix?",
    answer:
      "Xeurix is an advanced hiring platform that uses AI-powered 3D job simulations to evaluate candidates based on real-world scenarios, ensuring the best job and cultural fit.",
  },
  {
    question: "How does Xeurix improve the hiring process?",
    answer:
      "Xeurix enhances hiring by providing objective, data-driven insights into candidates' skills and fit. Our simulations replicate real job tasks, allowing you to assess true performance rather than relying on resumes or interviews alone.",
  },
  {
    question: " Can Xeurix be customized for any job role?",
    answer:
      "Yes, Xeurix offers hyper-customized simulations tailored to your specific job roles and organizational culture. Our AI matches your job requirements with relevant scenarios to create an accurate assessment.",
  },
  {
    question: "How does Xeurix ensure fairness in hiring?",
    answer:
      "Xeurix eliminates bias by focusing on measurable performance metrics instead of subjective judgment. Each candidate is evaluated equally based on how they perform in realistic job scenarios.",
  },
  {
    question: "How long does it take to implement Xeurix?",
    answer:
      "Xeurix is quick to set up and can be integrated into your hiring process in just a few days. We offer support throughout the implementation to ensure a smooth transition.",
  },
  {
    question: "What kind of support do you offer after implementation?",
    answer:
      "We provide ongoing support, including updates, training, and customization services to ensure Xeurix continues to meet your evolving hiring needs.",
  },
];

const platformItems = [
  {
    name: "Login",
    path: "https://app.xeurix.com/",
  },
  {
    name: "SignUp",
    path: "https://app.xeurix.com/register",
  },
  ...homeNavLinks,
];

const legalItems = [
  {
    name: "Terms of use",
    path: "/termsofuse",
  },
  {
    name: "Privacy policy",
    path: "/privacypolicy",
  },
  {
    name: "Cookies policy",
    path: "/cookiespolicy",
  },
];

const impactData = [
  {
    title: "Manual Evaluation",
    content:
      "Manual evaluation rely on human intuition and manual processes to evaluate candidates. This method involves reviewing resumes, conducting interviews, and making subjective decisions.",
    numbers: [0, 0, 0],
    subHeading: [
      {
        title: "Time Saved",
        text: "Limited time savings due to extensive manual processes and no automation .",
      },
      {
        title: "Employee Retention",
        text: "Lower retention rates due to potential biases and less accurate job fit assessments",
      },
      {
        title: "Employee Productivity",
        text: "Productivity may suffer due to less precise candidate-job matches.",
      },
    ],
    active: true,
  },
  {
    title: "Resume Matching",
    content:
      "Resume screening involves filtering candidates based on their resumes. It uses keyword matching and basic criteria to shortlist applicants but may miss key skills and potential.",
    numbers: [25, 10, 10],
    active: true,
    subHeading: [
      {
        title: "Time Saved",
        text: "Moderate time savings through automated resume filtering based on job keywords.",
      },
      {
        title: "Employee Retention",
        text: "Retention rates  may not accurately reflect candidate suitability beyond keywords.",
      },
      {
        title: "Employee Productivity",
        text:
          "Productivity can be impacted by overlooking soft skills and" +
          "  " +
          "real-world capabilities",
      },
    ],
  },
  {
    title: "Assessment Tools",
    content:
      "Other assessments include psychometric tests, aptitude tests, and standardized assessments. These tools offer additional insights but may not fully capture practical job performance.",
    numbers: [30, 15, 15],
    active: true,
    subHeading: [
      {
        title: "Time Saved",
        text: "Moderate time savings with structured assessment tools and reports.",
      },
      {
        title: "Employee Retention",
        text: "Improved retention rates compared to manual assessments but still limited.",
      },
      {
        title: "Employee Productivity",
        text: "Productivity gains are moderate, depending on the alignment of test results with job demands",
      },
    ],
  },
  {
    title: "Xeurix Platform",
    content:
      "The pinnacle of hiring technology, using AI-driven simulations that place candidates in realistic job scenarios, providing objective and detailed performance evaluations, customizable by employers.",
    numbers: [50, 30, 30],
    active: true,
    subHeading: [
      {
        title: "Time Saved",
        text: "Up to 50% time saved through efficient and accurate assessments.",
      },
      {
        title: "Employee Retention",
        text: "Up to 30% improvement in employee retention by ensuring precise job fit.",
      },
      {
        title: "Employee Productivity",
        text: "Up to 30% boost in productivity with candidates accurately assessed for their roles.",
      },
    ],
  },
];

export {
  homeNavLinks,
  otherNavLinks,
  PlatformData,
  hireSmarterData,
  jobRoles,
  partners,
  faqItems,
  platformItems,
  legalItems,
  impactData,
};
