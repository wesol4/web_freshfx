import React, {useEffect, useState} from 'react';
import { FaHome, FaProjectDiagram, FaUser, FaFileAlt } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', icon: <FaHome /> },
    { href: '#projects', label: 'Projects', icon: <FaProjectDiagram /> },
    { href: '#about', label: 'About', icon: <FaUser /> },
    { href: '#resume', label: 'Resume', icon: <FaFileAlt /> },
  ];

  return (
      <nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
              scrolled ? 'backdrop-blur-sm bg-black/40' : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="#home" className="text-3xl font-bold text-white">
                freshFX
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="text-gray-300 hover:text-[#c770f0] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 flex items-center gap-2 relative group"
                    >
                      <span className="text-[#c770f0]">{link.icon}</span>
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c770f0] group-hover:w-full transition-all duration-300"></span>
                    </a>
                ))}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                ) : (
                    <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-gray-300 hover:text-[#c770f0] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 flex items-center gap-2 relative group"
                    >
                      <span className="text-[#c770f0]">{link.icon}</span>
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c770f0] group-hover:w-full transition-all duration-300"></span>
                    </a>
                ))}
              </div>
            </div>
        )}
      </nav>
  );
};

export default Navbar;
