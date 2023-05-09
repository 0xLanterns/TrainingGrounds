import "../style/technology.css";
export default function Image({im, name}){
    return (
        <img className="picture" src={im} alt={name}/>
    )
}