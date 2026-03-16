import React from 'react';
import Layout from '../components/Layout';
import SiSynthEyes from '../assets/icons/SiSynthEyes';

const SynthEyesPage: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen pt-24 py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <SiSynthEyes size={128} color="#c770f0" />
            </div>
            <h1 className="text-5xl font-bold mb-4">SynthEyes</h1>
            <p className="text-xl text-gray-300">3D Camera Tracking Software</p>
          </div>
          
          <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
            <h2 className="text-3xl font-bold mb-6 text-[#c770f0]">My Passion</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I love 3D tracking! SynthEyes is my go-to tool for precision camera and
              object tracking. It lets me achieve a perfect integration of CGI elements
              with live-action footage — which is absolutely critical in professional
              VFX productions.
            </p>

            <div className="bg-gradient-to-r from-purple-900/20 to-purple-800/20 rounded-lg p-6 mb-6 border border-purple-700/30">
              <h3 className="text-xl font-semibold mb-3 text-purple-400">💜 Why I love 3D tracking</h3>
              <p className="text-gray-300">
                There's a magical moment when virtual objects fit seamlessly into the real world.
                Accurate tracking is the foundation of every successful visual effect.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">Specialisations:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 3D camera tracking</li>
                  <li>• Object tracking</li>
                  <li>• Planar tracking</li>
                  <li>• Lens distortion analysis</li>
                  <li>• Match moving</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">Use cases:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• CGI integration with live-action</li>
                  <li>• Virtual set extensions</li>
                  <li>• Digital doubles</li>
                  <li>• Environment replacements</li>
                  <li>• Complex camera moves</li>
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

export default SynthEyesPage;