import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botArmy ,setBotArmy}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
    <div className="ui five column grid">
      <div className="row bot-army-row">
        {/* return bots cards here */}
        <h1>Your Bot Army: </h1>
        {botArmy.map(robo =>
        <BotCard key={robo.id} id={robo.id} 
        name={robo.name} avatar_url={robo.avatar_url}
        bot_class={robo.bot_class} catchphrase={robo.catchphrase}
        health={robo.health} damage={robo.damage} armor={robo.armor}
        botArmy={botArmy} setBotArmy={setBotArmy}
        />)}          
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
