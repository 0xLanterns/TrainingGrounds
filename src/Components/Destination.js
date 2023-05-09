// Import Statements
import {useState,useEffect} from "react";
import background from "./background";
import "../style/destination.css";

// Data
const data = require("../data.json");

// Crew Component
export default function Destination(){

    // State
    const [destinationId, setDestinationId] = useState(0);

    // Change Background onload
    window.onload = background("destination");

    // Data of Destination from data
    const {name, images, description, github, hint} = data.challenges[destinationId];
    
    // Function to change destinationId onClick crew 
    const change = (id) => {
        setDestinationId(id);
    }

    useEffect(() => {
        const list = document.querySelectorAll('.destination-names span');
		for (let i = 0; i < list.length; i++) {
			list[i].classList.remove('active');
		}
        list[destinationId].classList.add("active");
    }, [destinationId]);

    
    return(

        // Container


            <div className="destination">

                <div className="destination-text">

                    <div className="destination-names">
                        <span onClick={() => change(0)}>Level 0</span>
                        <span onClick={() => change(1)}>Level 1</span>
                        <span onClick={() => change(2)}>Level 2</span>
                        <span onClick={() => change(3)}>Level 3</span>
                    </div>

                    <h3>
                        {name}
                    </h3>
                    <p>
                        {description}
                    </p>

                    <div className="destination-info">
                        <div className="avg-distance">

                            <p><a href={github}>Source</a></p>

                        </div> 
                    </div>

                </div>

            </div>


    );
}
