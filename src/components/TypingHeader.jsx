import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const TypingHeader = ({ fullText }) => {
  const [text, setText] = useState('');

  // Efecto de máquina de escribir
  useEffect(() => {
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
  }, [fullText]);

  // Efecto de parpadeo del cursor
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-[2.5rem] md:min-h-[3rem] flex items-center text-lg md:text-2xl text-neutral-300 flex-wrap">
      <ChevronRight className="text-red-500 mr-2 w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
      <span className="text-red-400 mr-2 flex-shrink-0">root@luisca:~$</span>
      <span className="break-words">{text}</span>
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} ml-1 w-2.5 h-5 md:h-7 bg-red-500 inline-block align-middle transition-opacity flex-shrink-0`}></span>
    </div>
  );
};

export default TypingHeader;
