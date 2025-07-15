import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Background from "./components/Background";

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