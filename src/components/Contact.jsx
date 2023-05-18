import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { fb, insta, tele, linkedin } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ceaccpn",
        "template_yk4au9h",
        {
          from_name: form.name,
          to_name: "Bee Nguyen",
          from_email: form.email,
          to_email: "nguyenthang187txnm@gmail.com",
          message: form.message,
        },
        "3kzo5JUmZPSqqbf2m"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Somethung went wrong!");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Walter Bishop"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="walter@email.com"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            ></input>
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Text your message ... "
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {" "}
            {loading ? "Sending" : "Send"}{" "}
          </button>
          <div className="flex justify-center">
            <p className={styles.heroSubText}>OR</p>
          </div>
          <div className="flex flex-row flex-wrap justify-center gap-6">
            <div
              onClick={() =>
                window.open("https://www.facebook.com/bee.cute187", "_blank")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={fb} alt="fb" className=" object-contain"></img>
            </div>
            <div
              onClick={() =>
                window.open("https://www.instagram.com/bee.nht/", "_blank")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={insta}
                alt="instagram"
                className="w-1/2 h-1/2 object-contain"
              ></img>
            </div>
            <div
              onClick={() => window.open("https://t.me/beetldg", "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img src={tele} alt="telegram" className=" object-contain"></img>
            </div>
            <div
              onClick={() =>
                window.open("https://www.linkedin.com/in/beenguyen1/", "_blank")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="w-1/2 h-1/2 object-contain"
              ></img>
            </div>
          </div>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas></EarthCanvas>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
