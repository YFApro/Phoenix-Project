import usePlayer from "../hooks/usePlayer";

import StatCard from "../components/StatCard";

export default function Dashboard(){

const{

player

}=usePlayer();

return(

<div style={{

padding:"30px"

}}>

<h1>

Welcome back,

{player.name}

</h1>

<br/>

<div style={{

display:"grid",

gridTemplateColumns:

"repeat(4,1fr)",

gap:"20px"

}}>

<StatCard

title="Level"

value={player.level}

icon="🏅"

color="#F59E0B"

/>

<StatCard

title="XP"

value={`${player.xp}/${player.xpToNextLevel}`}

icon="⭐"

color="#3B82F6"

/>

<StatCard

title="Coins"

value={player.coins}

icon="🪙"

color="#FACC15"

/>

<StatCard

title="Title"

value={player.title}

icon="👑"

color="#EC4899"

/>

</div>

</div>

);

}