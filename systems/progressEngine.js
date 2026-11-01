export default function progressEngine({

dailyQuestDB,

weeklyQuestDB,

monthlyGoalDB,

lesson,

skill,

academy

}){

const update = quests =>

quests.map(q=>{

if(q.completed){

return q;

}

let shouldUpdate = false;

switch(q.type){

case "lesson":

shouldUpdate =

q.target === "any" ||

q.target === lesson.id;

break;

case "skill":

shouldUpdate =

q.target === "any" ||

q.target === skill;

break;

case "academy":

shouldUpdate =

q.target === "any" ||

q.target === academy;

break;

default:

shouldUpdate = false;

}

if(!shouldUpdate){

return q;

}

const progress = q.progress + 1;

return{

...q,

progress,

completed: progress >= q.goal

};

});

return{

daily:update(dailyQuestDB),

weekly:update(weeklyQuestDB),

monthly:update(monthlyGoalDB)

};

}