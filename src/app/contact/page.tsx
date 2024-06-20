const contactContent = [
  {
    placeHolder: "First Name",
    name: "first_name",
    type: "text",
  },
  {
    placeHolder: "Last Name",
    name: "last_name",
    type: "text",
  },
  {
    placeHolder: "Phone",
    name: "phone",
    type: "text",
  },
  {
    placeHolder: "Email",
    name: "email",
    type: "email",
  },
];

function ContactPage() {
  return (
    <div className="pb-40 pt-10">
      <div className="bg-[url('/img/parallax-4.webp')] bg-cover bg-center bg-no-repeat">
        <div className="container">
          <div className="relative mb-[60px] pt-14 text-center">
            <div className="absolute left-0 top-0 z-10 w-full text-[70px] font-semibold uppercase text-[#29abe2] opacity-[.1] sm:text-[100px]">
              Contact
            </div>
            <h1 className="pt-5 text-xl sm:text-[1.75rem]">
              Always ready to work
            </h1>
            <p className="pt-5 text-[#444]">Get in touch.</p>
          </div>
          <form className="mx-auto flex w-full max-w-[860px] flex-wrap justify-center gap-x-4 gap-y-8 text-sm">
            {contactContent.map((item) => (
              <div key={item.name} className="w-full md:w-[calc(100%/2-1rem)]">
                <input
                  type={item.type}
                  name={item.name}
                  placeholder={item.placeHolder}
                  className="w-full rounded-md border border-[#d9d9d9] bg-[#29abe214] px-3 py-[10px] placeholder:text-sm focus:border-[#1677ff] focus:bg-[#29abe2] focus:text-white focus:placeholder:text-white focus-visible:outline-none"
                />
              </div>
            ))}
            <textarea
              name="message"
              id="message"
              placeholder="message"
              rows={6}
              className="w-full resize-none rounded-md border border-[#d9d9d9] bg-[#29abe214] px-3 py-[10px] placeholder:text-sm focus:border-[#1677ff] focus:bg-[#29abe2] focus:text-white focus:placeholder:text-white focus-visible:outline-none"
            ></textarea>
            <div className="ml-auto">
              <button
                type="submit"
                className="w-full rounded-full bg-[#d4145a] px-6 py-3 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
