import Contact from "@/components/contact";
import Container from "@/components/Container";
import Footer from "@/components/footer/Footer";

export default function Page() {
  return (
    <>
      <div className="bg-white bg-[url('/images/pattern/contact.jpg')] bg-cover bg-top bg-no-repeat">
        <div className="flex min-h-[calc(100dvh-90px)] justify-center py-32">
          <div className="container space-y-20">
            <div className="relative text-center">
              <div className="absolute bottom-1/2 z-10 w-full text-center text-[100px] font-bold leading-6 text-[#29abe2] opacity-10">
                CONTACT
              </div>
              <h2 className="text-[1.75rem] font-semibold">Get in Touch</h2>
            </div>

            <div>
              <Contact />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
