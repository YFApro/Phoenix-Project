import { useGame } from "../context/GameContext";
import { getDailyQuests } from "../systems/dailyQuestEngine";
import XPBar from "../components/XPBar";
import QuestCard from "../components/QuestCard";

export default function Dashboard() {

    const { player, nextLevelXp, quests, academies, completeQuest } = useGame();
    const dailyQuests = getDailyQuests(quests);

    return (
        <div>
            <h1>Welcome back, {player.name}.</h1>
            <h2>Level {player.level}</h2>
            <h3>{player.xp} / {nextLevelXp} XP</h3>
            <XPBar current={player.xp} max={nextLevelXp} />

            <h2 style={{ marginTop: 30 }}>Today's quests</h2>
            {dailyQuests.map(quest => (
                <QuestCard
                    key={quest.id}
                    quest={quest}
                    onComplete={() => completeQuest(quest)}
                />
            ))}

            <h2 style={{ marginTop: 30 }}>Academies</h2>
            {academies.map(a => (
                <div key={a.id}>
                    {a.icon} {a.name} — Level {a.level}
                </div>
            ))}
        </div>
    );
}
