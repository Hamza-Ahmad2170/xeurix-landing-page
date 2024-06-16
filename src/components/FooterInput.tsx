"use client";

import useSubmit from "@/utils/useSubmit";
import { useState } from "react";

function FooterInput() {
  const [email, setEmail] = useState("");
  const { loading, handleSubmit } = useSubmit();

  const handleNewsLetter = async (event: React.FormEvent) => {
    event.preventDefault();
    await handleSubmit("https://app.xeurix.com/api", {
      email,
    });
  };

  return (
    <form className="relative pr-11" onSubmit={handleNewsLetter}>
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        id="email"
        className="block w-full rounded-md border-0 bg-[rgba(41,171,226,.5)] px-4 py-3 text-sm placeholder:font-extralight placeholder:text-black focus:border-transparent focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[rgba(41,171,226,.25)]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-0 top-[6px] z-20 rounded-[3px] bg-[#d4145a] px-5 py-1 text-white"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Subscribe"}
      </button>
      <p className="list text-white">
        <small>* We promise not spam you</small>
      </p>
    </form>
  );
}

export default FooterInput;
