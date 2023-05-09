// Import Statements
import "../style/nav.css";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

// Navigation Component
export default function Nav(){

    // Function to open navigation menu in mobile
    const open = () => {
      const hamburger = document.querySelector(".hamburger");
      const navMenu = document.querySelector(".nav-menu");
      const navItem = document.querySelectorAll(".nav-item");

      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");

      navItem.forEach((item) => {
          item.addEventListener("click", function(){
            hamburger.classList.remove("active")
            navMenu.classList.remove("active");
          })
      });

    }
    
    const setActiveLink = e => {
      const links = document.getElementsByTagName("a"); 
      Array.from(links).forEach(el => el.classList.remove("active"));
      e.target.classList.add("active");
    };
    
    return (

        // Navigation Bar
        <nav>
      
          {/* Logo */}
          <a href="/">
            <img src={logo} alt="Space Logo" />
          </a>
          <hr />

          {/* Navigation Menu */}
          <ul className="nav-menu">
            
            <li className="nav-item" onClick={setActiveLink}>
              <Link to="/">
                  <span className="nav-num">00</span>
                  Home
              </Link>
            </li>
            <li className="nav-item" onClick={setActiveLink}>
               <Link to="/training">
                  <span className="nav-num">01</span>
                  training
              </Link>
            </li>
            <li className="nav-item" onClick={setActiveLink}>
              <Link to="/audit-search">
                  <span className="nav-num">02</span>
                  Audit Search
              </Link>
            </li>
            <li className="nav-item" onClick={setActiveLink}>
              <Link to="/github">
                  <span className="nav-num">03</span>
                  Github
              </Link>
            </li>
      
          </ul>

          {/* Hamburger */}
          <span className="hamburger" onClick={open}></span>

        </nav>

    );

}