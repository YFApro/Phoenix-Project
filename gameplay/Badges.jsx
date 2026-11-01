export default function Badges({

badges

}){

return(

<div>

<h1>

Badges

</h1>

{

badges.map(badge=>(

<div

key={badge.id}

>

🏅 {badge.name}

</div>

))

}

</div>

);

}