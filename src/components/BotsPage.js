import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [listedBots, setListedBots] = useState([]);

  // Fetch Bots
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((r) => r.json())
      .then((bots) => setBots(bots));
  }, []);

  // Add bot to listed bots (army)
  function onAddBot(bot) {
    const foundBot = listedBots.find((listedBot) => {
      return listedBot.id === bot.id;
    });
    if (!foundBot) {
      setListedBots([...listedBots, bot]);
    }
  }

  return (
    <div>
      <YourBotArmy listedBots={listedBots} />
      <BotCollection bots={bots} onAddBot={onAddBot} />
    </div>
  );
}

export default BotsPage;
