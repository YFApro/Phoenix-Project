import "./LessonCard.css";

export default function LessonCard({

lesson,

startLesson

}){

return(

<div className="lessonCard">

<h2>{lesson.title}</h2>

<p>

⏱ {lesson.duration} min

</p>

<p>

⭐ {lesson.xp}

</p>

<button

onClick={()=>startLesson(lesson)}

>

Start

</button>

</div>

);

}