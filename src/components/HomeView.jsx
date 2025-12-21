import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import TypingHeader from './TypingHeader';
import DevProfile from './DevProfile';
import SocialLinks from './SocialLinks';
import { FileText } from 'lucide-react';

const HomeView = () => {
  const { content } = useOutletContext();

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 md:p-10 shadow-2xl relative overflow-hidden group hover:border-red-900/50 transition-colors duration-500">
      
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-red-600 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>

      <div className="space-y-8">
        {/* The Typing Title */}
        <TypingHeader fullText={content.log} />

        {/* The "JSON" Object Representation */}
        <DevProfile content={content} />
      </div>

      {/* Action Buttons */}
      <SocialLinks email={content.email} contactBtn={content.contactBtn} />
      
      {/* No-Hello Link - Centered Below Buttons */}
      <div className="mt-8 flex justify-center w-full">
        <Link 
          to="/no-hello"
          className="text-neutral-500 hover:text-red-400 text-xs md:text-sm flex items-center gap-1 transition-colors underline decoration-dotted underline-offset-4"
        >
          <FileText size={14} />
          {content.noHelloLink}
        </Link>
      </div>

    </div>
  );
};

export default HomeView;
