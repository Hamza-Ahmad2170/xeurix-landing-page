"use client";

import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

function Pagination() {
  const [paginationNum, setPaginationNum] = useState(1);

  return (
    <ul className="flex items-center justify-center pt-10 text-sm">
      <li className="cursor-pointer">
        <FiChevronLeft />
      </li>
      {Array.from({ length: 5 }, (_, index) => (
        <li
          key={index}
          className="inline-block min-w-8 cursor-pointer px-[6px]"
        >
          {index}
        </li>
      ))}
      <li className="cursor-pointer">
        <FiChevronRight />
      </li>
    </ul>
  );
}

export default Pagination;
