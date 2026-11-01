export default function inventoryEngine(

inventory,

item

){

if(!item){

return inventory;

}

const existing=inventory.find(

i=>i.id===item.id

);

if(existing){

return inventory.map(i=>

i.id===item.id

?{

...i,

quantity:i.quantity+1

}

:i

);

}

return[

...inventory,

{

...item,

quantity:1,

equipped:false

}

];

}