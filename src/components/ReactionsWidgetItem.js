import React, { useState, useEffect } from 'react';

const ReactionsWidgetItem = ({ reaction, reactionsCount, userReactions, onSelect }) => {
  const [isHovered, setHovered] = useState(false);
  const [isSelected, setSelected] = useState('');
  const selectedLabel = userReactions[reaction.label];

  useEffect(() => {
    setSelected(selectedLabel);
  }, [selectedLabel]);

  const handleClick = () => {
    if (isSelected) return;
    setSelected(true);
    onSelect && onSelect(reaction.label);
  };

  return (
    <li className="p-2">
      <div className="flex flex-col items-center">
        <div
          className={`mb-1 text-xs text-disabled-on-surface-0 capitalize transition duration-300 ease-in-out transform ${
            isHovered || isSelected ? `hover:opacity-100` : 'opacity-0 -translate-y-4'
          }`}
        >
          {reaction.label}
        </div>
        <div
          className={`${
            isSelected
              ? `cursor-default -translate-y-1 scale-125`
              : `cursor-pointer hover:-translate-y-1 hover:scale-125`
          } transition duration-100 ease-in-out transform`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={handleClick}
        >
          {reaction.node}
        </div>
        <div className="text-xs">{reactionsCount[reaction.label]}</div>
      </div>
    </li>
  );
};

export default ReactionsWidgetItem;
