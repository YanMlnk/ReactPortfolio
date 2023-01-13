import {Link} from "react-router-dom";
import "./home.css";
const Button = () => {

    return (
    <Link to="/about">
    <button>Learn More</button>
    </Link>
    )
}

export default Button;