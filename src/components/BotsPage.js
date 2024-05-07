import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { useState, useEffect } from "react";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([])
  const [botArmy, setBotArmy] = useState([])
  useEffect(()=>{
    fetch("https://code-challange-phase2.onrender.com/bots")
    .then(r => r.json())
    .then(data => setBots(data))
    .catch(error => console.error(error))
  
  },[])
  
  return (
    <div>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy}/>
      <BotCollection bots={bots} botArmy={botArmy} setBotArmy={setBotArmy}/>
    </div>
  )
}

export default BotsPage;
