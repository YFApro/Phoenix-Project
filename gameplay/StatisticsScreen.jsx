export default function StatisticsScreen({

stats

}){

return(

<div>

<h1>

Statistics

</h1>

<p>

XP

{stats.totalXP}

</p>

<p>

Coins

{stats.totalCoins}

</p>

<p>

Quests

{stats.completedQuests}

</p>

<p>

Lessons

{stats.completedLessons}

</p>

<p>

Bosses

{stats.bosses}

</p>

</div>

);

}