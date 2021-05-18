import React from 'react';
import ReactionsWidgetItem from './ReactionsWidgetItem';

const ReactionsWidget = ({ reactions, reactionsCount, userReactions, onSelect }) => {
  return (
    <div>
      <ul className="flex flex-row text-3xl justify-center">
        {reactions.map(reaction => (
          <ReactionsWidgetItem
            key={reaction.label}
            reaction={reaction}
            reactionsCount={reactionsCount}
            userReactions={userReactions}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </div>
  );
};

export default ReactionsWidget;
