import levelEngine from "./levelEngine";

export function completeQuest(player, quest){

const updatedPlayer = levelEngine(

player,

quest.xp

);

updatedPlayer.coins += quest.coins;

return updatedPlayer;

}

export function completeDailyQuest(player, quest){

return completeQuest(

player,

quest

);

}

export function completeWeeklyQuest(player, quest){

return completeQuest(

player,

quest

);

}

export function completeMonthlyGoal(player, goal){

return completeQuest(

player,

goal

);

}

export function resetDailyQuests(quests){

return quests.map(q=>({

...q,

completed:false

}));

}

export function completedCount(quests){

return quests.filter(

q=>q.completed

).length;

}

export function remainingCount(quests){

return quests.filter(

q=>!q.completed

).length;

}