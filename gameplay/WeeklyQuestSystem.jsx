import QuestCard from "../components/QuestCard";

export default function WeeklyQuestSystem({

quests,

completeQuest

}){

return(

<div>

<h2>

Weekly Quests

</h2>

{

quests.map(quest=>(

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