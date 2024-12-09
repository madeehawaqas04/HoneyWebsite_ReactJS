import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Shop from "./components/Shop";
import Customer from "./components/Customer";
import Contact from "./components/Contact";

// import './App.css'

function App() {
 

  return (
    <>
      <Header />

      {/* <!--home--> */}
      <Hero />

      {/* <!--about us--> */}
      <AboutUs />
      {/* <!--shop--> */}
      <Shop />

      {/* <!--Reviews--> */}
      <Customer />

      {/* <!--contact--> */}

      <Contact />
      <a href="#home" className="scroll">
        <i className="bx bx-up-arrow-alt"></i>
      </a>
    </>
  );
}

export default App;
