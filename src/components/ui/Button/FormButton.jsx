import styles from "./Button.module.css";

const FormButton = ({ children, background }) => {
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
        <button className={`${styles.btn} ${styles.small} ${buttonStyle}`}>
            {children}
        </button>
    );
};

export default FormButton;
