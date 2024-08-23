"use client";
import { cn } from "@/lib/utils";
import aos from "aos";
import React, { useEffect } from "react";

type props = {
  children: React.ReactNode;
  className?: string;
  element?: keyof React.ReactHTML;
};

export default function FadeUp({
  children,
  className,
  element = "div",
}: props) {
  useEffect(() => {
    aos.init();
  }, []);

  const Element = element;

  return (
    <Element data-aos="fade-up" className={cn("", className)}>
      {children}
    </Element>
  );
}
