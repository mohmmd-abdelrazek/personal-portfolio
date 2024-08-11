"use client";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="h-16 w-1 bg-gray-200 my-8 sm:my-12"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.125,
      }}
    ></motion.div>
  );
}
