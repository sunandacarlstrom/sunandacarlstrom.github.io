import styles from "./Button.module.css";

const SubmitButton = ({ children, background }) => {
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
        <button type="submit" className={`${styles.btn} ${buttonStyle}`}>
            {children}
        </button>
    );
};

export default SubmitButton;
