import useDatabase from "../hooks/useDatabase";
import { equipItem } from "../systems/equipmentEngine";

export default function Inventory(){

const {

inventoryDB,

setInventoryDB

}=useDatabase();

return(

<div style={{

padding:40,

color:"white"

}}>

<h1>

🎒 Inventory

</h1>

<br/>

{

inventoryDB.length===0?

(

<h2>

Your inventory is empty.

</h2>

)

:

(

<div style={{

display:"grid",

gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))",

gap:20

}}>

{

inventoryDB.map(item=>(

<div

key={item.id}

style={{

background:"#1F2937",

padding:20,

borderRadius:18

}}

>

<h1>

{item.icon}

</h1>

<h2>

{item.name}

</h2>

<p>

{item.rarity}

</p>

<p>

Type: {item.type}

</p>

<h3>

x{item.quantity}

</h3>



{

item.type==="equipment"&&(

<button

onClick={()=>setInventoryDB(

equipItem(

inventoryDB,

item.id

)

)}

style={{

marginTop:15,

width:"100%",

padding:10,

border:"none",

borderRadius:10,

cursor:"pointer"

}}

>

{

item.equipped

?

"✓ Equipped"

:

"Equip"

}

</button>

)

}



</div>

))

}

</div>

)

}

</div>

);

}