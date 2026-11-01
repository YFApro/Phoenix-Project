export default function Calendar({

days,

selectDay

}){

return(

<div>

{

days.map(day=>(

<button

key={day.date}

onClick={()=>selectDay(day)}

>

{day.day}

</button>

))

}

</div>

);

}