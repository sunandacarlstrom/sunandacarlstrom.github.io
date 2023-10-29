
import styles from "./Portfolio.module.css";

const Portfolio = ({ title, subTitle, color }) => {
    return (
        <div className={`${styles.card} ${styles[color]}`}>
            <div>
                {/* <FontAwesome icon={icon} color="#d6336c" /> */}
                <h1 className={styles.title}>{title}</h1>
            </div>
            <div className={styles.subTitles}>
                {subTitle.map((s) => (
                    <h2 className={styles.subTitle}>{s}</h2>
                ))}
            </div>
        </div>
    );
};

// Definierar egenskapers typer och om de är obligatoriska
// Portfolio.propTypes = {
//     title: PropTypes.string.isRequired,
//     subTitle: PropTypes.string.isRequired,
// };

// Definerar standardvärden på egenskaper
// Portfolio.defaultProps = {
//     title: "Rubrik för sidan",
//     subTitle: ["Underubrik för sidan"],
// };

export default Portfolio;
