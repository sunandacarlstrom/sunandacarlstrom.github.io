import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const NavButton = ({ href, children, background }) => {
    var buttonStyle;
    switch (background) {
        case "primary":
            buttonStyle = styles["primary-color"];
            break;
        case "secondary":
            buttonStyle = styles["secondary-color"];
            break;
        default:
            break;
    }

    return (
        <Link to={href} className={`${styles["btn-navbar"]} ${buttonStyle}`}>
            {children}
        </Link>
    );
};

export default NavButton;
