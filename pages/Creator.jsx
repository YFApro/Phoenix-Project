import { useState } from "react";

import useDatabase from "../hooks/useDatabase";

export default function Creator(){

const{

academyDB,

setAcademyDB

}=useDatabase();

const[name,setName]=useState("");

function createAcademy(){

if(!name.trim())return;

const academy={

id:Date.now(),

name,

icon:"📘",

description:"Custom Academy",

level:1,

xp:0,

xpToNextLevel:1000,

color:"#3B82F6"

};

setAcademyDB([

...academyDB,

academy

]);

setName("");

}

return(

<div style={{

padding:30

}}>

<h1>

Creator

</h1>

<input

placeholder="Academy name"

value={name}

onChange={e=>setName(e.target.value)}

/>

<button

onClick={createAcademy}

>

Create Academy

</button>

</div>

);

}