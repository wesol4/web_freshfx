import React from 'react';

interface SocialLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, children, className = "" }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`hover:text-[#c770f0] transition-colors duration-300 ${className}`}
    >
      {children}
    </a>
  );
};

export default SocialLink;