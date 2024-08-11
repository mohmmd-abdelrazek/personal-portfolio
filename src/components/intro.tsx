"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section id="home" className="text-center sm:max-w-[45rem] lg:max-w-[50rem]">
      <div className="flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://res.cloudinary.com/dhliba9i5/image/upload/v1721834767/personal%20photos/image_3_hmibla.png"
              alt="Mohmmd Portrait"
              width={192}
              height={192}
              quality={95}
              priority
              className="h-24 w-24 rounded-full object-cover shadow-xl border-[0.35rem] border-white"
            />
          </motion.div>
          <motion.span
            className="text-2xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏻
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-xl !leading-[1.5] sm:text-2xl font-semibold"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
    <span className="text-lg sm:text-xl mb-2 text-gray-900">As-salamu alaykum, I'm {"  "}</span>
    <span className="mb-2 text-lg sm:text-xl font-bold text-purple-950">Mohmd Abdlrazq</span>
    <span className="block text-lg sm:text-xl mb-4 text-gray-700">Full-Stack Developer</span>
    <span className="block  text-lg sm:text-xl text-gray-800">
        A curiosity-driven full-stack developer passionate about creating user-centric, inclusive web experiences. Skilled in both front-end and back-end technologies, I strive to build efficient and engaging applications.
    </span>

      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-2 text-lg font-medium"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
        >
          Download CV{" "}
          <HiDownload className="group-hover:translate-y-1 transition opacity-60" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
