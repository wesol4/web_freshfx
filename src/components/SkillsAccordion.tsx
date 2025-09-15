import React, { useState } from 'react';
import { SKILLS } from '../data/skills';

const skillDescriptions: { [key: string]: { description: string; experience: string } } = {
  'Houdini': {
    description: 'Pracowałem przy wielu projektach przez ostatnie 15 lat, wykorzystując Houdini do tworzenia zaawansowanych efektów wizualnych, symulacji cząsteczek, efektów pyrotechnicznych i proceduralnego modelowania. To narzędzie pozwala mi realizować najbardziej ambitne wizje artystyczne.',
    experience: '15+ lat doświadczenia'
  },
  'Nuke': {
    description: 'Współpracowałem z Netflix nad serialem telewizyjnym "Liberator", gdzie odpowiadałem za zaawansowane compositing i integrację efektów wizualnych. Nuke to moje główne narzędzie do profesjonalnego compositingu w projektach wysokiej klasy.',
    experience: 'Netflix - "Liberator" TV series'
  },
  'Unreal Engine': {
    description: 'W Platige Image od 4 lat wykorzystuję Unreal Engine do tworzenia real-time visualizations i interaktywnych doświadczeń. Nasza praca została doceniona nagrodą AEAF za 2. miejsce, co potwierdza wysoką jakość realizowanych projektów.',
    experience: '4+ lat w Platige Image, nagroda AEAF'
  },
  'SynthEyes': {
    description: 'Uwielbiam tracking 3D! SynthEyes to moje ulubione narzędzie do precyzyjnego śledzenia ruchu kamery i obiektów. Pozwala mi na perfekcyjną integrację elementów CGI z materiałem live-action, co jest kluczowe w profesjonalnych produkcjach VFX.',
    experience: 'Specjalista 3D tracking'
  },
  'After Effects': {
    description: 'Wykorzystuję After Effects do motion graphics, kompozycji i post-produkcji w projektach reklamowych i filmowych. To wszechstronne narzędzie pozwala mi tworzyć dynamiczne animacje i efekty wizualne.',
    experience: 'Motion graphics i compositing'
  },
  'Python': {
    description: 'Python wykorzystuję głównie do tworzenia i optymalizacji pipeline\'ów produkcyjnych. Automatyzuję procesy, tworzę narzędzia dla artystów i integruję różne aplikacje w spójny workflow, co znacznie przyspiesza pracę całego zespołu.',
    experience: 'Pipeline development i automatyzacja'
  },
  'Blender': {
    description: 'Blender towarzyszył mi przez ostatnie 20 lat mojej kariery. To było moje pierwsze poważne narzędzie 3D, z którym nauczyłem się podstaw modelowania, animacji i renderowania. Mimo że teraz używam głównie profesjonalnych narzędzi, Blender pozostaje w moim sercu jako platforma, która otworzyła mi drzwi do świata 3D.',
    experience: '20+ lat doświadczenia'
  }
};

const SkillsAccordion: React.FC = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);

  const toggleSkill = (skillName: string) => {
    setExpandedSkill(expandedSkill === skillName ? null : skillName);
  };

  return (
    <div className="mt-24">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Professional <strong className="text-[#c770f0]">Skillset</strong>
      </h2>
      
      <div className="max-w-7xl mx-auto">
        {/* Skills Row - Horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 mb-8">
          {SKILLS.map((skill, index) => {
            const isExpanded = expandedSkill === skill.name;
            const skillInfo = skillDescriptions[skill.name];
            
            return (
              <button
                key={index}
                onClick={() => toggleSkill(skill.name)}
                className={`w-full h-32 flex flex-col items-center justify-center bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#c770f0] hover:scale-105 hover:shadow-lg hover:shadow-[#c770f0]/20 transition-all duration-300 ${
                  isExpanded ? 'border-[#c770f0] bg-gray-700/30 scale-105' : ''
                }`}
              >
                <div className="text-[#c770f0] mb-2 flex-shrink-0">
                  {skill.icon}
                </div>
                <p className="text-sm font-medium text-center px-2">{skill.name}</p>
                <p className="text-xs text-gray-400 text-center px-2 mt-1">{skillInfo?.experience}</p>
              </button>
            );
          })}
        </div>

        {/* Full-width sliding panel below the skills row */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
          expandedSkill ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          {expandedSkill && (
            <div className="bg-gray-800/50 rounded-lg border border-gray-700 p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="text-[#c770f0] mr-4 text-5xl">
                  {SKILLS.find(skill => skill.name === expandedSkill)?.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{expandedSkill}</h3>
                  <p className="text-[#c770f0] font-semibold text-lg">
                    {skillDescriptions[expandedSkill]?.experience}
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-[#c770f0]/10 to-purple-800/10 rounded-lg p-6 border border-[#c770f0]/20">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {skillDescriptions[expandedSkill]?.description}
                </p>
                
                {/* Special achievement highlights */}
                {expandedSkill === 'Nuke' && (
                  <div className="mt-4 p-3 bg-red-900/20 rounded-lg border border-red-700/30">
                    <p className="text-red-400 font-semibold">🎬 Netflix Production</p>
                  </div>
                )}
                
                {expandedSkill === 'Unreal Engine' && (
                  <div className="mt-4 p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
                    <p className="text-yellow-400 font-semibold">🏆 AEAF Award - 2nd Place</p>
                  </div>
                )}
                
                {expandedSkill === 'Blender' && (
                  <div className="mt-4 p-3 bg-orange-900/20 rounded-lg border border-orange-700/30">
                    <p className="text-orange-400 font-semibold">🧡 My First 3D Love</p>
                  </div>
                )}

                {expandedSkill === 'SynthEyes' && (
                  <div className="mt-4 p-3 bg-purple-900/20 rounded-lg border border-purple-700/30">
                    <p className="text-purple-400 font-semibold">💜 Passion for 3D Tracking</p>
                  </div>
                )}

                {expandedSkill === 'Python' && (
                  <div className="mt-4 p-3 bg-blue-900/20 rounded-lg border border-blue-700/30">
                    <p className="text-blue-400 font-semibold">🔧 Pipeline Automation</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillsAccordion;