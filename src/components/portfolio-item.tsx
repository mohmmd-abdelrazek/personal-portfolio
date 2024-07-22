import Image from "next/image";
import { Project } from "@/types/project";
import Link from "next/link";

const PortfolioItem = ({ project }: { project: Project }) => {
  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden">
      <Link href={project.link} target="_blank" className="relative block w-full aspect-[2/1] cursor-pointer">
        <Image
          src={project.imgUrl}
          alt="img1"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
          priority
          className="rounded-md object-cover object-center"
        />
      </Link>
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-1 md:mb-3 font-semibold">
          {project.title}
        </h3>
        <p className="flex flex-wrap gap-2 items-center justify-start text-xs md:text-sm">
          {project.stack.map((item, index) => (
            <span
              key={index}
              className=" rounded-md px-2 py-1 font-semibold border-2 border-stone-900"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;
