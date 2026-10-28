import "./CharacterCard.css";

export default function CharacterCard({ player }){

return(

<div className="characterCard">

<h1>

👤 {player.name}

</h1>

<h2>

🏅 Level {player.level}

</h2>

<p>

⭐ XP 

{player.xp}

/

{player.xpToNextLevel}

</p>

<p>

🪙 Coins

{player.coins}

</p>

<p>

👑 {player.title}

</p>

<p>

🔥 Streak

{player.currentStreak}

days

</p>

<p>

🏆 Rank

{player.academyRank}

</p>

<p>

✨ Prestige 

{player.prestige}

</p>

</div>

);

}