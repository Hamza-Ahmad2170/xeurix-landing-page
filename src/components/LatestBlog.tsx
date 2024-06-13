"use client";
import { useState } from "react";
import BlogCard from "./BlogCard";
import BlogSearchBar from "./BlogSearchBar";
import blogCards from "@/json/blogs";

function LatestBlog() {
  const [searchTerm, setSearchTerm] = useState("");

  const searchData = blogCards.filter((cardData) =>
    cardData.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container">
      <div className="m-auto py-12">
        <BlogSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h2 className="my-12 text-[1.75rem]">Latest Blog</h2>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10">
          {searchData.map((card) => (
            <BlogCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestBlog;
