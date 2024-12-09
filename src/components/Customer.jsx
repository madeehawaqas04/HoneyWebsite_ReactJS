import React from 'react'
import { motion } from "framer-motion";

const Customer = () => {
  return (
    <>
        <motion.section
        className="review"
        id="review"
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2, type: "ease-in" }}
      >
        <div className="middle-text">
          <h4>Our Customer</h4>
          <h2>Clients Review About Our Food</h2>
        </div>
        <div className="review-content">
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              necessitatibus doloribus dicta.
            </p>
            <div className="in-box">
              <div className="bx-img">
                <img src="img/r1.jpg" />
              </div>
              <div className="bxx-text">
                <h4>John Karahan</h4>
                <h5>Food Vlogger</h5>
                <div className="rating">
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              necessitatibus doloribus dicta.
            </p>
            <div className="in-box">
              <div className="bx-img">
                <img src="img/r2.jpg" />
              </div>
              <div className="bxx-text">
                <h4>John Karahan</h4>
                <h5>Food Vlogger</h5>
                <div className="rating">
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              necessitatibus doloribus dicta.
            </p>
            <div className="in-box">
              <div className="bx-img">
                <img src="img/r3.jpg" />
              </div>
              <div className="bxx-text">
                <h4>John Karahan</h4>
                <h5>Food Vlogger</h5>
                <div className="rating">
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                  <a href="#">
                    <i className="bx bxs-star"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default Customer
