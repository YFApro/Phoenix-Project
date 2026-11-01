import player from "../data/player.json";
import CharacterCard from "../components/CharacterCard";

export default function Character(){

return(

<div>

<h1>

Character

</h1>

<CharacterCard

player={player}

/>

</div>

);

}