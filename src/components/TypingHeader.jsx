import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, MousePointer2, Lightbulb } from 'lucide-react';

const TypingHeader = ({ content, lang, replayKey }) => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  
  // Fases de la animación: 
  // 'typing_bug' -> 'idle_bug' -> 'moving_mouse' -> 'menu_open' -> 'moving_to_option' -> 'fixing' -> 'done'
  const [typingPhase, setTypingPhase] = useState('idle'); 
  
  // Estado para la posición del mouse falso
  const [mousePos, setMousePos] = useState({ x: '100%', y: '100%', opacity: 0 });
  
  // Posición donde se abrió el menú (para que se quede fijo)
  const [menuPos, setMenuPos] = useState({ x: '0', y: '0' });

 // Refs for position calculation
  const containerRef = useRef(null);
  const errorRef = useRef(null);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Animation Sequence
  useEffect(() => {
    let isMounted = true;

    const runSequence = async () => {
      // 0. Reset inicial
      setText(''); 
      setMousePos({ x: '100%', y: '100%', opacity: 0 }); 
      setTypingPhase('typing_bug');
      
      const bugText = content.bugLog;
      
      // 1. Escribir el "Bug"
      for (let i = 0; i <= bugText.length; i++) {
        if (!isMounted) return;
        setText(bugText.slice(0, i));
        await new Promise(r => setTimeout(r, 40)); 
      }

      // 2. Mostrar error
      setTypingPhase('idle_bug');
      await new Promise(r => setTimeout(r, 800)); 
      if (!isMounted) return;

      // 3. Mover el Mouse al Error
      setTypingPhase('moving_mouse');
      setMousePos({ x: '90%', y: '150%', opacity: 1 });
      await new Promise(r => setTimeout(r, 100));
      
      // Calcular posición del error dinámicamente
      let targetX = '50%';
      let targetY = '50%';

      if (containerRef.current && errorRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const errorRect = errorRef.current.getBoundingClientRect();

        // Calculamos el centro del elemento subrayado relativo al contenedor
        const relativeX = errorRect.left - containerRect.left + (errorRect.width / 2);
        const relativeY = errorRect.top - containerRect.top + (errorRect.height / 2);

        targetX = `${relativeX}px`;
        targetY = `${relativeY}px`;
      }
      
      setMousePos({ x: targetX, y: targetY, opacity: 1 });
      await new Promise(r => setTimeout(r, 800));
      if (!isMounted) return;

      // 4. Abrir Menú (Mouse quieto, Menú aparece)
      setMenuPos({ x: targetX, y: targetY }); // Fijamos la posición del menú
      setTypingPhase('menu_open');
      await new Promise(r => setTimeout(r, 400));
      if (!isMounted) return;

      // 5. Mover Mouse a la Opción (Simular elección)
      setTypingPhase('moving_to_option');
      setMousePos({ 
        x: `calc(${targetX} + 20px)`, 
        y: `calc(${targetY} + 45px)`, // Bajamos hacia la opción
        opacity: 1 
      });
      await new Promise(r => setTimeout(r, 600));
      if (!isMounted) return;

      // 6. Aplicar Fix (Clic en opción)
      setTypingPhase('fixing');
      await new Promise(r => setTimeout(r, 300)); // Breve highlight
      
      // Cambio instantáneo
      setText(content.log); 
      setMousePos(prev => ({ ...prev, opacity: 0 })); // Ocultar mouse
      
      // 7. Finalizar
      setTypingPhase('done');
    };

    runSequence();

    return () => { isMounted = false; };
  }, [content.bugLog, content.log, lang, replayKey]);

  return (
    <div className="flex flex-col gap-2"> 
      {/* Styles for Red-To-White Animation */}
      <style>{`
        @keyframes redToWhite {
          0% { color: #ef4444; }
          100% { color: white; }
        }
        .animate-red-to-white {
          animation: redToWhite 2s ease-out forwards;
        }
      `}</style>

      {/* Prompt */}
      <div className="flex items-center text-lg md:text-2xl text-neutral-300">
        <ChevronRight className="text-red-500 mr-2 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
        <span className="text-red-400 font-bold mr-2">root@luisca:~$</span>
      </div>

      {/* Input Area */}
      <div className="flex items-center text-lg md:text-2xl text-neutral-300 relative min-h-[3rem] pl-4 md:pl-6">
         <span className="text-neutral-600 mr-3 select-none">{`>`}</span>

         <div className="relative flex-1" ref={containerRef}>
            <span className="break-words relative">
              {(typingPhase === 'idle_bug' || typingPhase === 'moving_mouse' || typingPhase === 'menu_open' || typingPhase === 'moving_to_option' || typingPhase === 'fixing') ? (
                <>
                  {text.split(/(\bLuisca\b|\bWorld\b|\bmundo\b)/g).map((part, i) => {
                     if (part === 'Luisca' || part === 'World' || part === 'mundo') {
                        // Asignamos ref solo a "Luisca" que es el error objetivo (o el primero que aparezca)
                        const isTarget = part === 'Luisca';
                        return <span key={i} ref={isTarget ? errorRef : null} className="underline decoration-wavy decoration-red-500 underline-offset-4 decoration-2">{part}</span>
                     }
                     return part;
                  })}
                </>
              ) : typingPhase === 'done' ? (
                 <>
                  {text.split(/(\bLuisca\b|\bWorld\b|\bmundo\b)/g).map((part, i) => {
                     if (part === 'Luisca' || part === 'World' || part === 'mundo') {
                        return <span key={i} className="animate-red-to-white font-medium">{part}</span>
                     }
                     return part;
                  })}
                 </>
              ) : (
                text
              )}
            </span>

            {/* Blinking Cursor */}
            <span className={`${(showCursor && typingPhase !== 'moving_mouse' && typingPhase !== 'menu_open' && typingPhase !== 'moving_to_option' && typingPhase !== 'fixing') ? 'opacity-100' : 'opacity-0'} ml-1 w-2.5 h-5 md:h-7 bg-red-500 inline-block align-middle transition-opacity`}></span>

            {/* -------------------------------------------------- */}
            {/* FIXED CONTEXT MENU (Separated from mouse) */}
            {/* -------------------------------------------------- */}
            {(typingPhase === 'menu_open' || typingPhase === 'moving_to_option' || typingPhase === 'fixing') && (
              <div 
                className="absolute min-w-[220px] bg-[#1e1e1e] border border-[#454545] rounded-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-100 origin-top-left z-40"
                style={{
                  left: `calc(${menuPos.x} + 5px)`, // Slight offset from click
                  top: `calc(${menuPos.y} + 15px)`
                }}
              >
                 <div className="px-3 py-1.5 border-b border-[#454545] text-xs text-neutral-400 flex items-center gap-2">
                   <Lightbulb size={12} className="text-yellow-500" />
                   {content.fixMenuTitle}
                 </div>
                 
                 <div className={`px-3 py-2 text-xs md:text-sm flex flex-col gap-1 cursor-pointer transition-colors ${typingPhase === 'fixing' ? 'bg-[#094771] text-white' : 'text-neutral-200'}`}>
                   <span className="font-medium">{content.fixMenuAction}</span>
                   <span className="text-[10px] opacity-70 font-mono bg-black/20 px-1 rounded w-fit">console.log(...)</span>
                 </div>
              </div>
            )}

            {/* -------------------------------------------------- */}
            {/* FAKE MOUSE CURSOR */}
            {/* -------------------------------------------------- */}
            <div 
              className="absolute pointer-events-none transition-all duration-1000 ease-in-out z-50"
              style={{
                left: mousePos.x,
                top: mousePos.y,
                opacity: mousePos.opacity
              }}
            >
              <MousePointer2 
                className="text-white drop-shadow-md fill-black" 
                size={24} 
                style={{ transform: 'rotate(-10deg)' }}
              />
            </div>
         </div>
      </div>
    </div>
  );
};

export default TypingHeader;
