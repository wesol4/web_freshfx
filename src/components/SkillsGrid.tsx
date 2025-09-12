import React from 'react';
import { SKILLS } from '../data/skills';

const skillRoutes: { [key: string]: string } = {
  'Houdini': '/houdini.html',
  'Nuke': '/nuke.html',
  'Unreal Engine': '/unreal-engine.html',
  'SynthEyes': '/syntheyes.html',
  'Python': '/python.html',
  'Blender': '/blender.html',
};

const SkillsGrid: React.FC = () => {
  const handleSkillClick = (skillName: string) => {
    const route = skillRoutes[skillName];
    if (route) {
      window.location.href = route;
    }
  };

  return (
    <div className="mt-24 text-center">
      <h2 className="text-4xl font-bold mb-12">
        Professional <strong className="text-[#c770f0]">Skillset</strong>
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className="w-36 h-36 flex flex-col items-center justify-center bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#c770f0] hover:scale-105 hover:shadow-lg hover:shadow-[#c770f0]/20 transition-all duration-300 cursor-pointer"
            onClick={() => handleSkillClick(skill.name)}
            role="button"
          >
            <div className="text-[#c770f0] mb-2">{skill.icon}</div>
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGrid;