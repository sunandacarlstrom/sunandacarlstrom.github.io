import styles from "./Card.module.css";

const Card = ({ content }) => {
    return (
        <div className={`${styles["info-card"]} ${styles.content} bg-primary bg-info`} key={content.id}>
            <img src={require(`../../../assets/images/portfolio/${content.src}`)} alt={content.name} />

            <h2 className={styles.title}>{content.name}</h2>
            <p className={styles.text}>{content.description}</p>
            <div className={styles.links}>
                <span className={styles.linkButtons}>
                    {content.link ? (
                        <a className={styles.linkButton} href={content.link}>
                            Github
                        </a>
                    ) : (
                        ""
                    )}
                </span>

                {content.preview ? (
                    <span className={styles.linkButtons}>
                        <a className={styles.linkButton} href={content.preview}>
                            Visa sida
                        </a>
                    </span>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};

export default Card;
