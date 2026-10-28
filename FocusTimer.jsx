import {useState,useEffect} from "react";

export default function FocusTimer(){

const[start,setStart]=useState(false);

const[seconds,setSeconds]=useState(1500);

useEffect(()=>{

if(!start)return;

const timer=setInterval(()=>{

setSeconds(s=>s>0?s-1:0);

},1000);

return()=>clearInterval(timer);

},[start]);

return(

<div>

<h2>

{Math.floor(seconds/60)}:

{String(seconds%60).padStart(2,"0")}

</h2>

<button

onClick={()=>setStart(true)}

>

Start

</button>

<button

onClick={()=>setStart(false)}

>

Pause

</button>

</div>

);

}