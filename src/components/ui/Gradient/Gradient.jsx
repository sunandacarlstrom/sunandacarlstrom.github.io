import styles from "./Gradient.module.css";

const Gradient = ({ children }) => {
    return (
        <>
            <div className={styles.container}>{children}</div>
        </>
    );
};

export default Gradient;
