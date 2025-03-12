import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Blog = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Blog</p>
        <h2 className={styles.heroHeadText}>Bee Bong Benh</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My blog aims to share knowledge about Data Science, Software, and
        Education. I hope to provide valuable insights and resources to help you
        navigate the world of technology and innovation. Visit my blog to
        explore a wide range of topics, including data analysis, machine
        learning, and software development.
      </motion.p>
      <motion.div
        variants={fadeIn("right", "", 0.5, 1)}
        className="xs:bottom-10 bottom-32 w-full flex justify-center items-center py-8"
      >
        <img src="/src/assets/blog.png" alt="Blog" />
      </motion.div>
      <motion.div
        variants={fadeIn("right", "", 0.5, 1)}
        className="xs:bottom-10 bottom-32 w-full flex justify-center items-center"
      >
        <a href="https://www.beebongbenh.com/" target="_blank">
          <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <motion.div className="hover:opacity-70 duration-300 bg-tertiary rounded-[20px] py-5 px-12 min-h-[60px] flex justify-evenly items-center flex-col">
              Go to My Blog
            </motion.div>
          </div>
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Blog, "blog");
