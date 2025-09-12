import React from 'react';
import Layout from '../components/Layout';
import { SiPython } from 'react-icons/si';

const PythonPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-24 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <SiPython className="text-8xl text-[#c770f0]" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Python</h1>
            <p className="text-xl text-gray-300">Programming Language for Pipeline Development</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-[#c770f0]">Pipeline Development</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Python wykorzystuję głównie do tworzenia i optymalizacji pipeline'ów 
              produkcyjnych. Automatyzuję procesy, tworzę narzędzia dla artystów 
              i integruję różne aplikacje w spójny workflow, co znacznie przyspiesza 
              pracę całego zespołu.
            </p>
            
            <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-lg p-6 mb-6 border border-blue-700/30">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">🔧 Pipeline Automation</h3>
              <p className="text-gray-300">
                Tworzę skrypty i narzędzia, które automatyzują powtarzalne zadania, 
                zarządzają plikami projektów i zapewniają płynną komunikację między 
                różnymi aplikacjami w pipeline VFX.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">Zastosowania:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Pipeline automation</li>
                  <li>• Custom tools development</li>
                  <li>• File management systems</li>
                  <li>• Render farm integration</li>
                  <li>• Data processing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">Integracje:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Houdini Python API</li>
                  <li>• Nuke Python scripting</li>
                  <li>• Maya Python integration</li>
                  <li>• Database connectivity</li>
                  <li>• Web APIs</li>
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

export default PythonPage;