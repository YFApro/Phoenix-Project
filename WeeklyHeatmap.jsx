export default function WeeklyHeatmap({

days

}){

return(

<div style={{

display:"flex",

gap:10

}}>

{

days.map(day=>(

<div

key={day.id}

style={{

width:35,

height:35,

background:

day.done

?"#D7263D"

:"#333",

borderRadius:8

}}

></div>

))

}

</div>

);

}