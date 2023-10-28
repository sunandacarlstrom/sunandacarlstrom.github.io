import Gradient from "../../ui/Gradient/Gradient";
import Navbar from "../../Shared/Navbar";
import MainContent from "../../ui/MainContent/MainContent";

const About = () => {
    return (
        <>
            <Gradient />
            <Navbar />
            <MainContent>
                <h1>[VEM ÄR JAG?]</h1>
                <p>
                    Hej! Jag heter Sunanda och har som dröm att bli Fullstack-utvecklare. Idag studerar jag en YH-utbildning inom Webbutveckling .NET. Som person är jag nyfiken, positiv, ambitiös och
                    kreativ. Min nyfikenhet och min starka vilja att lära mig mer är de egenskaper som driver mig framåt. Jag har tidigare studerat en akademisk utbildning inom Medie- och
                    kommunikationsvetenskap, samt en annan YH-utbildning inom Grafisk design och kommunikation. Jag tror att kombinationen av mina personliga egenskaper som tekniskt intresserad och
                    väldigt social person kommer att vara till stor fördel inom yrket som utvecklare.
                </p>
                <p>Ser fram emot att få börja arbeta som utvecklare och bidra till tech-branschen!</p>
            </MainContent>
        </>
    );
};

export default About;