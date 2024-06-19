"use client";

import submit from "@/utils/submit";
import { useState } from "react";
import PartyPopper from "./PartyPopper";
import { toast } from "react-toastify";
import { Zoom } from "react-toastify";

function FooterInput() {
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const { loading, handleSubmit, error } = submit();

  const handleNewsLetter = async (event: React.FormEvent) => {
    event.preventDefault();
    await handleSubmit("http://localhost:8000/api/email", {
      email,
    });
    if (!error) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 5000);
      toast.success("success", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Zoom,
        style: {
          width: "max-content",
          margin: "0 auto",
          minHeight: "max-content",
          fontSize: "1.1rem",
          padding: "0 .5rem",
        },
      });
    }
  };

  return (
    <>
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
      <PartyPopper footer={true} show={show} />
    </>
  );
}

export default FooterInput;
