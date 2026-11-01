export default function StreakRewards({

streak

}){

function reward(){

if(streak>=365) return "👑 Legendary";

if(streak>=100) return "💎 Diamond";

if(streak>=30) return "🥇 Gold";

if(streak>=7) return "🥈 Silver";

return "🥉 Bronze";

}

return(

<div>

<h2>

Current Streak

</h2>

<h1>

🔥 {streak}

</h1>

<h3>

Reward

</h3>

<p>

{reward()}

</p>

</div>

);

}