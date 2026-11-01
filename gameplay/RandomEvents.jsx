const events=[

"✨ Bonus XP",

"🪙 Double Coins",

"📚 Free Lesson",

"🎁 Mystery Reward",

"💥 Mini Boss"

];

export function randomEvent(){

return events[

Math.floor(

Math.random()*events.length

)

];

}