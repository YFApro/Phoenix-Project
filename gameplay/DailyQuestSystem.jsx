import QuestCard from "../components/QuestCard";

export default function DailyQuestSystem({

quests,

completeQuest

}){

return(

<div>

<h2>

Daily Quests

</h2>

{

quests

.map(quest=>(

<QuestCard

key={quest.id}

quest={quest}

onComplete={

()=>completeQuest(quest)

}

/>

))

}

</div>

);

}