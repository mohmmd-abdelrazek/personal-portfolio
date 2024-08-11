import React from "react";
import SectionHeading from "./section-heading";

const Contact = () => {
  return (
    <section id="contact" className="sm:max-w-[45rem] lg:max-w-[55rem]">
      <SectionHeading>contact</SectionHeading>
      <p className="sm:max-w-[30rem] lg:max-w-[40rem] text-xl text-center">
        I'm currently open to freelance and actively looking for full-time job
        opportunties, so if you like what you've seen please don't hesitate to
        get in touch! If you have any questions or would just like to say hi, my
        inbox is always open and I'll endeavour to get back to you as soon as I
        can.
      </p>
    </section>
  );
};

export default Contact;
