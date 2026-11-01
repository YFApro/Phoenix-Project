import levelEngine from "./levelEngine";

export default function questRewardEngine(player, quests){

let updatedPlayer={...player};

const updatedQuests=quests.map(q=>{

if(!q.completed || q.rewardClaimed){

return q;

}

updatedPlayer = levelEngine(updatedPlayer, q.xp);
updatedPlayer.coins += q.coins;

return{

...q,

rewardClaimed:true

};

});

return{

player:updatedPlayer,

quests:updatedQuests

};

}