import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAddBot }) {
  // Your code here

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {/* Collection of all bots  */}

        {bots.map((bot) => {
          return <BotCard key={bot.id} bot={bot} onClick={onAddBot} />;
        })}
      </div>
    </div>
  );
}

export default BotCollection;
