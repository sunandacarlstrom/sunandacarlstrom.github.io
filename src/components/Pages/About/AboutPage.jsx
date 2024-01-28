import styles from "./AboutPage.module.css";
import Image from "../../../../src/assets/images/sunanda_photoshop_icecream.jpg";
import Gradient from "../../ui/Gradient/Gradient";
import Navbar from "../../Shared/Navbar";
import MainContent from "../../ui/MainContent/MainContent";

const About = () => {
    return (
        <>
            <Navbar />
            <Gradient>
                <MainContent>
                    <h1 className={styles.title}>[ VEM ÄR JAG? ]</h1>
                    <div className={styles.infoBox}>
                        <img src={Image} alt="Sunanda Carlström" className={styles.avatar} />
                        <p>
                            Hej! Jag heter Sunanda och har som dröm att bli Fullstack-utvecklare.
                            Idag studerar jag en YH-utbildning inom Webbutveckling .NET.
                        </p>
                        <p>
                            Som person är jag nyfiken, positiv, ambitiös och kreativ. Min nyfikenhet
                            och min starka vilja att lära mig mer är de egenskaper som driver mig
                            framåt. Jag har tidigare studerat en akademisk utbildning inom Medie-
                            och kommunikationsvetenskap, samt en annan YH-utbildning inom Grafisk
                            design och kommunikation.
                        </p>
                        <p>
                            Jag tror att kombinationen av mina personliga egenskaper som tekniskt
                            intresserad och väldigt social person kommer att vara till stor fördel
                            inom yrket som utvecklare.
                        </p>
                        <p>Ser fram emot att kunna bidra till tech-branschen som utvecklare!</p>
                    </div>
                </MainContent>
            </Gradient>
        </>
    );
};

export default About;
