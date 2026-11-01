export default function Collections({

collections

}){

return(

<div>

<h1>

Collections

</h1>

{

collections.map(item=>(

<div

key={item.id}

>

{item.name}

</div>

))

}

</div>

);

}