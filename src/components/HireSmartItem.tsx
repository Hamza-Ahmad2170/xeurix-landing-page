import Image from "next/image";
import React from "react";

type HireSmarterItmProps = {
  hireSmarter: {
    name: string;
    description: string;
    svg: string;
    active: boolean;
  };
  onClick: (name: string) => void;
};

export default function HireSmartItem({
  hireSmarter,
  onClick,
}: HireSmarterItmProps) {
  const { name, description, svg, active } = hireSmarter;

  return (
    <div
      className={`flex cursor-pointer items-center gap-3 py-4 ${active ? "bg-red-500" : ""}`}
      onClick={() => onClick(name)}
    >
      <Image
        src={svg}
        alt={name}
        width={70}
        height={70}
        className="h-[60px] w-[60px]"
      />
      <div className="text-left">
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}
