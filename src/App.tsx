import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoaderSpinner from "./components/LoaderSpinner";
import Layout from "./components/Layout";
import HomeHero from "./components/HomeHero";
import AboutDetails from "./components/AboutDetails";
import DemoReelPlayer from "./components/DemoReelPlayer";
import SkillsAccordion from "./components/SkillsAccordion";
import Resume from "./components/Resume";
import { useIsLoaded } from "./hooks/useIsLoaded";
import { LOADER_DELAY_MS } from "./data/constants";

import HoudiniPage from "./pages/houdini";
import NukePage from "./pages/nuke";
import UnrealPage from "./pages/unreal-engine";
import SynthEyesPage from "./pages/syntheyes";
import PythonPage from "./pages/python";
import BlenderPage from "./pages/blender";

const HomePage: React.FC = () => {
    const isLoaded = useIsLoaded(LOADER_DELAY_MS);

    if (!isLoaded) {
        return <LoaderSpinner />;
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
                <SkillsAccordion />
            </section>
            <section id="resume" className="pt-24">
                <Resume />
            </section>
        </Layout>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/houdini" element={<HoudiniPage />} />
                <Route path="/nuke" element={<NukePage />} />
                <Route path="/unreal-engine" element={<UnrealPage />} />
                <Route path="/syntheyes" element={<SynthEyesPage />} />
                <Route path="/python" element={<PythonPage />} />
                <Route path="/blender" element={<BlenderPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
