import Collaborate from "@/components/Collaborate";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HireSmarter from "@/components/HireSmarter";
import Impact from "@/components/Impact";
import JobFit from "@/components/JobFit";
import JobRoles from "@/components/JobRoles";
import NavBar from "@/components/Navbar";
import Partners from "@/components/Partners";
import Seeing from "@/components/Seeing";
import Simulations from "@/components/Simulations";

export default function Home() {
  return (
    <>
      <NavBar />
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
        <Footer />
      </main>
    </>
  );
}
