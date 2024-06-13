import Collaborate from "@/components/Collaborate";
import FAQ from "@/components/FAQ";
import HireSmarter from "@/components/HireSmarter";
import Impact from "@/components/Impact";
import JobFit from "@/components/JobFit";
import JobRoles from "@/components/JobRoles";
import Partners from "@/components/Partners";
import Seeing from "@/components/Seeing";
import Simulations from "@/components/Simulations";

export default function Home() {
  return (
    <>
      <main>
        <JobFit />
        <Seeing />
        <HireSmarter />
        <Simulations />
        <Impact />
        <Collaborate />
        <JobRoles />
        <Partners />
        <FAQ />
      </main>
    </>
  );
}
