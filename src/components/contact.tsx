"use client";

import { apiUrl } from "@/lib/utils";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",

    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<false | string>(false);

  const handleNewsLetter = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setLoading(true);
      const api = await fetch(apiUrl + "submit/contact/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      if (!api.ok) throw new Error("Something went wrong");
      await api.json();
      // setEmail("");
    } catch (error) {
      if (error instanceof Error) setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="mx-auto w-full max-w-[850px]" onSubmit={handleNewsLetter}>
      <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2">
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="block w-full rounded-md border border-[#d9d9d9] bg-[#29abe214] px-3 py-2 focus:bg-[#29abe2] focus:text-white focus:ring-[#29abe2] focus:placeholder:text-white"
            name="firstName"
            id="firstName"
            onChange={(e) =>
              setFormData({
                ...formData,
                first_name: e.target.value,
              })
            }
            value={formData.first_name}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            id="lastName"
            className="block w-full rounded-md border border-[#d9d9d9] bg-[#29abe214] px-3 py-2 focus:bg-[#29abe2] focus:text-white focus:placeholder:text-white"
            onChange={(e) =>
              setFormData({
                ...formData,
                last_name: e.target.value,
              })
            }
            value={formData.last_name}
          />
        </div>
        {/* <div>
          <input
            type="text"
            value={formData.phone}
            placeholder="Phone"
            id="phone"
            name="phone"
            className="block w-full rounded-md border border-[#d9d9d9] bg-[#29abe214] px-3 py-2 focus:bg-[#29abe2] focus:text-white focus:placeholder:text-white"
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value,
              })
            }
          />
        </div> */}
        <div className="sm:col-span-2">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value,
              })
            }
            value={formData.email}
            className="block w-full rounded-md border border-[#d9d9d9] bg-[#29abe214] px-3 py-2 focus:bg-[#29abe2] focus:text-white focus:placeholder:text-white"
          />
        </div>
        <div className="sm:col-span-2">
          <textarea
            className="block w-full resize-none rounded-md border border-[#d9d9d9] bg-[#29abe214] px-3 py-2 focus:bg-[#29abe2] focus:placeholder:text-white"
            placeholder="Your Message"
            rows={5}
            name="message"
            id="message"
            onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value,
              })
            }
            value={formData.message}
          ></textarea>
        </div>
      </div>
      <div className="pt-10 text-center">
        <button
          className="rounded-full bg-[#d4145a] px-8 py-2 text-base font-bold text-white transition-all hover:bg-[#96063a]"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
