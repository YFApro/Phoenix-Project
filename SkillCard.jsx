import "./SkillCard.css";

export default function SkillCard({

skill,

onTrain

}){

return(

<div className="skillCard">

<h2>{skill.name}</h2>

<p>

Level {skill.level}

</p>

<p>

⭐ {skill.xp}

</p>

<button

onClick={()=>onTrain(skill)}

>

Train

</button>

</div>

);

}