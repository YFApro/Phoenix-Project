import levelEngine from "./levelEngine";
import skillEngine from "./skillEngine";
import achievementEngine from "./achievementEngine";
import progressEngine from "./progressEngine";
import questRewardEngine from "./questRewardEngine";
import bossEngine from "./bossEngine";
import lootEngine from "./lootEngine";
import inventoryEngine from "./inventoryEngine";
import equipmentBonusEngine from "./equipmentBonusEngine";

export default function lessonCompletionEngine({

lesson,

player,

academyDB,

skillDB,

lessonDB,

bossDB,

dailyQuestDB,

weeklyQuestDB,

monthlyGoalDB,

inventoryDB,

achievementDB,

rewardDB

}){

if(lesson.completed){

return{

alreadyCompleted:true

};

}

/* -------------------- */
/* Equipment Bonuses */
/* -------------------- */

const bonus=equipmentBonusEngine(

inventoryDB

);

const lessonXP=Math.floor(

lesson.xp*bonus.xpMultiplier

);

const lessonCoins=Math.floor(

lesson.coins*bonus.coinMultiplier

);

/* -------------------- */
/* Player */
/* -------------------- */

const updatedPlayer=levelEngine(

player,

lessonXP

);

updatedPlayer.coins+=lessonCoins;

/* -------------------- */
/* Lessons */
/* -------------------- */

const updatedLessons=lessonDB.map(l=>{

if(l.id!==lesson.id){

return l;

}

return{

...l,

completed:true

};

});

/* -------------------- */
/* Skills */
/* -------------------- */

const updatedSkills = skillDB.map(skill => {

    if (skill.name !== lesson.skill) {
        return skill;
    }

    const updated = skillEngine(skill, lessonXP);

    console.log("OLD SKILL:", skill);
    console.log("NEW SKILL:", updated);

    return updated;
});

/* -------------------- */
/* Academies */
/* -------------------- */

const updatedAcademies=academyDB.map(a=>{

if(a.id!==lesson.academy){

return a;

}

return{

...a,

xp:a.xp+lessonXP

};

});

/* -------------------- */
/* Bosses */
/* -------------------- */

const updatedBosses=bossDB.map(boss=>{

if(boss.academy!==lesson.academy){

return boss;

}

return bossEngine(

boss,

lesson

);

});

/* -------------------- */
/* Loot */
/* -------------------- */

const droppedItem=lootEngine(

rewardDB

);

const updatedInventory=droppedItem

?

inventoryEngine(

inventoryDB,

droppedItem

)

:

inventoryDB;

/* -------------------- */
/* Quests */
/* -------------------- */

const progress=progressEngine({

dailyQuestDB,

weeklyQuestDB,

monthlyGoalDB,

lesson,

skill:lesson.skill,

academy:lesson.academy

});

const rewardedDaily=questRewardEngine(

updatedPlayer,

progress.daily

);

const rewardedWeekly=questRewardEngine(

rewardedDaily.player,

progress.weekly

);

const rewardedMonthly=questRewardEngine(

rewardedWeekly.player,

progress.monthly

);

/* -------------------- */
/* Achievements */
/* -------------------- */

console.log(updatedLessons);

const achievementResult=achievementEngine({

player:rewardedMonthly.player,

academies:updatedAcademies,

skills:updatedSkills,

lessons:updatedLessons,

achievements:achievementDB

});

console.log(achievementResult);


console.log({
    player: rewardedMonthly.player,
    lessons: updatedLessons,
    skills: updatedSkills,
    academies: updatedAcademies
});






let finalPlayer={

...rewardedMonthly.player

};

let message=

`+${lessonXP} XP\n+${lessonCoins} Coins`;

achievementResult.unlocked.forEach(a=>{

const leveled=levelEngine(

finalPlayer,

a.xp

);

finalPlayer={

...leveled,

coins:leveled.coins+a.coins

};

message+=`\n\n🏆 ${a.title}`;

});

if(droppedItem){

message+=`\n\n🎁 ${droppedItem.icon} ${droppedItem.name}`;

}

return{

alreadyCompleted:false,

player:finalPlayer,

academies:updatedAcademies,

skills:updatedSkills,

lessons:updatedLessons,

bosses:updatedBosses,

inventory:updatedInventory,

daily:rewardedDaily.quests,

weekly:rewardedWeekly.quests,

monthly:rewardedMonthly.quests,

achievements:achievementResult.updated,

message

};

}