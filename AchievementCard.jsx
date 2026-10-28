import "./AchievementCard.css";

export default function AchievementCard({

achievement

}){

return(

<div className="achievementCard">

<h2>

🏆 {achievement.name}

</h2>

<p>

{achievement.description}

</p>

</div>

);

}