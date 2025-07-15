import React, { useEffect, useState } from "react";
import Loader from "./components/Loader.tsx";
import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Resume from "./components/Resume.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";
import Background from "./components/Background.tsx";

const App: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    // Loader pełnoekranowy, bez żadnych innych elementów
    if (loading) {
        return (
            <Loader />
        );
    }

    return (
        <div className="min-h-screen">
            <Background />
            <Navbar />
            <main className="relative z-10">
                <section id="home" className="pt-24">
                    <Home />
                </section>
                <section id="projects" className="pt-24">
                    <Projects />
                </section>
                <section id="about" className="pt-24">
                    <About />
                </section>
                <section id="resume" className="pt-24">
                    <Resume />
                </section>
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default App;