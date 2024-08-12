import JobFit from "@/components/JobFit";
import Wave from "@/components/Wave";
import Seeing from "@/components/Seeing";
import HireSmarter from "@/components/HireSmarter";

import Platform from "@/components/Platform";
import Impact from "@/components/Impact";
import Collaborate from "@/components/Collaborate";
import JobRoles from "@/components/JobRoles";
import Partners from "@/components/Partners";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="font-arial">
      <JobFit />
      <Wave />
      <Seeing />
      <HireSmarter />
      <Platform />
      <Impact />
      <Collaborate />
      <JobRoles />
      <Partners />
      <Footer />
    </main>
  );
}
