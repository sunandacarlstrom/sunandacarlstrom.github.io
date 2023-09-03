import Navbar from "../../Shared/Navbar";
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
                <p>Här ska text och ikoner synas</p>
                <FontAwesome icon="code" />
                <FontAwesome icon="server" size="4x" />
            </Section>
            <Section color="yellow" title="Sektion 2" subTitle="Portfölj">
                <p>Här ska text och ikoner synas</p>
            </Section>

            {/* <Footer /> */}
        </>
    );
};

export default Home;
