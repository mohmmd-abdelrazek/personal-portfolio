"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsLinkedin, BsTelephone, BsWhatsapp } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <section
      id="home"
      className="text-center sm:max-w-[45rem] lg:max-w-[50rem]"
    >
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
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
        <motion.div
          className="flex flex-col gap-2 px-4 text-xl !leading-[1.5] sm:text-2xl font-semibold"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-lg sm:text-xl text-gray-800">
            As-salamu alaykum, I'm
          </p>
          <p className="text-lg sm:text-xl text-gray-800">Mohmd Abdlrazq</p>
        </motion.div>
      </div>
      <motion.div
        className="mb-10 mt-4 px-4 text-xl !leading-[1.7] sm:text-2xl font-semibold"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-xl sm:text-2xl font-bold mb-12 text-gray-950">
          Full-Stack Web Developer Specialized in Next.js & Express.js
        </h1>
        <h2 className="text-lg sm:text-xl text-gray-800 hidden md:block">
          A full-stack developer passionate about creating inclusive web
          experiences, specialized in MERN stack.
        </h2>
      </motion.div>
      <motion.div
        className="flex justify-center md:justify-between items-center gap-8 md:gap-4 px-2 text-base md:text-lg font-extrabold"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.1,
        }}
      >
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col">
          <a
            href="tel:+201060150685"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          >
            <span className="hidden sm:inline">Call Me{" "}</span>
            <BsTelephone size={18} className="group-hover:translate-x-1 transition" />
          </a>
          </div>

          <a
            href="https://wa.me/201060150685?text=Hi%20Mohamed,%20I'm%20interested%20in%20your%20services!"
            target="_blank"
            className="group bg-green-500 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
          >
            <span className="hidden sm:inline">Text Me{" "}</span>
            <BsWhatsapp size={18} className="group-hover:translate-x-1 transition" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href="/Mohmd Abdlrazq Resume.pdf"
            download
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
          >
            Download CV{" "}
            <HiDownload className="group-hover:translate-y-1 transition opacity-60" />
          </a>

          <div className="flex gap-2">
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
          </div>
        </div>
      </motion.div>
        <p className="hidden md:block text-left font-bold pl-2 pt-4 text-lg">tel: 01060150685</p>
    </section>
  );
};

export default Intro;
