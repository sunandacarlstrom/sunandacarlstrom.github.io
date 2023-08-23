import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ href, children, background }) => {
    var buttonStyle;
    switch (background) {
        case "primary":
            buttonStyle = styles["btn-primary-color"];
            break;
        case "secondary":
            break;
            default:
                buttonStyle = styles["btn-secondary-color"];
            break;
    }

    return (
        <Link to={href} className={`${styles.btn} ${buttonStyle}`}>
            {children}
        </Link>
    );
};

export default Button;
