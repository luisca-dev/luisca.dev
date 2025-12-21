import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Instagram, ChevronRight, Globe, ArrowLeft, Terminal as TerminalIcon, FileText, Clock, AlertCircle, CheckCircle, HeartHandshake } from 'lucide-react';

const LuiscaDev = () => {
  // Estado para controlar la "página" actual: 'home' | 'no-hello'
  const [view, setView] = useState('home');
  const [lang, setLang] = useState('en'); // Default to English
  
  // --- Estados de la Home ---
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  const content = {
    en: {
      log: "console.log('Hello, world! I\\'m Luisca.');",
      keys: {
        name: "name",
        alias: "alias",
        role: "role",
        status: "status",
        hobbies: "hobbies",
        passions: "passions",
        colors: "colors"
      },
      roleValue: "Senior Software Engineer",
      statusValue: "Building awesome things",
      colorsLabels: ["Red", "Black", "White"],
      hobbiesLabels: ["Soccer", "Video Games"],
      passionsLabels: ["Faith", "AI", "Cars", "Food"],
      contactBtn: "Contact",
      email: "hi@luisca.dev",
      footer: "Made with ♥ and code.",
      noHelloLink: "protocol/no-hello",
      
      // Contenido No-Hello EN
      noHelloTitle: "please-dont-say-hello.md",
      noHelloIntro: "The basic premise is simple: Don't just say 'Hello' and wait for a reply. Say 'Hello' and ask your question in the same message.",
      
      problemTitle: "1. The Problem: Unnecessary Interruption",
      problemBody: "When you send just 'Hello', you force the other person to drop what they're doing just to acknowledge your presence, without knowing if it's urgent or trivial. This creates slow, inefficient conversations.",
      problemLabel: "Inefficient Scenario",
      problemChat: [
        { u: "You", m: "Hello.", t: "09:00" },
        { u: "Colleague", m: "Hi, what's up?", t: "09:15" },
        { u: "You", m: "Do you have a moment?", t: "09:16" },
        { u: "Colleague", m: "Yes, tell me.", t: "09:25" },
        { u: "You", m: "The app isn't loading.", t: "09:26" }
      ],
      problemResult: "Result: 25 minutes have passed and you still don't have an answer/solution.",

      solutionTitle: "2. The Solution: The 'No Hello' Approach",
      solutionBody: "Compress the interaction so the other person has all the context needed to answer you as soon as they read the message, even if it's hours later.",
      solutionLabel: "Efficient Scenario",
      solutionChat: [
        { u: "You", m: "Hi Luisca, the app isn't loading, could you check what's happening?", t: "09:00" },
        { u: "Colleague", m: "Sure, checking it now.", t: "09:15" }
      ],
      solutionResult: "Result: You get a useful response from the very first interaction.",

      noteTitle: "Important Note on Courtesy",
      noteBody: "'No Hello' doesn't mean being rude or skipping the greeting. It means not using the greeting as 'bait' to get attention before speaking. Always greet, but attach the greeting to the content.",
      
      backBtn: "cd .."
    },
    es: {
      log: "console.log('Hola, mundo! Soy Luisca.');",
      keys: {
        name: "nombre",
        alias: "alias",
        role: "rol",
        status: "estado",
        hobbies: "pasatiempos",
        passions: "pasiones",
        colors: "colores"
      },
      roleValue: "Senior Software Engineer",
      statusValue: "Creando cosas increíbles",
      colorsLabels: ["Rojo", "Negro", "Blanco"],
      hobbiesLabels: ["Fútbol", "Videojuegos"],
      passionsLabels: ["Fe", "IA", "Autos", "Comida"],
      contactBtn: "Contactar",
      email: "hola@luisca.dev",
      footer: "Hecho con ♥ y código.",
      noHelloLink: "protocolo/no-hello",

      // Contenido No-Hello ES
      noHelloTitle: "por-favor-no-digas-hola.md",
      noHelloIntro: "La premisa básica es: No digas simplemente 'Hola' y esperes una respuesta. Di 'Hola' y haz tu pregunta en el mismo mensaje.",
      
      problemTitle: "1. El Problema: La interrupción innecesaria",
      problemBody: "Cuando envías solo un 'Hola', obligas a la otra persona a dejar lo que está haciendo solo para reconocer tu presencia, sin saber si es urgente o trivial. Esto crea una conversación lenta e ineficiente.",
      problemLabel: "Escenario Ineficiente",
      problemChat: [
        { u: "Tú", m: "Hola.", t: "09:00" },
        { u: "Colega", m: "Hola, ¿qué tal?", t: "09:15" },
        { u: "Tú", m: "¿Tienes un momento?", t: "09:16" },
        { u: "Colega", m: "Sí, dime.", t: "09:25" },
        { u: "Tú", m: "La app no carga.", t: "09:26" }
      ],
      problemResult: "Resultado: Han pasado 25 minutos y aún no tienes una respuesta/solución.",

      solutionTitle: "2. La Solución: El enfoque 'No Hello'",
      solutionBody: "La idea es comprimir la interacción para que la otra persona tenga todo el contexto necesario para responderte en cuanto lea el mensaje, incluso si es horas después.",
      solutionLabel: "Escenario Eficiente",
      solutionChat: [
        { u: "Tú", m: "Hola Luisca, la app no carga, ¿podrías revisar qué sucede?", t: "09:00" },
        { u: "Colega", m: "Claro, ahora lo reviso.", t: "09:15" }
      ],
      solutionResult: "Resultado: Obtienes una respuesta útil desde la 1ra interacción.",

      noteTitle: "Nota Importante sobre la Cortesía",
      noteBody: "\"No Hello\" no significa ser grosero ni dejar de saludar. Significa no usar el saludo como un \"cebo\" para obtener atención antes de hablar. Siempre se debe saludar, pero el saludo debe ir pegado al contenido.",

      backBtn: "cd .."
    }
  };

  const currentContent = content[lang];
  const fullText = currentContent.log;

  // Efecto de máquina de escribir (Solo corre si estamos en Home)
  useEffect(() => {
    if (view !== 'home') return;
    
    setText(''); 
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80); 

    return () => clearInterval(typingInterval);
  }, [fullText, view]);

  // Efecto de parpadeo del cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const toggleLanguage = () => {
    setLang(prev => prev === 'en' ? 'es' : 'en');
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white font-mono flex flex-col items-center justify-center p-4 selection:bg-red-500 selection:text-white relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      {/* Language Switcher - Top Right */}
      <div className="absolute top-6 right-6 z-20">
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-xs text-neutral-400 hover:text-white hover:border-red-500 transition-all duration-300"
        >
          <Globe size={14} />
          <span className={lang === 'en' ? 'text-red-500 font-bold' : ''}>EN</span>
          <span className="text-neutral-700">/</span>
          <span className={lang === 'es' ? 'text-red-500 font-bold' : ''}>ES</span>
        </button>
      </div>

      {/* Main Content Container */}
      <main className="z-10 w-full max-w-3xl animate-in fade-in zoom-in duration-700 min-h-[500px] flex flex-col justify-center my-10">
        
        {/* Header / Top Bar */}
        <div className="flex justify-between items-center mb-8 px-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"></div>
            <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
            <div className="w-3 h-3 rounded-full bg-neutral-700"></div>
          </div>
          <div className="text-neutral-500 text-sm font-semibold tracking-wide flex items-center gap-2">
            <span>luisca.dev</span>
            {view === 'no-hello' && <span className="text-neutral-700">/ no-hello</span>}
          </div>
        </div>

        {/* --- VIEW: HOME --- */}
        {view === 'home' && (
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 md:p-10 shadow-2xl relative overflow-hidden group hover:border-red-900/50 transition-colors duration-500">
            
            {/* Decorative glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-40 h-40 bg-red-600 rounded-full blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity"></div>

            <div className="space-y-8">
              {/* The Typing Title */}
              <div className="min-h-[2.5rem] md:min-h-[3rem] flex items-center text-lg md:text-2xl text-neutral-300 flex-wrap">
                <ChevronRight className="text-red-500 mr-2 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="text-red-400 mr-2 flex-shrink-0">root@luisca:~$</span>
                <span className="break-words">{text}</span>
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} ml-1 w-2.5 h-5 md:h-7 bg-red-500 inline-block align-middle transition-opacity flex-shrink-0`}></span>
              </div>

              {/* The "JSON" Object Representation */}
              <div className="text-sm md:text-base leading-relaxed pl-4 md:pl-8 border-l-2 border-neutral-800 font-medium">
                <div className="text-neutral-400">
                  <span className="text-red-500">const</span> <span className="text-white">developer</span> = <span className="text-yellow-100">{`{`}</span>
                </div>
                
                <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
                  {currentContent.keys.name}: <span className="text-green-400">"Luiscarlo Tarazona"</span>,
                </div>
                <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
                  {currentContent.keys.alias}: <span className="text-green-400">"Luisca"</span>,
                </div>
                <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
                  {currentContent.keys.role}: <span className="text-green-400">"{currentContent.roleValue}"</span>,
                </div>
                <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
                  {currentContent.keys.status}: <span className="text-green-400">"{currentContent.statusValue}"</span>,
                </div>
                
                <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
                  {currentContent.keys.passions}: [
                  {currentContent.passionsLabels.map((passion, i) => (
                    <React.Fragment key={i}>
                      <span className="text-purple-300">"{passion}"</span>
                      {i < currentContent.passionsLabels.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                  ],
                </div>

                <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
                  {currentContent.keys.hobbies}: [
                  {currentContent.hobbiesLabels.map((hobby, i) => (
                    <React.Fragment key={i}>
                      <span className="text-orange-300">"{hobby}"</span>
                      {i < currentContent.hobbiesLabels.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                  ],
                </div>

                <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
                  {currentContent.keys.colors}: [
                  {currentContent.colorsLabels.map((color, i) => (
                    <React.Fragment key={i}>
                      <span className={
                        i === 0 ? "text-red-500" : 
                        i === 1 ? "text-neutral-500" : 
                        "text-white"
                      }>"{color}"</span>
                      {i < currentContent.colorsLabels.length - 1 && ", "}
                    </React.Fragment>
                  ))}
                  ]
                </div>
                
                <div className="text-neutral-400">
                  <span className="text-yellow-100">{`}`};</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
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
                href={`mailto:${currentContent.email}`}
                className="group flex items-center gap-2 px-5 py-2.5 bg-red-600 text-white border border-red-500 hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] rounded transition-all duration-300"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                <span>{currentContent.contactBtn}</span>
              </a>
            </div>
            
            {/* No-Hello Link - Centered Below Buttons */}
            <div className="mt-8 flex justify-center w-full">
              <button 
                onClick={() => setView('no-hello')}
                className="text-neutral-500 hover:text-red-400 text-xs md:text-sm flex items-center gap-1 transition-colors underline decoration-dotted underline-offset-4"
              >
                <FileText size={14} />
                {currentContent.noHelloLink}
              </button>
            </div>

          </div>
        )}

        {/* --- VIEW: NO HELLO --- */}
        {view === 'no-hello' && (
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 md:p-10 shadow-2xl relative overflow-hidden animate-in slide-in-from-right duration-500">
             {/* Decorative glow */}
             <div className="absolute top-0 left-0 -ml-20 -mt-20 w-40 h-40 bg-neutral-700 rounded-full blur-[80px] opacity-10"></div>
             
             <div className="space-y-6">
                <div className="flex items-center gap-2 text-neutral-400 border-b border-neutral-800 pb-4 mb-4">
                  <TerminalIcon size={18} />
                  <span className="font-mono text-sm">vim {currentContent.noHelloTitle}</span>
                </div>

                <div className="font-mono text-sm md:text-base leading-relaxed text-neutral-300 space-y-8">
                  
                  {/* Title & Intro */}
                  <div>
                    <h2 className="text-xl text-red-400 font-bold mb-4"># {currentContent.noHelloTitle}</h2>
                    <p className="border-l-2 border-red-500/50 pl-4 italic text-neutral-400">
                      "{currentContent.noHelloIntro}"
                    </p>
                  </div>

                  {/* 1. The Problem */}
                  <div>
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <AlertCircle size={16} className="text-red-500" />
                      {currentContent.problemTitle}
                    </h3>
                    <p className="mb-4 text-neutral-400">{currentContent.problemBody}</p>
                    
                    <div className="bg-red-950/10 border border-red-900/20 rounded p-4">
                      <div className="text-red-500 text-xs font-bold uppercase mb-3 tracking-wider">{currentContent.problemLabel}</div>
                      <div className="space-y-2 text-xs md:text-sm font-sans">
                        {currentContent.problemChat.map((msg, i) => (
                          <div key={i} className={`flex gap-2 ${msg.u === 'You' || msg.u === 'Tú' ? 'flex-row-reverse' : ''}`}>
                             {/* Added px-4 py-2 for better horizontal margins */}
                             <div className={`px-4 py-2 rounded-lg max-w-[80%] ${msg.u === 'You' || msg.u === 'Tú' ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-800/50 text-neutral-500'}`}>
                                <p>{msg.m}</p>
                             </div>
                             <span className="text-[10px] text-neutral-600 self-end mb-1">{msg.t}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 pt-2 border-t border-red-900/20 text-red-400 text-xs italic">
                        {currentContent.problemResult}
                      </div>
                    </div>
                  </div>

                  {/* 2. The Solution */}
                  <div>
                    <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                      <CheckCircle size={16} className="text-green-500" />
                      {currentContent.solutionTitle}
                    </h3>
                    <p className="mb-4 text-neutral-400">{currentContent.solutionBody}</p>
                    
                    <div className="bg-green-950/10 border border-green-900/20 rounded p-4">
                      <div className="text-green-500 text-xs font-bold uppercase mb-3 tracking-wider">{currentContent.solutionLabel}</div>
                      <div className="space-y-2 text-xs md:text-sm font-sans">
                        {currentContent.solutionChat.map((msg, i) => (
                          <div key={i} className={`flex gap-2 ${msg.u === 'You' || msg.u === 'Tú' ? 'flex-row-reverse' : ''}`}>
                             {/* Added px-4 py-2 for better horizontal margins */}
                             <div className={`px-4 py-2 rounded-lg max-w-[80%] ${msg.u === 'You' || msg.u === 'Tú' ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-800/50 text-neutral-500'}`}>
                                <p>{msg.m}</p>
                             </div>
                             <span className="text-[10px] text-neutral-600 self-end mb-1">{msg.t}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-3 pt-2 border-t border-green-900/20 text-green-400 text-xs italic">
                        {currentContent.solutionResult}
                      </div>
                    </div>
                  </div>

                  {/* 3. Courtesy Note */}
                  <div className="bg-neutral-800/30 border-l-4 border-neutral-600 p-4 rounded-r">
                    <h3 className="text-white font-bold mb-1 flex items-center gap-2">
                      <HeartHandshake size={16} className="text-neutral-400" />
                      {currentContent.noteTitle}
                    </h3>
                    <p className="text-neutral-400 text-sm italic">
                      {currentContent.noteBody}
                    </p>
                  </div>

                </div>

                <div className="pt-8 flex justify-start border-t border-neutral-800 mt-6">
                  <button 
                    onClick={() => setView('home')}
                    className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
                  >
                    <ArrowLeft size={16} />
                    <span>{currentContent.backBtn}</span>
                  </button>
                </div>
             </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-12 text-center text-neutral-600 text-xs">
          <p>&copy; {new Date().getFullYear()} luisca.dev | {currentContent.footer}</p>
        </footer>

      </main>
    </div>
  );
};

export default LuiscaDev;