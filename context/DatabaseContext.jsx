import { createContext, useState } from "react";

import academies from "../data/academies";
import skills from "../data/skills";
import dailyQuests from "../data/dailyQuests";
import weeklyQuests from "../data/weeklyQuests";
import monthlyGoals from "../data/monthlyGoals";
import lessons from "../data/lessonDatabase";
import rewards from "../data/rewardDatabase";
import inventory from "../data/inventoryDatabase";
import achievements from "../data/achievementDatabase";
import bosses from "../data/bossDatabase";

import player from "../data/player";



import resources from "../data/resourceDatabase";

import tasks from "../data/taskDatabase";

import taskTemplates from "../data/taskTemplates";

import { useEffect } from "react";

import {

saveGame,

loadGame

} from "../systems/storage";

export const DatabaseContext = createContext();

export function DatabaseProvider({ children }){

const [academyDB,setAcademyDB]=useState(academies);






const [skillDB,setSkillDB]=useState(()=>{

const save=loadGame();

if(save?.skills){

return save.skills;

}

return skills;

});
const [dailyQuestDB, setDailyQuestDB] = useState(() => {

    const save = loadGame();

    if (save?.dailyQuests)
        return save.dailyQuests;

    return dailyQuests;

});
const [weeklyQuestDB, setWeeklyQuestDB] = useState(() => {

    const save = loadGame();

    if (save?.weeklyQuests)
        return save.weeklyQuests;

    return weeklyQuests;

});
const [monthlyGoalDB, setMonthlyGoalDB] = useState(() => {

    const save = loadGame();

    if (save?.monthlyGoals)
        return save.monthlyGoals;

    return monthlyGoals;

});


const [lessonDB,setLessonDB]=useState(()=>{

const save=loadGame();

if(save?.lessons){

return save.lessons;

}

return lessons;

});



const [rewardDB,setRewardDB]=useState(rewards);


const [taskTemplateDB,setTaskTemplateDB]=useState(taskTemplates);


const [resourceDB, setResourceDB] = useState(() => {

const save = loadGame();

if (save?.resources)
    return save.resources;

return resources;

});


const [taskDB, setTaskDB] = useState(() => {

const save = loadGame();

if (save?.tasks)
    return save.tasks;

return tasks;

});


const [inventoryDB,setInventoryDB]=useState(inventory);

const [achievementDB,setAchievementDB]=useState(()=>{

const save=loadGame();

if(save?.achievements){

return save.achievements;

}

return achievements;

});

const [bossDB,setBossDB]=useState(bosses);

const [playerDB,setPlayerDB]=useState(player);

useEffect(() => {

const save = loadGame();

if (!save) return;

if (save.player)
    setPlayerDB(save.player);

if (save.academies)
    setAcademyDB(save.academies);

if (save.skills)
    setSkillDB(save.skills);

if (save.lessons)
    setLessonDB(save.lessons);

if (save.achievements)
    setAchievementDB(save.achievements);

if (save.dailyQuests)
    setDailyQuestDB(save.dailyQuests);

if (save.weeklyQuests)
    setWeeklyQuestDB(save.weeklyQuests);

if (save.monthlyGoals)
    setMonthlyGoalDB(save.monthlyGoals);

if (save.resources)
    setResourceDB(save.resources);

if (save.tasks)
    setTaskDB(save.tasks);

}, []);


useEffect(()=>{

saveGame({

player: playerDB,

academies: academyDB,

skills: skillDB,

lessons: lessonDB,

achievements: achievementDB,



dailyQuests: dailyQuestDB,

weeklyQuests: weeklyQuestDB,

monthlyGoals: monthlyGoalDB,

resources: resourceDB,
tasks:taskDB

});

},[

playerDB,
academyDB,
skillDB,
lessonDB,
achievementDB,
dailyQuestDB,
weeklyQuestDB,
monthlyGoalDB,
resourceDB,
taskDB

]);

return(

<DatabaseContext.Provider

value={{

    academyDB,
    setAcademyDB,

    skillDB,
    setSkillDB,

    lessonDB,
    setLessonDB,

    playerDB,
    setPlayerDB,

    dailyQuestDB,
    setDailyQuestDB,

    weeklyQuestDB,
    setWeeklyQuestDB,

    monthlyGoalDB,
    setMonthlyGoalDB,

    inventoryDB,
    setInventoryDB,

    rewardDB,
    setRewardDB,

    resourceDB,
    setResourceDB,

    taskDB,
    setTaskDB,

    achievementDB,
    setAchievementDB,

    taskTemplateDB,
    setTaskTemplateDB,

    bossDB,
    setBossDB

}}

>

{children}

</DatabaseContext.Provider>

);

}