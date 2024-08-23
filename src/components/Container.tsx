import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div
      className={cn(
        "xl: mx-auto max-w-lg px-4 md:max-w-4xl lg:max-w-5xl 2xl:max-w-7xl",

        className,
      )}
    >
      {children}
    </div>
  );
}
