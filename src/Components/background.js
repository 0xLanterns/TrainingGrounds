import homeM from "../assets/home/background-home-desktop.svg";
import homeT from "../assets/home/background-home-desktop.svg";
import homeD from "../assets/home/background-home-desktop.svg";
import destinD from "../assets/home/background-home-desktop.svg";
import destinT from "../assets/home/background-home-desktop.svg";
import destinM from "../assets/home/background-home-desktop.svg";
import crewM from "../assets/home/background-home-desktop.svg";
import crewT from "../assets/home/background-home-desktop.svg";
import crewD from "../assets/home/background-home-desktop.svg";
import techM from "../assets/home/background-home-desktop.svg";
import techT from "../assets/home/background-home-desktop.svg";
import techD from "../assets/home/background-home-desktop.svg";

export default function background(name){

    let backgroundDesktop, backgroundTablet, backgroundMobile;

    switch(name){
        case "homepage":
            backgroundDesktop = `url(${homeD})`;
            backgroundTablet = `url(${homeT})`;
            backgroundMobile = `url(${homeM})`;
            break;

        case "destination": 
            backgroundDesktop = `url(${destinD})`;
            backgroundTablet = `url(${destinT})`;
            backgroundMobile =  `url(${destinM})`;
            break;
        
        case "crew": 
            backgroundDesktop = `url(${crewD})`;
            backgroundTablet = `url(${crewT})`;
            backgroundMobile = `url(${crewM})`;
            break;

        case "technology": 
            backgroundDesktop = `url(${techD})`;
            backgroundTablet = `url(${techT})`;
            backgroundMobile = `url(${techM})`;
            break;
        default:
            console.log("Error....");
            break;
    }

    document.documentElement.style.setProperty(
        "--background-desktop",
        backgroundDesktop
    );
    document.documentElement.style.setProperty(
        "--background-tablet",
        backgroundTablet
    );
    document.documentElement.style.setProperty(
        "--background-mobile",
        backgroundMobile
    );
}