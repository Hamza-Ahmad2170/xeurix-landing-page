"use client";

// import { handleWorkEmail } from "@/lib/actions";
// import { useActionState } from "react";

export default function WorkEmail() {
  // const [error, formAction] = useActionState(handleWorkEmail, { message: "" });

  return (
    <form className="relative z-10 w-full max-w-[34rem]">
      <input
        type="text"
        placeholder="Simply enter your work email"
        className="w-full rounded-lg border border-black py-3 pl-2 italic sm:placeholder:pl-3"
        name="workEmail"
        id="workEmail"
      />
      <button className="absolute -right-14 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4145a] px-6 py-2 font-extrabold text-white">
        Try for Free
      </button>
    </form>
  );
}
