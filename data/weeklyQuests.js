const weeklyQuests=[

{
id:"complete_lessons",
title:"📚 Scholar",
description:"Complete 5 lessons.",
type:"lesson",
target:"any",
progress:0,
goal:5,
academy:null,
skill:null,
difficulty:"Medium",
rarity:"Rare",
xp:600,
coins:150,
repeatable:true,
completed:false,
rewardClaimed:false
},

{
id:"programming_week",
title:"💻 Programming Sprint",
description:"Complete 5 Programming lessons.",
type:"academy",
target:"programming",
progress:0,
goal:5,
academy:"programming",
skill:null,
difficulty:"Hard",
rarity:"Epic",
xp:900,
coins:220,
repeatable:true,
completed:false,
rewardClaimed:false
},

{
id:"drawing_week",
title:"🎨 Artist Week",
description:"Practice Drawing 5 times.",
type:"habit",
target:"drawing",
progress:0,
goal:5,
academy:"drawing",
skill:null,
difficulty:"Medium",
rarity:"Rare",
xp:700,
coins:170,
repeatable:true,
completed:false,
rewardClaimed:false
},

{
id:"health_week",
title:"❤️ Healthy Hero",
description:"Complete 7 health habits.",
type:"academy",
target:"health",
progress:0,
goal:7,
academy:"health",
skill:null,
difficulty:"Hard",
rarity:"Epic",
xp:1000,
coins:250,
repeatable:true,
completed:false,
rewardClaimed:false
},

{
id:"earn_xp",
title:"⭐ XP Hunter",
description:"Earn 2000 XP.",
type:"xp",
target:"player",
progress:0,
goal:2000,
academy:null,
skill:null,
difficulty:"Hard",
rarity:"Epic",
xp:1200,
coins:300,
repeatable:true,
completed:false,
rewardClaimed:false
}

];

export default weeklyQuests;