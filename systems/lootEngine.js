export default function lootEngine(items){

const random=Math.random();

const possible=items.filter(item=>{

return random<=item.dropRate;

});

if(possible.length===0){

return null;

}

return possible[

Math.floor(

Math.random()*possible.length

)

];
}