import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import FooterInput from "./FooterInput";
import PartyPopper from "../PartyPopper";
import { legalItems, platformItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-footer bg-[url('/images/parallax.webp')]">
      <div className="container py-28">
        <div className="flex flex-wrap justify-between gap-y-10">
          <div className="w-full max-w-md">
            <h5 className="mb-4 font-bold text-white">Stay tuned</h5>
            <FooterInput />
          </div>
          <div className="w-full max-w-40">
            <h5 className="mb-4 text-[1.25rem] font-bold text-white">
              Platform
            </h5>
            <ul className="space-y-2 uppercase">
              {platformItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-xs font-medium text-[#a3b0bd]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full max-w-40">
            <h5 className="mb-4 space-y-2 text-[1.25rem] font-bold text-white">
              Resources
            </h5>
            <ul className="uppercase">
              <li>
                <Link
                  href="/blog"
                  className="text-xs font-medium text-[#a3b0bd]"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full max-w-40">
            <h5 className="mb-4 text-[1.25rem] font-bold text-white">Legal</h5>
            <ul className="space-y-2 uppercase">
              {legalItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-xs font-medium text-[#a3b0bd]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#323c46] py-6">
        <div className="container text-[#a3b0bd]">
          <div className="items-center justify-between text-sm md:flex">
            <p className="text-center">Copyright Xeurix Inc © 2024</p>
            <p className="text-center">
              1449 S Michigan Ave, Suite 556, Chicago, IL 60605
            </p>
            <div className="flex justify-center gap-4 pt-4 md:pt-0">
              <FaLinkedin color="white" />
              <FaTwitter color="white" />
              <FaFacebookF color="white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
