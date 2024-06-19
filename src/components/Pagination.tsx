"use client";

import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

function Pagination() {
  const [paginationNum, setPaginationNum] = useState(1);

  // const handlePagination = () => {
  //   if (paginationNum === 1) {
  //     setPaginationNum((index) => index + 1);
  //   }else if (paginationNum === 5) {
  // };

  return (
    <ul className="flex items-center justify-center gap-2 pt-10 text-sm">
      <li>
        <button
          disabled={paginationNum === 1}
          className={`${paginationNum === 1 ? "cursor-not-allowed disabled:text-[#00000040]" : ""} size-8 px-[6px] py-1 hover:bg-[#0000000f]`}
          onClick={() => setPaginationNum(paginationNum - 1)}
        >
          <FiChevronLeft />
        </button>
      </li>
      {Array.from({ length: 5 }, (_, index) => (
        <li
          key={index}
          className={`inline-block min-w-8 cursor-pointer rounded-md hover:bg-[#0000000f] ${index + 1 === paginationNum ? "border border-[#1677ff]" : ``} px-[6px] py-1 text-center`}
          onClick={() => setPaginationNum(index + 1)}
        >
          {index + 1}
        </li>
      ))}
      <li>
        <button
          disabled={paginationNum === 5}
          className={`${paginationNum === 5 ? "cursor-not-allowed disabled:text-[#00000040]" : ""} size-8 px-[6px] py-1 hover:bg-[#0000000f]`}
          onClick={() => setPaginationNum(paginationNum + 1)}
        >
          <FiChevronRight />
        </button>
      </li>
    </ul>
  );
}

export default Pagination;
