import { useParams, useNavigate } from "react-router-dom";
import useDatabase from "../hooks/useDatabase";

export default function Skills() {

const { skill } = useParams();

const navigate = useNavigate();

const {

lessonDB,

skillDB

}=useDatabase();


const lessons = lessonDB.filter(

lesson => lesson.skill === skill

);

const currentSkill = skillDB.find(

s=>s.name===skill

);

const level=currentSkill?.level??1;

const xp=currentSkill?.xp??0;

const next=currentSkill?.xpToNextLevel??500;

const percent=Math.min(

xp/next*100,

100

);

const completed=lessons.filter(

lesson=>lesson.completed

).length;

const completion=Math.floor(

completed/lessons.length*100

)||0;

const totalXP = lessons.reduce(

(sum, lesson) => sum + lesson.xp,

0

);

return(

<div style={{

padding:40,

color:"white"

}}>

<h1>

📚 {skill}

</h1>

<p>

Master this skill through lessons and exercises.

</p>

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

Level

</h3>

<h2>

{level}

</h2>

</div>

<div style={{

background:"#1F2937",

padding:20,

borderRadius:15

}}>

<h3>

Lessons

</h3>

<h2>

{lessons.length}

</h2>

</div>

<div style={{

background:"#1F2937",

padding:20,

borderRadius:15

}}>

<h3>

Total XP

</h3>

<h2>

{totalXP}

</h2>

</div>

<div style={{

background:"#1F2937",

padding:20,

borderRadius:15

}}>

<h3>

Completed

</h3>

<h2>

{completion}%

</h2>

</div>

</div>

<br/>

<div style={{

marginTop:25,

marginBottom:35

}}>

<div style={{

height:20,

background:"#30363D",

borderRadius:999,

overflow:"hidden"

}}>

<div style={{

width:`${percent}%`,

height:"100%",

background:"#3B82F6"

}}/>

</div>

<p>

{xp} / {next} XP

</p>

</div>

<br/>



<h2>

Lessons

</h2>

<div style={{

display:"grid",

gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",

gap:20

}}>

{

lessons.map(lesson=>(

<div

key={lesson.id}

style={{

background:"#1F2937",

borderRadius:18,

padding:25

}}

>

<h2>

📖 {lesson.title}

</h2>

<p>

{lesson.description}

</p>

<br/>

<p>

Difficulty

<b>

 {lesson.difficulty}

</b>

</p>

<p>

Duration

<b>

 {lesson.duration} min

</b>

</p>

<p>

Reward

<b>

 {lesson.xp} XP

</b>

</p>

<br/>

<button

disabled={lesson.completed}

onClick={()=>navigate(

`/lesson/${lesson.id}`

)}

style={{

width:"100%",

padding:12,

borderRadius:10,

border:"none",

cursor:"pointer",

background:lesson.completed

?"#22C55E"

:"#3B82F6",

color:"white",

fontWeight:"bold"

}}

>

{

lesson.completed

?

"✓ COMPLETED"

:

"START LESSON"

}

</button>
</div>

))

}

</div>

</div>

);

}