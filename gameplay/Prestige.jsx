export default function Prestige({

level,

prestige,

reset

}){

return(

<div>

<h1>

Prestige

</h1>

<p>

Current Prestige

{prestige}

</p>

<p>

Level

{level}

</p>

<button

disabled={level<100}

onClick={reset}

>

Prestige

</button>

</div>

);

}