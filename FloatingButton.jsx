export default function FloatingButton({

icon,

onClick

}){

return(

<button

onClick={onClick}

style={{

position:"fixed",

bottom:30,

right:30,

width:65,

height:65,

borderRadius:"50%",

fontSize:24,

background:"#D7263D",

color:"white"

}}

>

{icon}

</button>

);

}