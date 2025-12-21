import React from 'react';

const DevProfile = ({ content }) => {
  return (
    <div className="text-sm md:text-base leading-relaxed pl-4 md:pl-8 border-l-2 border-neutral-800 font-medium">
      <div className="text-neutral-400">
        <span className="text-red-500">const</span> <span className="text-white">developer</span> = <span className="text-yellow-100">{`{`}</span>
      </div>
      
      <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
        {content.keys.name}: <span className="text-green-400">"Luiscarlo Tarazona"</span>,
      </div>
      <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
        {content.keys.alias}: <span className="text-green-400">"Luisca"</span>,
      </div>
      <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
        {content.keys.role}: <span className="text-green-400">"{content.roleValue}"</span>,
      </div>
      <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
        {content.keys.status}: <span className="text-green-400">"{content.statusValue}"</span>,
      </div>
      
      <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
        {content.keys.passions}: [
        {content.passionsLabels.map((passion, i) => (
          <React.Fragment key={i}>
            <span className="text-purple-300">"{passion}"</span>
            {i < content.passionsLabels.length - 1 && ", "}
          </React.Fragment>
        ))}
        ],
      </div>

      <div className="pl-6 text-neutral-300 hover:bg-neutral-800/30 rounded px-2 -ml-2 transition-colors">
        {content.keys.hobbies}: [
        {content.hobbiesLabels.map((hobby, i) => (
          <React.Fragment key={i}>
            <span className="text-orange-300">"{hobby}"</span>
            {i < content.hobbiesLabels.length - 1 && ", "}
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
