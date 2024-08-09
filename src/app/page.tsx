import Collaborate from "@/components/Collaborate";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HireSmarter from "@/components/HireSmarter";
import Impact from "@/components/Impact";
import JobFit from "@/components/JobFit";
import JobRoles from "@/components/JobRoles";
import Partners from "@/components/Partners";
import Platform from "@/components/Platform";
import Seeing from "@/components/Seeing";

export default function HomePage() {
  return (
    <>
      <JobFit />
      <Seeing />
      <HireSmarter />
      <Platform />
      <Impact />
      <Collaborate />
      <JobRoles />
      <Partners />
      <FAQ />
      <Footer />
    </>
  );
}
