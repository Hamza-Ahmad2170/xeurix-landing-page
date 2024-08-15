import Tailored_Simulations from "../../public/images/platform/Tailored_Simulations.png";
import ai_characters from "../../public/images/platform//ai_characters.png";
import ai_evaluation from "../../public/images/platform//ai_evaluation.png";

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
  },
  {
    heading: "Custom AI Characters",
    paragraph:
      "Each job scenario features custom-trained AI characters that emulate real-life colleagues and workplace challenges. These characters interact with candidates in real-time, providing a realistic and immersive evaluation experience.",
    image: ai_characters,
  },
  {
    heading: "In-Depth Evaluations",
    paragraph:
      "Our AI analyzes thousands of data points to provide detailed insights into candidates' strengths and weaknesses. We generate tailored interview questions based on their performance, ensuring informed hiring decisions based on measurable metrics.",
    image: ai_evaluation,
  },
];

export { homeNavLinks, otherNavLinks, PlatformData };
