"use client";
import { cn } from "@/lib/utils";
import aos from "aos";
import { useEffect } from "react";

type props = {
  children: React.ReactNode;
  className?: string;
};

export default function FadeUp({ children, className }: props) {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <div data-aos="fade-up" className={cn("", className)}>
      {children}
    </div>
  );
}
