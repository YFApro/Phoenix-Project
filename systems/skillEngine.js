export default function skillEngine(skill,xp){

let currentXP=skill.xp+xp;

let level=skill.level;

let needed=skill.xpToNextLevel;

while(currentXP>=needed){

currentXP-=needed;

level++;

needed=Math.floor(

needed*1.35

);

}

return{

...skill,

level,

xp:currentXP,

xpToNextLevel:needed

};

}