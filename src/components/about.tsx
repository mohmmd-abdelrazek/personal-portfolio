"use client"
import { motion } from "framer-motion";
import AnimatdedCircles from "./animated-circles";
import SectionHeading from "./section-heading";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  return (
    <motion.section
      id="about"
      className="sm:max-w-[45rem] lg:max-w-[100rem] scroll-mt-28"
      initial={{opacity:0, y:100}}
      animate={{opacity:1, y:0}}
      transition={{delay: 0.175}}
      ref={ref}
    >
      <div className="flex justify-between items-start gap-4 sm:gap-20">
        <div className="text-center flex-1">
          <SectionHeading>about me</SectionHeading>
          <p className="text-xl">
            After graduating with a degree in Engineering, I decided to pursue
            my passion for programming. I enrolled in a coding bootcamp and
            learned full-stack web development My favorite part of programming
            is the problem-solving aspect. I love the feeling of finally
            figuring out a solution to a problem. My core stack is React,
            Next.js, Node.js, and MongoDB . I am also familiar with TypeScript
            and Postgres. I am always looking to learn new technologies. I am
            currently looking for a freelance or a full-time position as a
            full-stack developer.
          </p>
        </div>
        <AnimatdedCircles />
      </div>
    </motion.section>
  );
}
