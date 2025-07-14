import { Project, Skill } from './types';

import { SiHoudini, SiBlender, SiPython, SiNuke, SiAdobeaftereffects } from 'react-icons/si';
export const NAME = "Paweł Wesołowski";
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
  {
    title: "Explosion FX — Houdini & Nuke",
    description: "Custom pyro simulation with full control over velocity fields and dissipation. Scene rendered with Redshift, final compositing and color correction done in Nuke.",
    image: "/project-explosion.jpg",
    githubLink: "",
    demoLink: ""
  },
  {
    title: "CG Integration & Tracking",
    description: "Camera tracking and 3D matchmove for integration of CG assets into live-action plate. Utilized PFTrack and Nuke for solving, projection and grading.",
    image: "/project-tracking.jpg",
    githubLink: "",
    demoLink: ""
  },
  {
    title: "Procedural FX Tools in Houdini",
    description: "Developed reusable FX tools in Houdini using VEX and VOPs — including dust trails, debris scattering and impact simulations for shot reuse and flexibility.",
    image: "/project-tools.jpg",
    githubLink: "",
    demoLink: ""
  },
];



export const SOCIAL_LINKS = {
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

export const HERO_IMAGE = "/hero.png";
export const ABOUT_IMAGE = "/about.png";
