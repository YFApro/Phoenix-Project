export function getDailyQuests(

quests

){

return quests

.filter(

q=>q.repeatable

)

.slice(0,5);

}