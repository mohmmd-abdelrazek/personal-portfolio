"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import { once } from "events";
import SectionHeading from "./section-heading";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <section className="">
        <SectionHeading>Skills</SectionHeading>
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6"
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center text-center"
            initial={{opacity: 0, y: 100}}
            whileInView={{opacity: 1, y: 0}}
            transition={{delay: 0.1 * index}}
            viewport={{once: true}}
          >
            <skill.icon className="text-2xl sm:text-3xl text-gray-700 mb-4" />
            <span className="text-lg font-medium text-gray-800">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
