import React from 'react'
import { useState, useEffect } from "react";

const Header = () => {
    const [count, setCount] = useState(0);
    const [menuOpened, setMenuOpened] = useState(false);
    const [headerColor, setHeaderColor] = useState(false);
  
    const getMenuStyles = (menuOpened) => {
      return { top: menuOpened ? "100%" : "-400%" };
    };
  
    useEffect(() => {
      const handleScroll = (event) => {
        console.log(window.scrollY);
        // setScrollTop(window.scrollY);
        window.scrollY > 80 ? setHeaderColor(true) : setHeaderColor(false);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>
      <header className={"header " + (headerColor && "sticky")}>
        <a href="#" className="logo">
          <i className="bx bxs-home"></i>Honey
        </a>
        <ul className={"navbar " + (menuOpened && "open")}>
          {/*style={getMenuStyles(menuOpened)}> */}
          <li onClick={() => setMenuOpened(false)}>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <a href="#about"> About US </a>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <a href="#shop">Our Shop</a>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <a href="#review">Our Customer</a>
          </li>
          <li onClick={() => setMenuOpened(false)}>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>

        <div className="nav-icons">
          <a href="#">
            <i className="bx bx-search"></i>
          </a>
          <a href="#">
            <i className="bx bx-cart"></i>
          </a>
          <div>
            <i
              // className="bx bx-menu"
              className={"bx bx-menu " + (menuOpened && "bx-x")}
              id="menu"
              onClick={() => setMenuOpened((prev) => !prev)}
            ></i>
          </div>
        </div>
      </header> 
</>
  )
}

export default Header
