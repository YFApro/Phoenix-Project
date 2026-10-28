import { useGame } from "../context/GameContext";
import CharacterCard from "../components/CharacterCard";

export default function Character() {

    const { player } = useGame();

    return (
        <div>
            <h1>Character</h1>
            <CharacterCard player={player} />
            <p>Prestige: {player.prestige}</p>
        </div>
    );
}
