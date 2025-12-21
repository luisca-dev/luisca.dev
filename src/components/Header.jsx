import React from 'react';

const Header = ({ view }) => {
  return (
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
  );
};

export default Header;
