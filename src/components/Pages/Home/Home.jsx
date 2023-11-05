import Navbar from "../../Shared/Navbar";
import Competence from "../../ui/Competence/Competence";
import Gradient from "../../ui/Gradient/Gradient";
import Hero from "../../ui/Hero/Hero";
import Portfolio from "../../ui/Portfolio/Portfolio";
import Section from "../../ui/Section/Section";
import CardList from "../../ui/CardList/CardList";
import portfolio from "../../../assets/data/portfolio";

const Home = () => {
    return (
        <>
            <Gradient />
            <Navbar />
            <Hero />
            <Section color="white" title="Min kompetens" subTitle="Det här kan jag">
                <Competence title="Backend" subTitles={[".NET", "Node.js"]} icon="server">
                    <p className="text">Jobbar helst med backend i ASP.NET C#</p>
                </Competence>
                <Competence title="Frontend" subTitles={["ASP.NET MVC", "React"]} icon="code">
                    <p className="text">Jobbar helst med frontend i HTML, CSS, JavaScript med React.</p>
                    <p className="text">Bl.a. denna sida är byggd med React.</p>
                </Competence>
                <Competence title="UX/UI" subTitles={["Adobe CC", "Figma"]} icon="">
                    <p className="text">Skapa wireframes och enkla prototyper.</p>
                </Competence>
            </Section>

            <Section color="yellow" title="Portfolio" subTitle="Det här har jag gjort">
                <Portfolio/>
            </Section>
            {/*
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
