import {useState} from "react";

export default function BossBattle({

boss,

damage

}){

const[hp,setHp]=

useState(

boss.hp

);

function attack(){

setHp(

Math.max(

0,

hp-damage

)

);

}

return(

<div>

<h1>

{boss.name}

</h1>

<h2>

HP

{hp}

/

{boss.hp}

</h2>

<button

onClick={attack}

>

Attack

</button>

</div>

);

}