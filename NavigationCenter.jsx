export default function NotificationCenter({

notifications

}){

return(

<div>

{

notifications.map(n=>(

<div key={n.id}>

<h3>

{n.title}

</h3>

<p>

{n.message}

</p>

</div>

))

}

</div>

);

}