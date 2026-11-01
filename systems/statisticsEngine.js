export function updateStatistics(

stats,

type

){

stats.totalActions++;

switch(type){

case"quest":

stats.quests++;

break;

case"lesson":

stats.lessons++;

break;

case"boss":

stats.bosses++;

break;

case"focus":

stats.focusSessions++;

break;

}

return stats;

}