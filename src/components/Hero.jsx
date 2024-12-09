import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <motion.section
        className="hero"
        id="home"
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2, type: "ease-in" }}
      >
        <div className="hero-text">
          <h1>
            Meet, <span>Eat &</span>
            <br />
            Enjoy The True <br />
            Taste
          </h1>

          <a href="#" className="btn">
            Explore Menu<i className="bx bxs-right-arrow"></i>
          </a>
          <a href="#" className="btn-order">
            Order Now
          </a>
        </div>

        <div className="hero-image">
          <img src="img/hero.png" />
        </div>
      </motion.section>

        {/* <!--container--> */}
        <motion.section
        className="container"
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2, type: "ease-in" }}
      >
        <div className="container-box">
          <img src="img/c1.png" />
          <h3>11:00 am - 8:00 pm</h3>
          <a href="#">Working Hours</a>
        </div>

        <div className="container-box">
          <img src="img/c2.png" />
          <h3>Honey Springs 708</h3>
          <a href="#">Get Direction</a>
        </div>

        <div className="container-box">
          <img src="img/c3.png" />
          <h3>(555) 111-345345</h3>
          <a href="#">Call Us Now</a>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
