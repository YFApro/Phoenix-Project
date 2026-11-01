export default function StoryQuestSystem({

chapter,

start

}){

return(

<div>

<h1>

{chapter.title}

</h1>

<p>

{chapter.description}

</p>

<button

onClick={start}

>

Start Story

</button>

</div>

);

}