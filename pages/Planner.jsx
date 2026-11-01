import useDatabase from "../hooks/useDatabase";

export default function Planner(){

const{

taskDB,
setTaskDB,
resourceDB

}=useDatabase();

function toggleTask(id){

setTaskDB(

taskDB.map(task=>

task.id===id

?{

...task,

completed:!task.completed

}

:task

)

);

}



return(

<div style={{padding:30}}>

<h1>📅 Today's Tasks</h1>

<br/>

{

taskDB.map(task => {

const relatedResources = resourceDB.filter(

resource =>

resource.skill === task.skill

);

return(

<div
key={task.id}
style={{
padding:20,
marginBottom:15,
background:"#1f2937",
borderRadius:15
}}
>

<label>

<input
type="checkbox"
checked={task.completed}
onChange={()=>toggleTask(task.id)}
/>

{" "}

{task.title}

</label>

<p>

{task.description}

</p>

<p>

⭐ {task.xp} XP

&nbsp;&nbsp;

🪙 {task.coins}

</p>

<p>

⏱ {task.duration} min

</p>

<h4>

📚 Suggested Resources

</h4>

{

relatedResources.map(resource=>(

<div
key={resource.id}
style={{
marginBottom:8
}}
>

{resource.title}

</div>

))

}

</div>

);

})

}

</div>

);

}