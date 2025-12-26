import React, { useState } from 'react';
import { content } from './data/content';
import LanguageSwitcher from './components/LanguageSwitcher';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import NoHelloView from './components/NoHelloView';

const LuiscaDev = () => {
  const [view, setView] = useState('home');
  const [lang, setLang] = useState('en'); // Default to English
  
  const currentContent = content[lang];

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'es' : 'en');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-mono flex flex-col items-center justify-center p-4 selection:bg-red-500 selection:text-white relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      {/* Language Switcher */}
      <LanguageSwitcher lang={lang} toggleLanguage={toggleLanguage} />

      {/* Main Content Container */}
      <main className="z-10 w-full max-w-3xl animate-in fade-in zoom-in duration-700 min-h-[500px] flex flex-col justify-center my-10">
        
        {/* Header */}
        <Header view={view} />

        {/* Dynamic Content */}
        {view === 'home' ? (
          <HomeView content={currentContent} lang={lang} setView={setView} />
        ) : (
          <NoHelloView content={currentContent} setView={setView} />
        )}

        {/* Footer */}
        <Footer text={currentContent.footer} />

      </main>
    </div>
  );
};

export default LuiscaDev;