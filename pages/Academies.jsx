import database from "../data/database";

import AcademyCard from "../components/AcademyCard";

import useDatabase from "../hooks/useDatabase";

export default function Academies(){

const{

academyDB

}=useDatabase();

return(

<div style={{

padding:30

}}>

<h1>

Academies

</h1>

<br/>

{

academyDB.map(

academy=>

<AcademyCard

key={academy.id}

academy={academy}

/>

)

}

</div>

);

}