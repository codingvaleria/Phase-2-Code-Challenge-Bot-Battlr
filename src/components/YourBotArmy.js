import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ listedBots, onRemoveFromArmy }) {
  //your bot army code here ...
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {listedBots.map((bot) => {
            return (
              <BotCard key={bot.id} bot={bot} onClick={onRemoveFromArmy} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
