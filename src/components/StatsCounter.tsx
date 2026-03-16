import React from 'react';
import { useCountUp } from '../hooks/useCountUp';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface StatItem {
  end: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { end: 15, suffix: '+', label: 'Years of experience' },
  { end: 20, suffix: '+', label: 'Blender years' },
  { end: 4,  suffix: '',  label: 'Platige Image years' },
];

const StatNumber: React.FC<{ stat: StatItem; trigger: boolean }> = ({ stat, trigger }) => {
  const count = useCountUp({ end: stat.end, duration: 2000, trigger });
  return (
    <div className="text-center px-6">
      <div className="text-4xl md:text-5xl font-bold text-[#c770f0]">
        {count}{stat.suffix}
      </div>
      <div className="text-sm text-gray-400 mt-1 leading-tight">{stat.label}</div>
    </div>
  );
};

const StatsCounter: React.FC = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-wrap justify-center gap-y-6 divide-x divide-gray-700 mt-12"
    >
      {STATS.map((stat, i) => (
        <StatNumber key={i} stat={stat} trigger={isVisible} />
      ))}
    </div>
  );
};

export default StatsCounter;
