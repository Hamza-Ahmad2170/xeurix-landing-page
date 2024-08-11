import MaxScreen from "@/components/MaxScreen";

export default function Page() {
  return (
    <div className="bg-white bg-[url('/images/gameBackground.png')] bg-cover bg-top bg-no-repeat">
      <MaxScreen className="min-h-[calc(100dvh-66px)]">
        <div className="w-full max-w-[500px] rounded-md bg-white p-12 text-sm">
          <h1 className="mb-6 text-[1.75rem] font-semibold">Request demo</h1>
          <form className="space-y-8">
            <div>
              <label
                htmlFor="first_name"
                className="block pb-2 before:mr-1 before:text-[#d4145a] before:content-['*']"
              >
                First Name
              </label>
              <input
                type="text"
                placeholder="Please enter your First Name"
                name="first_name"
                id="first_name"
                className="block w-full rounded-md border border-[#d9d9d9] px-3 py-1"
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block pb-2 before:mr-1 before:text-[#d4145a] before:content-['*']"
              >
                Last Name
              </label>
              <input
                type="text"
                placeholder="Please enter your First Name"
                name="last_name"
                id="last_name"
                className="block w-full rounded-md border border-[#d9d9d9] px-3 py-1"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block pb-2 before:mr-1 before:text-[#d4145a] before:content-['*']"
              >
                Work Email
              </label>
              <input
                type="email"
                placeholder="Please enter your First Name"
                name="email"
                id="email"
                className="block w-full rounded-md border border-[#d9d9d9] px-3 py-1"
              />
            </div>
            <button className="w-full rounded-full bg-[#d4145a] px-3 py-[6px] text-white transition-all hover:bg-[#96063a]">
              Request
            </button>
          </form>
        </div>
      </MaxScreen>
    </div>
  );
}
