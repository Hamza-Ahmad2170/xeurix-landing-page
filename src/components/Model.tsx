"use client";

import React, { useState } from "react";

export default function Model({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [showModel, setShowModel] = useState(false);

  const handleModel = () => {
    setShowModel((prev) => !prev);
  };

  return (
    <>
      <div onClick={handleModel} className={className}>
        {children}
      </div>
      <div
        className={`fixed inset-0 z-20 flex items-center justify-center transition-colors ${
          showModel ? "visible bg-black/20" : "invisible"
        }`}
        onClick={handleModel}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`flex h-80 w-full max-w-[30rem] items-baseline justify-between rounded-xl bg-white p-4 shadow transition-all ${showModel ? "scale-100 opacity-100" : "scale-125 opacity-0"} `}
        >
          <p>model</p>
          <button className="font-black" onClick={handleModel}>
            X
          </button>
        </div>
      </div>
    </>
  );
}
