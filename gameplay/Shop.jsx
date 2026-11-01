import RewardCard from "../components/RewardCard";

export default function Shop({

rewards,

buy

}){

return(

<div>

<h1>

Reward Shop

</h1>

{

rewards.map(reward=>(

<RewardCard

key={reward.id}

reward={reward}

buy={buy}

/>

))

}

</div>

);

}