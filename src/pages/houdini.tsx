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
              Over 15 years of professional VFX work using Houdini to create advanced visual effects,
              particle simulations, pyrotechnic effects, and procedural modeling. This tool allows me
              to realise the most ambitious artistic visions.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">Specialisations:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Particle simulations</li>
                  <li>• Pyro & fire effects</li>
                  <li>• Fluid simulations</li>
                  <li>• Procedural modelling</li>
                  <li>• Destruction FX</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[#c770f0]">Experience:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 15+ years of experience</li>
                  <li>• Dozens of commercial projects</li>
                  <li>• Feature films & advertising</li>
                  <li>• International studio collaborations</li>
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

export default HoudiniPage;
