import React from 'react';

const ChatScenario = ({ chat, result, label, isSuccess }) => {
  const bgColorClass = isSuccess ? 'bg-green-950/10' : 'bg-red-950/10';
  const borderColorClass = isSuccess ? 'border-green-900/20' : 'border-red-900/20';
  const labelColorClass = isSuccess ? 'text-green-500' : 'text-red-500';
  const resultColorClass = isSuccess ? 'text-green-400' : 'text-red-400';

  return (
    <div className={`${bgColorClass} border ${borderColorClass} rounded p-4`}>
      <div className={`${labelColorClass} text-xs font-bold uppercase mb-3 tracking-wider`}>{label}</div>
      <div className="space-y-2 text-xs md:text-sm font-sans">
        {chat.map((msg, i) => (
          <div key={i} className={`flex gap-2 ${msg.u === 'You' || msg.u === 'Tú' ? 'flex-row-reverse' : ''}`}>
              <div className={`px-4 py-2 rounded-lg max-w-[80%] ${msg.u === 'You' || msg.u === 'Tú' ? 'bg-neutral-800 text-neutral-300' : 'bg-neutral-800/50 text-neutral-500'}`}>
                <p>{msg.m}</p>
              </div>
              <span className="text-[10px] text-neutral-600 self-end mb-1">{msg.t}</span>
          </div>
        ))}
      </div>
      <div className={`mt-3 pt-2 border-t ${borderColorClass} ${resultColorClass} text-xs italic`}>
        {result}
      </div>
    </div>
  );
};

export default ChatScenario;
