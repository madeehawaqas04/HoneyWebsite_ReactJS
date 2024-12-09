import React from 'react'
import { motion } from "framer-motion";

const Shop = () => {
  return (
    <>
       <motion.section
        className="shop"
        id="shop"
        initial={{ opacity: 0, translateY: -100 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 2, type: "ease-in" }}
      >
        <div className="middle-text">
          <h4>Our Shop</h4>
          <h2>Let's Check Popular Products</h2>
        </div>

        <div className="shop-content">
          <div className="row">
            <img src="img/p1.png" />
            <h3>Blueberry Honey</h3>
            <p>It is a long established fact that a reader</p>
            <div className="content-inner">
              <div className="price">
                <h6>$21.00</h6>
              </div>
              <div className="product-order">
                <a href="#">Order Now</a>
              </div>
            </div>
            <div className="top-icon">
              <a href="#">
                <i className="bx bx-heart"></i>
              </a>
            </div>
          </div>

          <div className="row">
            <img src="img/p2.png" />
            <h3>Blueberry Honey</h3>
            <p>It is a long established fact that a reader</p>
            <div className="content-inner">
              <div className="price">
                <h6>$21.00</h6>
              </div>
              <div className="product-order">
                <a href="#">Order Now</a>
              </div>
            </div>
            <div className="top-icon">
              <a href="#">
                <i className="bx bx-heart"></i>
              </a>
            </div>
          </div>

          <div className="row">
            <img src="img/p3.png" />
            <h3>Blueberry Honey</h3>
            <p>It is a long established fact that a reader</p>
            <div className="content-inner">
              <div className="price">
                <h6>$21.00</h6>
              </div>
              <div className="product-order">
                <a href="#">Order Now</a>
              </div>
            </div>
            <div className="top-icon">
              <a href="#">
                <i className="bx bx-heart"></i>
              </a>
            </div>
          </div>

          <div className="row">
            <img src="img/p4.png" />
            <h3>Blueberry Honey</h3>
            <p>It is a long established fact that a reader</p>
            <div className="content-inner">
              <div className="price">
                <h6>$21.00</h6>
              </div>
              <div className="product-order">
                <a href="#">Order Now</a>
              </div>
            </div>
            <div className="top-icon">
              <a href="#">
                <i className="bx bx-heart"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="btn-products">
          <a href="#" className="btn">
            All Products<i className="bx bxs-right-arrow"></i>
          </a>
        </div>
      </motion.section>
    </>
  )
}

export default Shop
