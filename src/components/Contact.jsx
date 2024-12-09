import React from 'react'
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
        <motion.section
        className="contact"
        id="contact"
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2, type: "ease-in" }}
      >
        <div className="contact-content">
          <div className="contact-img">
            <div className="c-one">
              <img src="img/f1.png" />
            </div>
            <div className="c-one">
              <img src="img/f2.png" />
            </div>
          </div>

          <div className="contact-text">
            <h2>Contact Us</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              excepturi iusto voluptatibus iure est ex quasi! Tempora
              consequuntur deleniti, delectus doloremque porro numquam, corporis
              quo sit repellat, quis perspiciatis rerum!
            </p>
            <div className="social">
              <a href="#" className="clr">
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a href="#">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="#">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="#">
                <i className="bx bxl-github"></i>
              </a>
              <a href="#">
                <i className="bx bxl-google"></i>
              </a>
            </div>
          </div>

          <div className="details">
            <div className="main-d">
              <a href="#">
                <i className="bx bxs-location-plus"></i>Main street 70,NY
              </a>
            </div>

            <div className="main-d">
              <a href="#">
                <i className="bx bxs-mobile-alt"></i>01023453453
              </a>
            </div>

            <div className="main-d">
              <a href="#">
                <i className="bx bxs-youtube"></i>CodeWithHaadi
              </a>
            </div>

            <div className="main-d">
              <a href="#">
                <i className="bx bxs-bell"></i>Subscribe
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Contact
