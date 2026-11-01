import useDatabase from "../hooks/useDatabase";

export default function Bosses(){

const { bossDB } = useDatabase();

return(

<div style={{padding:40,color:"white"}}>

<h1>👑 Academy Bosses</h1>

<br/>

{

bossDB.map(boss=>{

const percent=(boss.hp/boss.maxHp)*100;

return(

<div

key={boss.id}

style={{

background:"#1F2937",

padding:25,

borderRadius:20,

marginBottom:25

}}

>

<h2>

{boss.icon} {boss.name}

</h2>

<p>

Academy: {boss.academy}

</p>

<div style={{

height:22,

background:"#374151",

borderRadius:999,

overflow:"hidden",

marginTop:15

}}>

<div style={{

width:`${percent}%`,

height:"100%",

background:"#EF4444"

}}/>

</div>

<p>

{boss.hp} / {boss.maxHp} HP

</p>

{

boss.defeated &&

<h2>

🏆 DEFEATED

</h2>

}

</div>

);

})

}

</div>

);

}