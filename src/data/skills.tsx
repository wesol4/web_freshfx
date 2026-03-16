import { Skill } from '../types';
import { SiAdobeaftereffects, SiBlender, SiHoudini, SiNuke, SiPython, SiUnrealengine } from 'react-icons/si';
import SiSynthEyes from "../assets/icons/SiSynthEyes";

export const SKILLS: Skill[] = [
  { name: "Houdini", icon: <SiHoudini className="text-4xl" /> },
  { name: "Nuke", icon: <SiNuke className="text-4xl" /> },
  { name: "Unreal Engine", icon: <SiUnrealengine className="text-4xl" /> },
  { name: "SynthEyes", icon: <SiSynthEyes size={40} /> },
  { name: "After Effects", icon: <SiAdobeaftereffects className="text-4xl" /> },
  { name: "Python", icon: <SiPython className="text-4xl" /> },
  { name: "Blender", icon: <SiBlender className="text-4xl" /> },
];

export interface SkillDetail {
  description: string;
  experience: string;
  badge?: { color: string; borderColor: string; textColor: string; text: string };
}

export const SKILL_DETAILS: Record<string, SkillDetail> = {
  Houdini: {
    description: '15 years of Houdini experience across feature films, commercials, and broadcast. Specialising in pyro, destruction, fluid and particle simulations — building fully procedural FX systems that are both artist-friendly and production-ready.',
    experience: '15+ years · films, commercials, broadcast',
  },
  Nuke: {
    description: 'High-end compositing for film and television, including work on the Netflix series "Liberator". Proficient in deep compositing, 3D camera integration, rotoscoping, and seamless CGI-to-live-action blending.',
    experience: 'Netflix — "Liberator" · feature films',
    badge: { color: 'bg-red-900/20', borderColor: 'border-red-700/30', textColor: 'text-red-400', text: '🎬 Netflix — "Liberator"' },
  },
  'Unreal Engine': {
    description: "4 years of real-time production experience at Platige Image — one of Europe's leading VFX studios. Delivered a virtual production project that received 2nd place at the AEAF, one of the most prestigious VFX awards globally.",
    experience: 'Platige Image · AEAF 2nd place',
    badge: { color: 'bg-yellow-900/20', borderColor: 'border-yellow-700/30', textColor: 'text-yellow-400', text: '🏆 AEAF Award — 2nd Place · Platige Image' },
  },
  SynthEyes: {
    description: 'Precision 3D camera and object tracking for complex VFX shots. Using SynthEyes to achieve rock-solid track data that makes CGI integration invisible — whether on handheld footage, aerial plates, or challenging lighting conditions.',
    experience: '3D tracking specialist',
  },
  'After Effects': {
    description: 'Motion graphics, compositing and post-production for advertising and broadcast. Used as a fast turnaround tool for client work, title sequences, and motion design alongside the main VFX pipeline.',
    experience: 'Motion graphics · advertising · broadcast',
  },
  Python: {
    description: 'Pipeline scripting and tool development for Houdini and Nuke — automating repetitive tasks, building custom shelf tools, and creating render farm submission scripts. Focused on practical solutions that save artists time every day.',
    experience: 'Pipeline development · Houdini & Nuke scripting',
    badge: { color: 'bg-blue-900/20', borderColor: 'border-blue-700/30', textColor: 'text-blue-400', text: '🔧 Houdini & Nuke pipeline automation' },
  },
  Blender: {
    description: 'Over 20 years with Blender — the tool that started it all. Still used for rapid prototyping, previz, and personal projects. A deep familiarity with its modelling, rigging and rendering systems underpins a lot of the foundational 3D knowledge I bring to every project.',
    experience: '20+ years · where it all began',
    badge: { color: 'bg-orange-900/20', borderColor: 'border-orange-700/30', textColor: 'text-orange-400', text: '🧡 20 years — where it all began' },
  },
};