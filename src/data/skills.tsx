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