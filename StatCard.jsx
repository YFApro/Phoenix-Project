import "./StatCard.css";

export default function StatCard({

title,

value,

icon,

color

}){

return(

<div
className="statCard"
style={{

borderLeft:`6px solid ${color}`

}}

>

<h3>

{icon} {title}

</h3>

<h1>

{value}

</h1>

</div>

);

}