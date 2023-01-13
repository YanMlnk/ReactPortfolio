import {Link} from "react-router-dom";
import ImageDisplay from "./ImageDisplay";
import Button from "./Button";
import "./home.css";
const Home = () => {
    return (
    <div>
    <div className="mainPageBlock">
       <ImageDisplay />
    <div className="mainTextBlock">
    <h1 className="mainTitle">Hello!</h1>
    <p className="mainText">My name is Yana Melnik, and I am 28 years old. 
        Born and raised in Minsk, Belarus I now call Gothenburg, Sweden my home.
        I am a PC build Technician and currently studying Front End Development. 
    </p>
    <Button />
    </div>
    </div>
    </div>
    );
};

export default Home; 
