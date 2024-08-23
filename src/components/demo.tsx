"use client";

import { apiUrl } from "@/lib/utils";
import { METHODS } from "http";
import { useState } from "react";

export default function Demo() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleDemo = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(apiUrl + "reply/io/addandpushtocampaign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
        }),
      });
      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
        
    }
  };

  return (
    <form className="space-y-8" onSubmit={handleDemo}>
      <div>
        <label
          htmlFor="first_name"
          className="block pb-2 font-bold before:mr-1 before:text-[#d4145a] before:content-['*']"
        >
          First Name
        </label>
        <input
          type="text"
          placeholder="Please enter your First Name"
          name="first_name"
          id="first_name"
          className="block w-full rounded-md border border-[#d9d9d9] px-3 py-2"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
      </div>
      <div>
        <label
          htmlFor="last_name"
          className="block pb-2 font-bold before:mr-1 before:text-[#d4145a] before:content-['*']"
        >
          Last Name
        </label>
        <input
          type="text"
          placeholder="Please enter your Last Name"
          name="last_name"
          id="last_name"
          className="block w-full rounded-md border border-[#d9d9d9] px-3 py-2"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block pb-2 font-bold before:mr-1 before:text-[#d4145a] before:content-['*']"
        >
          Work Email
        </label>
        <input
          type="email"
          placeholder="Please enter your Work Email"
          name="email"
          id="email"
          className="block w-full rounded-md border border-[#d9d9d9] px-3 py-2"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="pt-4 text-center">
        <button className="w-[250px] rounded-full bg-[#d4145a] px-5 py-2 text-base font-bold text-white transition-all hover:bg-[#96063a] sm:text-lg 2xl:text-2xl">
          Request
        </button>
      </div>
    </form>
  );
}
