import styles from "./Competence.module.css";
import PropTypes from "prop-types";

const Competence = ({ children, color, title, subTitle }) => {
    return (
        <div className={`${styles.container} ${styles[color]}`}>
            {children}
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
        </div>
    );
};

// Definierar egenskapers typer och om de är obligatoriska
Competence.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

// Definerar standardvärden på egenskaper
Competence.defaultProps = {
    title: "Rubrik för sidan",
    subTitle: "Underubrik för sidan",
};

export default Competence;
