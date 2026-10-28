import "./RewardCard.css";

export default function RewardCard({

reward,

buy

}){

return(

<div className="rewardCard">

<h2>

{reward.name}

</h2>

<p>

🪙 {reward.cost}

</p>

<button

onClick={()=>buy(reward)}

>

Buy

</button>

</div>

);

}