import useDatabase from "../hooks/useDatabase";

export default function Quests(){

const{

dailyQuestDB,

weeklyQuestDB,

monthlyGoalDB

}=useDatabase();

function QuestSection(title,color,quests){

return(

<>

<h1 style={{marginTop:30}}>

{title}

</h1>

<br/>

<div style={{

display:"grid",

gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",

gap:20

}}>

{

quests.map(q=>{

const progress = q.progress ?? 0;

const goal = q.goal ?? 1;

const percent = Math.max(
    0,
    Math.min((progress / goal) * 100, 100)
);

return(

<div

key={q.id}

style={{

background:"#1F2937",

padding:25,

borderRadius:18

}}

>

<h2>

{q.icon} {q.title}

</h2>

<p>

{q.description}

</p>

<br/>

<div style={{

height:18,

background:"#374151",

borderRadius:999,

overflow:"hidden"

}}>

<div style={{

width:`${percent}%`,

height:"100%",

background:color

}}/>

</div>

<p>

{q.progress} / {q.goal}

</p>

<p>

Reward

<b>

 {q.xp} XP

</b>

•

<b>

 {q.coins} Coins

</b>

</p>

{

q.completed&&(

<h3>

✅ Completed

</h3>

)

}

</div>

);

})

}

</div>

</>

);

}

return(

<div style={{padding:40,color:"white"}}>

{QuestSection(

"☀ Daily Quests",

"#22C55E",

dailyQuestDB

)}

{QuestSection(

"🔥 Weekly Quests",

"#F59E0B",

weeklyQuestDB

)}

{QuestSection(

"👑 Monthly Goals",

"#8B5CF6",

monthlyGoalDB

)}

</div>

);

}