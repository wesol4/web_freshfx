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
            <h2 className="text-3xl font-bold mb-6 text-[#c770f0]">20 Years of Experience</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Blender has been with me for the last 20 years of my career. It was my first serious
              3D tool, with which I learned the fundamentals of modelling, animation and rendering.
              Although I now work primarily with professional tools, Blender holds a special place
              as the platform that opened the door to the world of 3D for me.
            </p>

            <div className="bg-gradient-to-r from-orange-900/20 to-orange-800/20 rounded-lg p-6 mb-6 border border-orange-700/30">
              <h3 className="text-xl font-semibold mb-3 text-orange-400">🧡 My First Love in 3D</h3>
              <p className="text-gray-300">
                Blender was my first 3D teacher. It was through Blender that I discovered my passion
                for creating virtual worlds and visual effects — 20 years ago it started my journey
                into computer graphics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">What I learnt:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 3D modelling fundamentals</li>
                  <li>• Keyframe animation</li>
                  <li>• Materials & textures</li>
                  <li>• Rendering basics</li>
                  <li>• Compositing & post-processing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">Why Blender?</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Free & open source</li>
                  <li>• Complete 3D suite</li>
                  <li>• Great community</li>
                  <li>• Constantly evolving</li>
                  <li>• Accessible to everyone</li>
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

export default BlenderPage;
