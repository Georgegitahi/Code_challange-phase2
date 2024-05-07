import React from "react";
import BotCard from  "./BotCard"

function BotCollection({bots, botArmy,setBotArmy}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
       {/* Bots Collection */}
       {bots.map(robo=>
        <BotCard key={robo.id} id={robo.id} 
        name={robo.name} avatar_url={robo.avatar_url}
        bot_class={robo.bot_class} catchphrase={robo.catchphrase}
        health={robo.health} damage={robo.damage} armor={robo.armor}
        botArmy={botArmy} setBotArmy={setBotArmy} bots={bots}
        />)}
      </div>
    </div>
  );
}

export default BotCollection;
