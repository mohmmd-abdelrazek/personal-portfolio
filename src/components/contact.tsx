import React from "react";
import SectionHeading from "./section-heading";
import { BsTelephone, BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact" className="sm:max-w-[45rem] lg:max-w-[55rem]">
      <SectionHeading>contact</SectionHeading>
      <p className="sm:max-w-[30rem] lg:max-w-[40rem] mb-8 text-xl text-center">
        I'm currently open to freelance and actively looking for full-time job
        opportunties, so if you like what you've seen please don't hesitate to
        get in touch! Call me or text me on whatsapp if you have any questions, my
        inbox is always open and I'll endeavour to get back to you as soon as I
        can.
      </p>
      <div className="flex justify-center gap-6">
      <a
          href="tel:+201060150685"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Call Me{" "}
          <BsTelephone className="opacity-70 group-hover:translate-x-1 transition" />
        </a>

        <a
          href="https://wa.me/201060150685?text=Hi%20Mohamed,%20I'm%20interested%20in%20your%20services!"
          target="_blank"
          className="group bg-green-500 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition"
        >
          Text Me {" "}
          <BsWhatsapp className="opacity-70 group-hover:translate-x-1 transition" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
