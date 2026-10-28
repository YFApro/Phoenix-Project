import "./QuestCard.css";

export default function QuestCard({ quest, onComplete }) {

    return (
        <div className="questCard">
            <h3>{quest.title}</h3>
            <p>{quest.difficulty}</p>
            <p>⭐ {quest.xp}</p>
            <p>🪙 {quest.coins}</p>
            <button onClick={onComplete}>
                Complete
            </button>
        </div>
    );
}
