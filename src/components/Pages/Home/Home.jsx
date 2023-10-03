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
            <Section color="white" title="Sektion 1" subTitle="Min kompetens">
                <Competence title=".Net" subTitle="Hello">
                    <FontAwesome icon="code" />
                </Competence>
                <Competence title="React" subTitle="Web">
                    <FontAwesome icon="server" size="4x" />
                </Competence>
                <Competence title="React" subTitle="Web">
                    <FontAwesome icon="server" size="4x" />
                </Competence>
            </Section>
            <Section color="yellow" title="Sektion 2" subTitle="Portfölj">
                <p>Här ska text och ikoner synas</p>
            </Section>

            {/* <Footer /> */}
        </>
    );
};

export default Home;
