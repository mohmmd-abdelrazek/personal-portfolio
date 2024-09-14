"use client";

import { projectsData } from "@/lib/data";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

export type projectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: projectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
      ref={ref}
      className="mb-3 sm:mb-8 last:mb-0 group"
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <section className="flex flex-col gap-2 pt-12 pb-4 px-2 md:flex-row relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden md:pr-8 sm:h-[32rem] md:h-[24] h-[38rem] group-even:md:pl-8 hover:bg-gray-200 transition">
              <Image
                className="group-even:-left-40 group-even:right-[initial] md:absolute bottom-0 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-1 group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2 group-hover:scale-[1.04] transition h-[28rem]"
                src={imageUrl}
                alt="Projects I worked on"
              />
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 md:max-w-[50%] h-full flex flex-col group-even:md:ml-[18rem]">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
            <ul className="flex gap-2 flex-wrap mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/70 px-3 py-1 tracking-wider uppercase text-[0.7rem] text-white rounded-full"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <FiExternalLink size={40} color="indigo" className="absolute right-0 top-0 pt-2 pr-2" />
        </section>
      </a>
    </motion.div>
  );
}
