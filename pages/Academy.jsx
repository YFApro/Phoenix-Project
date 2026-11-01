import { useParams, useNavigate } from "react-router-dom";
import useDatabase from "../hooks/useDatabase";

export default function Academy(){

const { id }=useParams();

const navigate=useNavigate();

const { academyDB }=useDatabase();

const academy=academyDB.find(a=>a.id===id);

if(!academy){

return(

<div style={{padding:40}}>

<h1>

Academy not found.

</h1>

</div>

);

}

const percent=Math.min(

academy.xp/academy.xpToNextLevel*100,

100

);

return(

<div style={{

padding:40,

color:"white"

}}>

<div style={{

display:"flex",

justifyContent:"space-between",

alignItems:"center"

}}>

<div>

<h1>

{academy.icon} {academy.name}

</h1>

<p>

{academy.description}

</p>

</div>

<div style={{

textAlign:"right"

}}>

<h2>

Level {academy.level}

</h2>

<p>

{academy.xp}/{academy.xpToNextLevel} XP

</p>

</div>

</div>

<br/>

<div style={{

height:22,

background:"#30363D",

borderRadius:999,

overflow:"hidden"

}}>

<div style={{

width:`${percent}%`,

height:"100%",

background:academy.color,

transition:"0.4s"

}}/>

</div>

<br/>

<div style={{

display:"grid",

gridTemplateColumns:"repeat(4,1fr)",

gap:20

}}>

<div style={{

background:"#1F2937",

padding:20,

borderRadius:15

}}>

<h3>

⭐ Progress

</h3>

<h2>

{percent.toFixed(0)}%

</h2>

</div>

<div style={{

background:"#1F2937",

padding:20,

borderRadius:15

}}>

<h3>

📚 Skills

</h3>

<h2>

{academy.skills.length}

</h2>

</div>

<div style={{

background:"#1F2937",

padding:20,

borderRadius:15

}}>

<h3>

🏆 Rank

</h3>

<h2>

Novice

</h2>

</div>

<div style={{

background:"#1F2937",

padding:20,

borderRadius:15

}}>

<h3>

🔥 Streak

</h3>

<h2>

0

</h2>

</div>

</div>

<br/><br/>

<h2>

Skills

</h2>

<div style={{

display:"grid",

gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",

gap:20

}}>

{

academy.skills.map(skills=>(

<div

key={skills}

style={{

background:"#1F2937",

padding:20,

borderRadius:18,

cursor:"pointer",

transition:"0.2s"

}}

onClick={()=>navigate(

`/skills/${skills}`

)}

>

<h2>

📖 {skills}

</h2>

<p>

Level 1

</p>

<p>

0 XP

</p>

<button>

Open

</button>

</div>

))

}

</div>

</div>

);

}