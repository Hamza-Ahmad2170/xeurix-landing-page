import JobFit from "@/components/JobFit";

import Seeing from "@/components/Seeing";
import HireSmarter from "@/components/HireSmarter";

import Platform from "@/components/Platform";
import Impact from "@/components/Impact";
import Collaborate from "@/components/Collaborate";
import JobRoles from "@/components/JobRoles";
import Partners from "@/components/Partners";
import Footer from "@/components/footer/Footer";
import FAQ from "@/components/faq/FAQ";
import Glob from "@/components/Glob";

export default function Home() {
  return (
    <main className="font-arial">
      <JobFit />
      <Seeing />
      <Glob />
      <HireSmarter />
      <Platform />
      <Impact />
      <Collaborate />
      <JobRoles />
      <Partners />
      <FAQ />
      <Footer />
    </main>
  );
}
