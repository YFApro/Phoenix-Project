export default function Titles({

titles,

equip

}){

return(

<div>

<h1>

Titles

</h1>

{

titles.map(title=>(

<button

key={title.id}

onClick={()=>equip(title)}

>

{title.title}

</button>

))

}

</div>

);

}