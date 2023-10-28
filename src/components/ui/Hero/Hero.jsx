import styles from "./Hero.module.css";
import Image from "../../../assets/images/sunanda_closeup.jpg";
import Button from "../Button/Button";

const Hero = () => {
    return (
        <div className={styles.container}>
            <section className={styles.highlights}>
                <div className={styles.highlights1}>
                    <img src={Image} alt="Hero" className={styles.hero}></img>
                </div>
                <div className={styles.highlights2}>
                    <p className={styles.name}>Sunanda Carlström</p>
                    <p className={styles.title}>Webbutvecklare</p>
                    <p className={styles["secondary-title"]}>Grafisk Designer | Kommunikatör</p>
                    <p className={styles.about}>På fritiden gillar jag att umgås med vänner & familj, dansa bugg, salsa & lindyhop samt experimentera i köket</p>
                    {/* <p className={styles.about}>Klicka för att lära känna mig mer!</p> */}
                    <Button href="#" background="primary">
                        ↓
                    </Button>
                </div>
            </section>
        </div>
    );
};

export default Hero;
