import styles from "./MainContent.module.css";

const MainContent = ({ children }) => {
    return <article className={styles.content}>{children}</article>;
};

export default MainContent;
