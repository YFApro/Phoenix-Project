export default function DailyLogin({

claim,

claimed

}){

return(

<div>

<h1>

Daily Login

</h1>

<button

disabled={claimed}

onClick={claim}

>

{

claimed

?

"Claimed"

:

"Claim Reward"

}

</button>

</div>

);

}