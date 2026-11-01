export default function SkillTree({

skills,

unlock

}){

return(

<div>

<h1>

Skill Tree

</h1>

{

skills.map(skill=>(

<button

key={skill.id}

onClick={()=>unlock(skill)}

>

{skill.name}

</button>

))

}

</div>

);

}