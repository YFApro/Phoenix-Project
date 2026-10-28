import { useGame } from "../context/GameContext";
import QuestCard from "../components/QuestCard";

export default function Quests() {

    const { quests, completeQuest } = useGame();

    return (
        <div>
            <h1>Quests</h1>

            <section>
                <h2>Daily</h2>
                {quests.map(quest => (
                    <QuestCard
                        key={quest.id}
                        quest={quest}
                        onComplete={() => completeQuest(quest)}
                    />
                ))}
            </section>

            <section>
                <h2>Weekly</h2>
                <p>Coming soon.</p>
            </section>

            <section>
                <h2>Monthly</h2>
                <p>Coming soon.</p>
            </section>

            <section>
                <h2>Story</h2>
                <p>Coming soon.</p>
            </section>
        </div>
    );
}
