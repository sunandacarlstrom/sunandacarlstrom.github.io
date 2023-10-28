import styles from "./Competence.module.css";
import PropTypes from "prop-types";
import FontAwesome from "../Icons/FontAwesome";

const Competence = ({ children, color, title, subTitle, icon }) => {
    return (
        <div className={`${styles.container} ${styles[color]}`}>
            <div>
                <FontAwesome icon={icon} color="#d6336c" />
                <h1 className={styles.title}>{title}</h1>
            </div>
                {children}
            <div className={styles.subTitles}>
                {subTitle.map((s) => (
                    <h2 className={styles.subTitle}>{s}</h2>
                ))}
            </div>
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
    subTitle: ["Underubrik för sidan"],
};

export default Competence;
