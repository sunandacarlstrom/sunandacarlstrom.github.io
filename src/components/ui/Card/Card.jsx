import styles from "./Card.module.css";

const Card = ({ content }) => {
    return (
        <div className={`${styles["info-card"]} ${styles.content} bg-primary bg-info`} key={content.id}>
            <img src={require(`../../../assets/images/portfolio/${content.src}`)} alt={content.name} />
            <div>
                <h2 className={styles["sub-title"]}>{content.name}</h2>
                <p>{content.description}</p>
            </div>
        </div>
    );
};

export default Card;