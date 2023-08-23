import styles from "./Hero.module.css";
import Image from "../../../assets/images/sunanda_closeup.jpg";
import Button from "../Button/Button";

// import Button from "../Button/Button";

const Hero = () => {
    return (
            <div className={styles.container}>

                <section className={styles.highlights}>
                    <div>
                        <img src={Image} alt="Hero" className={styles.hero}></img>
                        <p className={styles.name}>Sunanda Carlström</p>
                        <p className={styles.title}>Webbutvecklare</p>
                        <p className={styles["secondary-title"]}>Grafisk Designer | Kommunikatör</p>
                        <p className={styles.about}>Älskar att umgås med vänner & familj, dansa bugg, salsa och lindyhop samt fika och dricka te</p>
                    </div>
                    <div>
                        <p className={styles.about}>Klicka för att lära känna mig mer :D</p>
                        <Button href="#" background="primary">↓</Button>
                    </div>
                </section>
            </div>
    );
};

export default Hero;
