import { createContext, useContext, useEffect, useState } from "react";

import playerData from "../data/player.json";
import academiesData from "../data/academies.json";
import skillsData from "../data/skills.json";
import questsData from "../data/quests.json";
import rewardsData from "../data/rewards.json";
import achievementsData from "../data/achievements.json";
import titlesData from "../data/titles.json";

import { addXP } from "../systems/xpEngine";
import { addCoins, spendCoins } from "../systems/coinEngine";
import { calculateLevel, xpToNextLevel } from "../systems/levelEngine";
import { saveGame, loadGame } from "../systems/saveEngine";

const GameContext = createContext(null);

function buildDefaultState() {
    return {
        player: { ...playerData, achievements: [] },
        skills: skillsData.map(s => ({ ...s })),
    };
}

export function GameProvider({ children }) {

    const [state, setState] = useState(() => {
        const saved = loadGame();
        return saved || buildDefaultState();
    });

    // Persist on every change
    useEffect(() => {
        saveGame(state);
    }, [state]);

    // --- derived data -------------------------------------------------

    function academyWithProgress(academy) {
        const related = state.skills.filter(s => s.academyId === academy.id);
        const totalXp = related.reduce((sum, s) => sum + s.xp, 0);
        return {
            ...academy,
            xp: totalXp,
            level: calculateLevel(totalXp),
        };
    }

    const academies = academiesData.map(academyWithProgress);
    const skills = state.skills;
    const quests = questsData;
    const rewards = rewardsData;
    const achievements = achievementsData;

    const level = calculateLevel(state.player.xp);
    const nextLevelXp = xpToNextLevel(level);
    const currentTitle = [...titlesData]
        .filter(t => level >= t.level)
        .sort((a, b) => b.level - a.level)[0]?.title || "Beginner";

    const player = {
        ...state.player,
        level,
        title: currentTitle,
    };

    // --- actions --------------------------------------------------------

    function completeQuest(quest) {
        setState(prev => {
            let p = { ...prev.player };
            p = addXP(p, quest.xp);
            p = addCoins(p, quest.coins);

            let skills = prev.skills;
            if (quest.academyId) {
                skills = prev.skills.map(s =>
                    s.academyId === quest.academyId
                        ? { ...s, xp: s.xp + Math.round(quest.xp / 2) }
                        : s
                );
            }

            return { ...prev, player: p, skills };
        });
    }

    function trainSkill(skill, amount = 50) {
        setState(prev => ({
            ...prev,
            skills: prev.skills.map(s =>
                s.id === skill.id
                    ? { ...s, xp: s.xp + amount, level: calculateLevel(s.xp + amount) }
                    : s
            ),
        }));
    }

    function buyReward(reward) {
        setState(prev => {
            const p = { ...prev.player };
            const ok = spendCoins(p, reward.cost);
            if (!ok) return prev;
            return { ...prev, player: p };
        });
    }

    function importSave(data) {
        setState(data);
    }

    function resetSave() {
        setState(buildDefaultState());
    }

    const value = {
        player,
        academies,
        skills,
        quests,
        rewards,
        achievements,
        nextLevelXp,
        completeQuest,
        trainSkill,
        buyReward,
        importSave,
        resetSave,
        rawState: state,
    };

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
    const ctx = useContext(GameContext);
    if (!ctx) throw new Error("useGame must be used inside <GameProvider>");
    return ctx;
}
