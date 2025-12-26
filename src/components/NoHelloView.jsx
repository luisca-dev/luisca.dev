import React from 'react';
import { Terminal as TerminalIcon, AlertCircle, CheckCircle, HeartHandshake, ArrowLeft } from 'lucide-react';
import ChatScenario from './ChatScenario';

const NoHelloView = ({ content, setView }) => {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 md:p-10 shadow-2xl relative overflow-hidden animate-in slide-in-from-right duration-500">
        {/* Decorative glow */}
        <div className="absolute top-0 left-0 -ml-20 -mt-20 w-40 h-40 bg-neutral-700 rounded-full blur-[80px] opacity-10"></div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-neutral-400 border-b border-neutral-800 pb-4 mb-4">
            <TerminalIcon size={18} />
            <span className="font-mono text-sm">vim {content.noHelloTitle}</span>
          </div>

          <div className="font-mono text-sm md:text-base leading-relaxed text-neutral-300 space-y-8">
            
            {/* Title & Intro */}
            <div>
              <h2 className="text-xl text-red-400 font-bold mb-4"># {content.noHelloTitle}</h2>
              <p className="border-l-2 border-red-500/50 pl-4 italic text-neutral-400">
                "{content.noHelloIntro}"
              </p>
            </div>

            {/* 1. The Problem */}
            <div>
              <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                <AlertCircle size={16} className="text-red-500" />
                {content.problemTitle}
              </h3>
              <p className="mb-4 text-neutral-400">{content.problemBody}</p>
              
              <ChatScenario 
                chat={content.problemChat} 
                result={content.problemResult} 
                label={content.problemLabel} 
                isSuccess={false} 
              />
            </div>

            {/* 2. The Solution */}
            <div>
              <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                <CheckCircle size={16} className="text-green-500" />
                {content.solutionTitle}
              </h3>
              <p className="mb-4 text-neutral-400">{content.solutionBody}</p>
              
              <ChatScenario 
                chat={content.solutionChat} 
                result={content.solutionResult} 
                label={content.solutionLabel} 
                isSuccess={true} 
              />
            </div>

            {/* 3. Courtesy Note */}
            <div className="bg-neutral-800/30 border-l-4 border-neutral-600 p-4 rounded-r">
              <h3 className="text-white font-bold mb-1 flex items-center gap-2">
                <HeartHandshake size={16} className="text-neutral-400" />
                {content.noteTitle}
              </h3>
              <p className="text-neutral-400 text-sm italic">
                {content.noteBody}
              </p>
            </div>

          </div>

          <div className="pt-8 flex justify-start border-t border-neutral-800 mt-6">
            <button 
              onClick={() => setView('home')}
              className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>{content.backBtn}</span>
            </button>
          </div>
        </div>
    </div>
  );
};

export default NoHelloView;
