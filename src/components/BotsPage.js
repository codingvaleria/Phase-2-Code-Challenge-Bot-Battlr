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

  function onRemoveFromArmy(bot) {
    setListedBots(
      listedBots.filter((listedBot) => {
        if (listedBot.id === bot.id) {
          return false;
        }
        return true;
      })
    );
  }

  function onDelete(bot) {
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        setBots(
          bots.filter((el) => {
            if (el.id !== bot.id) {
              return true;
            }
            return false;
          })
        );
        setListedBots(
          listedBots.filter((el) => {
            if (el.id !== bot.id) {
              return true;
            }
            return false;
          })
        );
      });
  }

  return (
    <div>
      <YourBotArmy
        listedBots={listedBots}
        onRemoveFromArmy={onRemoveFromArmy}
        onDelete={onDelete}
      />
      <BotCollection bots={bots} onAddBot={onAddBot} onDelete={onDelete} />
    </div>
  );
}

export default BotsPage;
