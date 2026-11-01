import QuestCard from "../components/QuestCard";

export default function MonthlyQuestSystem({

quests,

completeQuest

}){

return(

<div>

<h2>

Monthly Challenges

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