
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Background from './components/Background';
import Chatbot from './components/Chatbot';
import ScrollbarGenerator from './components/ScrollbarGenerator';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <div id="home" className="pt-24">
          <Home />
        </div>
        <div id="about" className="pt-24">
          <About />
        </div>
        <div id="projects" className="pt-24">
          <Projects />
        </div>
        <div id="resume" className="pt-24">
          <Resume />
        </div>
        <div id="scrollbars" className="pt-24">
          <ScrollbarGenerator />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </div>
  );
};

export default App;