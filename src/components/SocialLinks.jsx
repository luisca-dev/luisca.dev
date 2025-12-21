import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const SocialLinks = ({ email, contactBtn }) => {
  return (
    <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
      <a 
        href="https://www.linkedin.com/in/luiscarlo-tarazona/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-5 py-2.5 bg-neutral-950 text-white border border-neutral-700 hover:border-red-500 hover:text-red-400 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
      >
        <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
        <span>LinkedIn</span>
      </a>

      <a 
        href="https://github.com/luisca-dev" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-5 py-2.5 bg-neutral-950 text-white border border-neutral-700 hover:border-red-500 hover:text-red-400 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
      >
        <Github size={18} className="group-hover:scale-110 transition-transform" />
        <span>GitHub</span>
      </a>
      
      <a 
        href="https://www.instagram.com/luisca.dev/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center gap-2 px-5 py-2.5 bg-neutral-950 text-white border border-neutral-700 hover:border-red-500 hover:text-red-400 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
      >
        <Instagram size={18} className="group-hover:scale-110 transition-transform" />
        <span>Instagram</span>
      </a>

      <a 
        href={`mailto:${email}`}
        className="group flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white border border-red-500 hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] rounded transition-all duration-300"
      >
        <Mail size={18} className="group-hover:scale-110 transition-transform" />
        <span>{contactBtn}</span>
      </a>
    </div>
  );
};

export default SocialLinks;
