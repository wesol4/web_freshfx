import { Project, Skill } from './types';

import { SiHoudini, SiBlender, SiPython, SiNuke, SiAdobeaftereffects } from 'react-icons/si';
export const NAME = "Freshfx";
export const ROLES = [
  "VFX Artist",
  "Houdini Artist",
  "Compositing",
];

export const ABOUT_TEXT = "I am a passionate VFX artist with experience in Houdini, Nuke, and complex simulations. I specialize in particle effects, explosions, compositing, and 3D tracking. I love crafting cinematic visuals and solving technical challenges to bring stories to life on screen.";

export const SKILLS: Skill[] = [
  { name: "Houdini", icon: <SiHoudini className="text-4xl" /> },
  { name: "Nuke", icon: <SiNuke className="text-4xl" /> },
  { name: "After Effects", icon: <SiAdobeaftereffects className="text-4xl" /> },
  { name: "Python", icon: <SiPython className="text-4xl" /> },
  { name: "Blender", icon: <SiBlender className="text-4xl" /> },
];

export const PROJECTS: Project[] = [
  {
    title: "VFX Showreel",
    description: "Selection of my professional VFX work — including particle simulations, explosions, compositing, tracking and FX-driven shots made in Houdini and Nuke.",
    image: "/project-showreel.png",
    githubLink: "",
    demoLink: "https://vimeo.com/229182428",
    videoEmbedUrl: "https://player.vimeo.com/video/229182428"
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://www.linkedin.com/in/pawel-wesolowski/",
  twitter: "https://x.com/wesol4",
};

export const HERO_IMAGE = "/hero.png";
export const ABOUT_IMAGE = "/about.png";
