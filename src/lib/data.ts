import Tailored_Simulations from "../../public/images/platform/Tailored_Simulations.png";
import ai_characters from "../../public/images/platform//ai_characters.png";
import ai_evaluation from "../../public/images/platform//ai_evaluation.png";
import boostJobFit from "../../public/images/hire smarter/boost_jobfit.png";
import eliminate_bias from "../../public/images/hire smarter/eliminate_bias.png";
import faster_hiring from "../../public/images/hire smarter/faster_hiring.png";
import support_staff from "../../public/svg/jobRoles/supportstaff.svg";
import analyst from "../../public/svg/jobRoles/analyst.svg";
import executives from "../../public/svg/jobRoles/executives.svg";
import admin_staff from "../../public/svg/jobRoles/adminstaff.svg";
import accountant from "../../public/svg/jobRoles/accountant.svg";
import sales_reps from "../../public/svg/jobRoles/sales_reps.svg";
import medical_staff from "../../public/svg/jobRoles/medicalstaff.svg";
import programmer from "../../public/svg/jobRoles/programmer.svg";
import manager from "../../public/svg/jobRoles/projectmanager.svg";
import partner1 from "../../public/images/partners/partner1_.jpeg";
import xeurix from "../../public/images/partners/xeurix website pics icons.png";
import icims from "../../public/images/partners/icims.png";
import jazzhr from "../../public/images/partners/jazzhr.png";
import greenHouse from "../../public/images/partners/greenhouse.png";
import lever from "../../public/images/partners/lever_logo.png";
import breezy from "../../public/images/partners/BreezyHR3.png";
import taleo from "../../public/images/partners/taleo.png";

const homeNavLinks = [
  {
    name: "Product",
    path: "#product",
  },
  {
    name: "Assessment",
    path: "#assessment",
  },
  {
    name: "By Industry",
    path: "#byIndustry",
  },
  {
    name: "Job Roles",
    path: "#jobRoles",
  },
  {
    name: "Resources",
    path: "#resources",
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

const PlatformData = [
  {
    heading: "Tailored Simulations",
    paragraph:
      "We meticulously analyze your job description and organizational culture to identify the skills most predictive of job success. Our AI then matches these requirements with our extensive library of job scenarios to create a realistic simulation that accurately predicts job performance and cultural fit.",
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
    image: ai_evaluation,
    alt: "In-depth candidate performance analytics and hiring metrics based on objective simulation data.",
  },
];

const hireSmarterData = [
  {
    title: "Boost Job Fit",
    image: boostJobFit,
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
    image: xeurix,
    alt: "as",
  },
  {
    image: icims,
    alt: "asd",
  },
  {
    image: jazzhr,
    alt: "sd",
  },
  {
    image: greenHouse,
    alt: "da",
  },
  {
    image: lever,
    alt: "Lever",
  },
  {
    image: breezy,
    alt: "Breezy",
  },
  {
    image: taleo,
    alt: "Taleo",
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
    path: "/login",
  },
  {
    name: "SignUp",
    path: "/signup",
  },
  {
    name: "Features",
    path: "/features",
  },
  {
    name: "Benefits",
    path: "/benefits",
  },
  {
    name: "Use Cases",
    path: "/use-cases",
  },
  {
    name: "FAQ",
    path: "/faq",
  },
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
};
