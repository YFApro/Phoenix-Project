export default function achievementEngine({

player,

academies,

skills,

lessons,

achievements

}){

const unlocked=[];

const updated=achievements.map(a=>{

if(a.completed){

return a;

}

let complete=false;

switch(a.id){

case "first_lesson":

complete=lessons.some(

l=>l.completed

);

break;

case "java_beginner":

complete=skills.some(

s=>

s.id==="java" &&

s.level>=2

);

break;

case "programming_beginner":

complete=academies.some(

a=>

a.id==="programming" &&

a.level>=2

);

break;

case "level5":

complete=player.level>=5;

break;

case "ten_lessons":

complete=

lessons.filter(

l=>l.completed

).length>=10;

break;

case "hundred_coins":

complete=player.coins>=100;

break;

}

if(complete){

unlocked.push(a);

return{

...a,

completed:true

};

}

return a;

});

return{

updated,

unlocked

};

}