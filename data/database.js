const database = {

player:{

name:"My Desert Flower",

level:1,

xp:0,

xpToNextLevel:100,

coins:0,

prestige:0,

title:"Beginner",

currentAcademy:null,

currentSkill:null,

streak:0,

energy:100,

health:100

},

academies:[

{

id:"programming",

name:"Programming",

icon:"💻",

color:"#4F46E5",

description:"Programming, Software Engineering and Computer Science.",

level:1,

xp:0,

xpToNextLevel:1000,

unlocked:true

},

{

id:"drawing",

name:"Drawing",

icon:"🎨",

color:"#EC4899",

description:"Traditional and Digital Art.",

level:1,

xp:0,

xpToNextLevel:1000,

unlocked:true

},

{

id:"singing",

name:"Singing",

icon:"🎤",

color:"#EF4444",

description:"Voice training and performance.",

level:1,

xp:0,

xpToNextLevel:1000,

unlocked:true

},

{

id:"languages",

name:"Languages",

icon:"🌍",

color:"#22C55E",

description:"Learning foreign languages.",

level:1,

xp:0,

xpToNextLevel:1000,

unlocked:true

}

],

skills:[],

dailyQuests:[],

weeklyQuests:[],

monthlyGoals:[],

rewards:[],

inventory:[],

bosses:[],

titles:[],

badges:[],

achievements:[]

};

export default database;