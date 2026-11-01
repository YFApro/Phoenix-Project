export default function bossEngine(boss, lesson){

if(boss.defeated){

return boss;

}

const damage=lesson.xp;

const hp=Math.max(

0,

boss.hp-damage

);

return{

...boss,

hp,

defeated:hp===0

};

}