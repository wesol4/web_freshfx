import React from 'react';
import Layout from '../components/Layout';
import { SiNuke } from 'react-icons/si';

const NukePage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-24 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <SiNuke className="text-8xl text-[#c770f0]" />
            </div>
            <h1 className="text-5xl font-bold mb-4">Nuke</h1>
            <p className="text-xl text-gray-300">Professional Compositing Software</p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-[#c770f0]">My Experience</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I collaborated with Netflix on the TV series "Liberator", handling advanced
              compositing and VFX integration. Nuke is my primary tool for professional compositing
              on high-end productions.
            </p>

            <div className="bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-lg p-6 mb-6 border border-red-700/30">
              <h3 className="text-xl font-semibold mb-3 text-red-400">🎬 Netflix — "Liberator"</h3>
              <p className="text-gray-300">
                Worked on the Netflix television series, using Nuke to create seamless compositing
                and CGI integration with live-action footage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">Specialisations:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Digital compositing</li>
                  <li>• Color grading</li>
                  <li>• Rotoscoping</li>
                  <li>• 3D tracking integration</li>
                  <li>• Matte painting integration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">Projects:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Netflix productions</li>
                  <li>• Feature films</li>
                  <li>• Premium advertising</li>
                  <li>• Music videos</li>
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

export default NukePage;
