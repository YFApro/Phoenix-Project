import "./XPBar.css";

export default function XPBar({

current,

max

}){

const percent=

(current/max)*100;

return(

<div className="xpBar">

<div

className="xpFill"

style={{

width:`${percent}%`

}}

></div>

</div>

);

}