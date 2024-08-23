import Image from "next/image";
import Link from "next/link";
import cardImg from "../../../public/images/bigger-worlds.webp";

type BlogCardProps = {
  card: {
    id: number;
    title: string;
    author: string;
    slug: string;
    date: string;
    tags: string[];
    img: string;
  };
};

function BlogCard({ card }: BlogCardProps) {
  return (
    <div className="relative flex basis-96 flex-col rounded-3xl shadow-2xl xl:basis-80">
      <Image
        src={cardImg}
        alt={card.title}
        title={card.title}
        className="relative rounded-t-3xl shadow-2xl"
      />

      <div className="flex flex-grow flex-col justify-between px-4 py-8">
        <small className="text-[10px] text-[#29abe2]">{card.date}</small>
        <h3 className="mb-4 text-sm font-bold">{card.title}</h3>
        <h4 className="text-sm text-[gray]">{card.author}</h4>

        <Link
          href={"/blogs/" + card.slug}
          className="mt-4 inline-block w-max basis-4 rounded-full bg-[#fff] px-4 py-2 text-sm text-[#29abe2] shadow-lg"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
