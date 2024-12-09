import React from 'react'
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
        <motion.section
        className="about"
        id="about"
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2, type: "ease-in" }}
      >
        <div className="about-img">
          <img src="img/about.png" />
        </div>

        <div className="about-text">
          <h2>
            Living well begins <br />
            with eating well.
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit quia
            distinctio molestias rem repellendus, rerum cupiditate officiis
            perferendis totam perspiciatis repudiandae saepe culpa commodi dolor
            quibusdam dicta facere tempore earum.
          </p>
          <a href="#" className="btn">
            Explore Story <i className="bx bxs-right-arrow"></i>
          </a>
        </div>
      </motion.section>

    </>
  )
}

export default AboutUs
