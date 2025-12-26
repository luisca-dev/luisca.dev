import React from 'react';

const DevProfile = ({ content }) => {
  return (
    <div className="text-sm md:text-base leading-relaxed pl-4 md:pl-8 border-l-2 border-neutral-800 font-medium">
      <div className="text-neutral-400">
        <span className="text-red-500">const</span> <span className="text-white">luisca</span> = <span className="text-yellow-100">{`{`}</span>
      </div>
      
      <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
        {content.keys.name}: <span className="text-green-400">"Luiscarlo Tarazona"</span>,
      </div>
      
      <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
        {content.keys.role}: <span className="text-green-400">"{content.roleValue}"</span>,
      </div>
      
      {/* Status Lambda Chain */}
      <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors group/status">
        {content.keys.status}: <span className="text-purple-400">() =&gt;</span> 
        {content.statusMethods.map((method, i) => (
          <React.Fragment key={i}>
            <span className="text-blue-400">{method}</span>()
            {i < content.statusMethods.length - 1 && "."}
          </React.Fragment>
        ))}
        ,
        <span className="text-neutral-500 italic ml-3 opacity-70 group-hover/status:opacity-100 transition-opacity select-none">{content.statusComment}</span>
      </div>
      
      {/* Unified Interests Array */}
      <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
        {content.keys.interests}: [
        {content.interestsLabels.map((item, i) => (
          <React.Fragment key={i}>
            <span className="text-orange-300">"{item}"</span>
            {i < content.interestsLabels.length - 1 && ", "}
          </React.Fragment>
        ))}
        ],
      </div>

      <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
        {content.keys.colors}: [
        {content.colorsLabels.map((color, i) => (
          <React.Fragment key={i}>
            <span className={
              i === 0 ? "text-red-500" : 
              i === 1 ? "text-neutral-500" : 
              "text-white"
            }>"{color}"</span>
            {i < content.colorsLabels.length - 1 && ", "}
          </React.Fragment>
        ))}
        ]
      </div>
      
      <div className="text-neutral-400">
        <span className="text-yellow-100">{`}`};</span>
      </div>
    </div>
  );
};

export default DevProfile;
