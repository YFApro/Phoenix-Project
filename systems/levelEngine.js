export default function levelEngine(player,xpGained){

let xp=player.xp+xpGained;

let level=player.level;

let needed=player.xpToNextLevel;

while(xp>=needed){

xp-=needed;

level++;

needed=Math.floor(

needed*1.5

);

}

return{

...player,

level,

xp,

xpToNextLevel:needed

};

}