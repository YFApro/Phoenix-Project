export default function ProgressRing({

value,

max

}){

const percent=Math.round((value/max)*100);

return(

<div>

<h2>{percent}%</h2>

<progress

value={value}

max={max}

/>

</div>

);

}