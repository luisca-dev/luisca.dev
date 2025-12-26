import React, { useState } from 'react';
import TypingHeader from './TypingHeader';
import DevProfile from './DevProfile';
import SocialLinks from './SocialLinks';
import { FileText, RotateCcw } from 'lucide-react';

const HomeView = ({ content, lang, setView }) => {
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey(prev => prev + 1);
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 md:p-10 shadow-2xl relative overflow-hidden group hover:border-red-900/50 transition-colors duration-500">
      
      {/* Replay Button - Top Right of Code Block */}
      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button 
          onClick={handleReplay}
          className="p-2 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-full transition-colors"
          title="Re-run animation"
        >
          <RotateCcw size={16} />
        </button>
      </div>

      {/* Decorative glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-red-600 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>

      <div className="space-y-8">
        {/* ANIMATED HEADER */}
        <TypingHeader content={content} lang={lang} replayKey={replayKey} />

        {/* JSON Object */}
        <DevProfile content={content} />
      </div>

      {/* Action Buttons */}
      <SocialLinks email={content.email} contactBtn={content.contactBtn} />
      
      {/* No-Hello Link */}
      <div className="mt-8 flex justify-center w-full">
        <button 
          onClick={() => setView('no-hello')}
          className="text-neutral-500 hover:text-red-400 text-xs md:text-sm flex items-center gap-1 transition-colors underline decoration-dotted underline-offset-4"
        >
          <FileText size={14} />
          {content.noHelloLink}
        </button>
      </div>

    </div>
  );
};

export default HomeView;
