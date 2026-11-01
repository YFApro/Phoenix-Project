export function equipItem(

inventory,

id

){

return inventory.map(item=>{

if(item.type!=="equipment"){

return item;

}

return{

...item,

equipped:item.id===id

};

});

}

export function unequipItem(

inventory,

id

){

return inventory.map(item=>

item.id===id

?{

...item,

equipped:false

}

:item

);

}