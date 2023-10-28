import Navbar from "../../Shared/Navbar";
import Competence from "../../ui/Competence/Competence";
import Gradient from "../../ui/Gradient/Gradient";
import Hero from "../../ui/Hero/Hero";
import FontAwesome from "../../ui/Icons/FontAwesome";

import Section from "../../ui/Section/Section";

const Home = () => {
    return (
        <>
            <Gradient />
            <Navbar />
            <Hero />
            <Section color="white" title="Min kompetens" subTitle="Det här kan jag">
                <Competence title="Backend" subTitle={[".NET", "Node.js"]} icon="server">
                    <p>Jobbar helst med backend i ASP.NET C#</p>
                </Competence>
                <Competence title="Frontend" subTitle={["ASP.NET MVC", "React"]} icon="code">
                    <p>Jobbar helst med frontend i HTML, CSS, JavaScript med React.</p>
                    <p>Bl.a. denna sida är byggd med React.</p>
                </Competence>
                <Competence title="UX/UI" subTitle={["Adobe CC", "Figma"]} icon="">
                    <p>Skapa wireframes och enkla prototyper.</p>
                </Competence>
            </Section>
            {/*
            </Section>
            {/* <Section color="yellow" title="Sektion 2" subTitle="Portfölj">
                <p>Här är ett urval av projekt som jag har gjort hittills</p>
            </Section> */}
            {/* <Section color="white" title="Sektion 3" subTitle="Om mig">
                <Competence title=".Net" subTitle="Hello">
                    <FontAwesome icon="code" />
                </Competence>
                <p>Min bakgrund och tidigare utbildningar</p>
            </Section> */}
            {/* <Footer /> */}
        </>
    );
};

export default Home;
