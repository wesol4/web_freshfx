import React, { useState, useRef, useEffect } from 'react';
import { SKILLS, SKILL_DETAILS } from '../data/skills';
import SectionReveal from './SectionReveal';

const SkillsAccordion: React.FC = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggleSkill = (skillName: string) => {
    setExpandedSkill(prev => (prev === skillName ? null : skillName));
  };

  useEffect(() => {
    if (expandedSkill && panelRef.current) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  }, [expandedSkill]);

  const activeSkill = expandedSkill ? SKILL_DETAILS[expandedSkill] : null;
  const activeIcon = expandedSkill ? SKILLS.find(s => s.name === expandedSkill)?.icon : null;

  return (
    <SectionReveal animation="fade-up">
      <div className="mt-24">
      <h2 className="text-4xl font-bold mb-12 text-center">
        Professional <strong className="text-[#c770f0]">Skillset</strong>
      </h2>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mb-4">
          {SKILLS.map((skill, index) => {
            const isExpanded = expandedSkill === skill.name;
            const detail = SKILL_DETAILS[skill.name];
            return (
              <button
                key={index}
                onClick={() => toggleSkill(skill.name)}
                className={`w-full h-32 flex flex-col items-center justify-center rounded-lg border transition-all duration-300 cursor-pointer
                  ${isExpanded
                    ? 'border-[#c770f0] bg-[#c770f0]/10 shadow-lg shadow-[#c770f0]/20 scale-105'
                    : 'bg-gray-800/50 border-gray-700 hover:border-[#c770f0] hover:scale-105 hover:shadow-lg hover:shadow-[#c770f0]/20'
                  }`}
              >
                <div className="text-[#c770f0] mb-2 flex-shrink-0">{skill.icon}</div>
                <p className="text-sm font-medium text-center px-2">{skill.name}</p>
                <p className="text-xs text-gray-400 text-center px-2 mt-1 leading-tight">{detail?.experience}</p>
              </button>
            );
          })}
        </div>

        <div
          ref={panelRef}
          className={`transition-all duration-500 ease-in-out ${
            expandedSkill ? 'opacity-100 mt-4' : 'opacity-0 pointer-events-none h-0 overflow-hidden'
          }`}
        >
          {expandedSkill && activeSkill && (
            <div className="bg-white/5 rounded-lg p-6 md:p-8 shadow-xl shadow-black/30">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="text-[#c770f0] mr-4 text-5xl flex-shrink-0">{activeIcon}</div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{expandedSkill}</h3>
                    <p className="text-[#c770f0] font-semibold text-base md:text-lg">{activeSkill.experience}</p>
                  </div>
                </div>
                <button
                  onClick={() => setExpandedSkill(null)}
                  className="ml-4 flex-shrink-0 p-2 rounded-full hover:bg-white/10 transition-colors duration-200 text-gray-400 hover:text-white"
                  aria-label="Close"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="rounded-lg p-5 md:p-6 bg-white/5">
                <p className="text-gray-300 leading-relaxed text-base md:text-lg">{activeSkill.description}</p>
                {activeSkill.badge && (
                  <div className={`mt-4 p-3 ${activeSkill.badge.color} rounded-lg border ${activeSkill.badge.borderColor}`}>
                    <p className={`${activeSkill.badge.textColor} font-semibold`}>{activeSkill.badge.text}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </SectionReveal>
  );
};

export default SkillsAccordion;