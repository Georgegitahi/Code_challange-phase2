import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};
function BotCard({id, name, avatar_url, bot_class, catchphrase, 
  health, damage, armor, setBotArmy, botArmy}) {

    const singleBot = {"id": id, "name": name, "avatar_url": avatar_url, "catchphrase": catchphrase,
    "health": health, "damage": damage, "armor": armor}
  
    //Deleting Bot from collection
    function handleDelete(e) {
      e.preventDefault()
      
      fetch(`https://code-challange-phase2.onrender.com/bots/${id}`,{
        method: "DELETE"
      })
  
      console.log("Bot deleted  successfully")
    }
  
    function handleYourArmy(bot) {
      if (!botArmy.find(includedBot => includedBot.id === bot.id)) {
     
        setBotArmy([...botArmy, bot]);
      } else {
       
        const updatedBotArmy = botArmy.filter(includedBot => includedBot.id !== bot.id);
        setBotArmy(updatedBotArmy);
      }
    }
  
  return (
    <div className="ui column">
    <div
      className="ui card"
      key={id}
      onClick={() => handleYourArmy(singleBot)} 
    >
      <div className="image">
        <img alt="oh no!" src={avatar_url} />
      </div>
      <div className="content">
        <div className="header">
          {name}
          <i className={botTypeClasses[{bot_class}]} />
        </div>
        <div className="meta text-wrap">
          <small>{catchphrase}</small>
        </div>
      </div>
      <div className="extra content">
        <span>
          <i className="icon heartbeat" />
          {health}
        </span>

        <span>
          <i className="icon lightning" />
          {damage}
        </span>
        <span>
          <i className="icon shield" />
          {armor}
        </span>
        <span>
          <div className="ui center aligned segment basic">
            <button
              className="ui mini red button"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </span>
      </div>
    </div>
  </div>
);
}




export default BotCard;
