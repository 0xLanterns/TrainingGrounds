// Import Statement
import "../style/homepage.css";
import background from "./background";
import { Link } from "react-router-dom";
// Homepage Component
export default function Homepage(){

    // Change Background onload
    window.addEventListener("load", background("homepage"))
    return (
        // Homepage
        <div className="homepage">

            {/* Homepage Text */}
            <div className="home-text">
                <span id="heading">
                Welcome, auditors of the cosmos, to
                </span>
                <h1>OA</h1>
                <p>
                 - the Original Auditors, an elite digital stronghold where the brightest and most determined smart contract auditors gather to hone their skills and rise to new heights of excellence.
                
                </p>
            </div>

            {/* Homepage Image */}
            {/* <div className="header-img"></div> */}

            {/* Homepage Button */}

            
            <Link to="/training">
            <button className="explore-btn">
                  <span className="nav-num">01</span>
                  Train
                  </button>
              </Link>
            
        
        </div>
    );
}