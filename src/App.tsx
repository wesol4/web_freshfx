import React, { useEffect, useState } from "react";
import LoaderSpinner from "./components/LoaderSpinner";
import Layout from "./components/Layout";
import HomeHero from "./components/HomeHero";
import AboutDetails from "./components/AboutDetails";
import DemoReelPlayer from "./components/DemoReelPlayer";
import SkillsGrid from "./components/SkillsGrid";
import Resume from "./components/Resume.tsx";
import { useIsLoaded } from "./hooks/useIsLoaded";

const App: React.FC = () => {
    const isLoaded = useIsLoaded(1500);

    // Loader pełnoekranowy, bez żadnych innych elementów
    if (!isLoaded) {
        return (
            <LoaderSpinner />
        );
    }

    return (
        <Layout>
            <section id="home" className="pt-24">
                <HomeHero />
            </section>
            <section id="projects" className="pt-24">
                <DemoReelPlayer />
            </section>
            <section id="about" className="pt-24">
                <AboutDetails />
                <SkillsGrid />
            </section>
            <section id="resume" className="pt-24">
                <Resume />
            </section>
        </Layout>
    );
};

export default App;