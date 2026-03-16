import React from 'react';
import Layout from '../components/Layout';
import { SiUnrealengine } from 'react-icons/si';

const UnrealEnginePage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-24 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <SiUnrealengine className="text-8xl text-[#c770f0]" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Unreal Engine</h1>
            <p className="text-xl text-gray-300">Real-time 3D Creation Platform</p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-[#c770f0]">My Experience</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              At Platige Image, I have been using Unreal Engine for 4 years to create real-time
              visualisations and interactive experiences. Our work was recognised with an AEAF
              2nd place award, confirming the high quality of the projects delivered.
            </p>

            <div className="bg-gradient-to-r from-yellow-900/20 to-yellow-800/20 rounded-lg p-6 mb-6 border border-yellow-700/30">
              <h3 className="text-xl font-semibold mb-3 text-yellow-400">🏆 AEAF Award — 2nd Place</h3>
              <p className="text-gray-300">
                A project produced at Platige Image using Unreal Engine was awarded at the prestigious
                AEAF (Asia-Europe-America Film Festival).
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">Specialisations:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Real-time rendering</li>
                  <li>• Virtual production</li>
                  <li>• Interactive experiences</li>
                  <li>• Architectural visualisation</li>
                  <li>• VR/AR applications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">Experience:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 4+ years at Platige Image</li>
                  <li>• AEAF award-winning project</li>
                  <li>• Commercial visualisations</li>
                  <li>• International productions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="/"
              className="inline-flex items-center px-6 py-3 bg-[#c770f0] text-white rounded-lg font-semibold hover:bg-[#8a53ba] transition-colors duration-300"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UnrealEnginePage;
