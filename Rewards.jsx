import { useGame } from "../context/GameContext";
import RewardCard from "../components/RewardCard";

export default function Rewards() {

    const { rewards, player, buyReward } = useGame();

    return (
        <div>
            <h1>Reward Shop</h1>
            <p>🪙 {player.coins} coins available</p>
            {rewards.map(reward => (
                <RewardCard
                    key={reward.id}
                    reward={reward}
                    buy={() => buyReward(reward)}
                />
            ))}
        </div>
    );
}
