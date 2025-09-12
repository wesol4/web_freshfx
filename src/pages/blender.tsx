import React from 'react';
import Layout from '../components/Layout';
import { SiBlender } from 'react-icons/si';

const BlenderPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-24 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <SiBlender className="text-8xl text-[#c770f0]" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Blender</h1>
            <p className="text-xl text-gray-300">Open Source 3D Creation Suite</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-[#c770f0]">20 Lat Doświadczenia</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Blender towarzyszył mi przez ostatnie 20 lat mojej kariery. To było 
              moje pierwsze poważne narzędzie 3D, z którym nauczyłem się podstaw 
              modelowania, animacji i renderowania. Mimo że teraz używam głównie 
              profesjonalnych narzędzi, Blender pozostaje w moim sercu jako 
              platforma, która otworzyła mi drzwi do świata 3D.
            </p>
            
            <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 rounded-lg p-6 mb-6 border border-orange-700/30">
              <h3 className="text-xl font-semibold mb-3 text-orange-400">🧡 Moja Pierwsza Miłość w 3D</h3>
              <p className="text-gray-300">
                Blender był moim pierwszym nauczycielem 3D. To dzięki niemu odkryłem 
                pasję do tworzenia wirtualnych światów i efektów wizualnych. 
                20 lat temu rozpocząłem z nim swoją przygodę z grafiką komputerową.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">Czego się nauczyłem:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Podstawy modelowania 3D</li>
                  <li>• Animacja keyframe</li>
                  <li>• Materiały i tekstury</li>
                  <li>• Podstawy renderowania</li>
                  <li>• Kompozycja i post-processing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">Dlaczego Blender?</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Darmowy i open source</li>
                  <li>• Kompletne narzędzie 3D</li>
                  <li>• Świetna społeczność</li>
                  <li>• Ciągły rozwój</li>
                  <li>• Dostępny dla każdego</li>
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

export default BlenderPage;