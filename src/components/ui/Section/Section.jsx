import styles from "./Section.module.css";
import PropTypes from "prop-types";

const Section = ({ children, color, title, subTitle }) => {
    return (
        <div className={`${styles.container} ${styles[color]}`}>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            {children}
        </div>
    );
};

// Definierar egenskapers typer och om de är obligatoriska
Section.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

// Definerar standardvärden på egenskaper
Section.defaultProps = {
    title: "Rubrik för sidan",
    subTitle: "Underubrik för sidan",
};

export default Section;
