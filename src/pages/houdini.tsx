import React from 'react';
import Layout from '../components/Layout';
import { SiHoudini } from 'react-icons/si';

const HoudiniPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-24 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <SiHoudini className="text-8xl text-[#c770f0]" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Houdini</h1>
            <p className="text-xl text-gray-300">Procedural 3D Animation & VFX Software</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-[#c770f0]">My Experience</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Pracowałem przy wielu projektach od 15 lat, wykorzystując Houdini do tworzenia 
              zaawansowanych efektów wizualnych, symulacji cząsteczek, efektów pyrotechnicznych 
              i proceduralnego modelowania. To narzędzie pozwala mi realizować najbardziej 
              ambitne wizje artystyczne.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">Specjalizacje:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Symulacje cząsteczek</li>
                  <li>• Efekty pyrotechniczne</li>
                  <li>• Symulacje płynów</li>
                  <li>• Proceduralne modelowanie</li>
                  <li>• Destruction FX</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">Doświadczenie:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 15+ lat doświadczenia</li>
                  <li>• Dziesiątki projektów komercyjnych</li>
                  <li>• Filmy kinowe i reklamy</li>
                  <li>• Współpraca z międzynarodowymi studiami</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#home" 
              className="inline-flex items-center px-6 py-3 bg-[#c770f0] text-white rounded-lg font-semibold hover:bg-[#8a53ba] transition-colors duration-300"
            >
              ← Powrót do strony głównej
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HoudiniPage;