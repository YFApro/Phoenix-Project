export default function equipmentBonusEngine(inventory){

const bonus={

xpMultiplier:1,

bossMultiplier:1,

coinMultiplier:1

};

inventory.forEach(item=>{

if(!item.equipped){

return;

}

switch(item.id){

case "java_book":

bonus.xpMultiplier+=0.10;
break;

case "python_book":

bonus.xpMultiplier+=0.10;
break;

case "keyboard":

bonus.xpMultiplier+=0.15;
break;

case "legendary_laptop":

bonus.xpMultiplier+=0.30;
bonus.coinMultiplier+=0.20;
break;

}

});

return bonus;

}