import { useParams } from "react-router-dom";
import useDatabase from "../hooks/useDatabase";
import usePlayer from "../hooks/usePlayer";
import lessonCompletionEngine from "../systems/lessonCompletionEngine";



export default function Lesson(){

    const { id } = useParams();


    const {

        lessonDB,
        setLessonDB,

        skillDB,
        setSkillDB,

        dailyQuestDB,
        setDailyQuestDB,

        weeklyQuestDB,
        setWeeklyQuestDB,

        monthlyGoalDB,
        setMonthlyGoalDB,

        bossDB,
        setBossDB,

        inventoryDB,
        setInventoryDB,

        achievementDB,
        setAchievementDB,

        rewardDB,

        resourceDB
        

    }=useDatabase();
    

    const {

        player,

        setPlayer,

        academyDB,

        setAcademyDB

    } = usePlayer();

    const lesson = lessonDB.find(

        l => l.id === id

        
    );
    
        const resource = resourceDB.find(
        r => r.id === lesson.id
        );


    if(!lesson){

        return(

            <h1 style={{padding:40}}>

                Lesson not found.

            </h1>

        );

    }

function completeLesson(){

try{

const result = lessonCompletionEngine({

lesson,

player,

academyDB,

skillDB,

lessonDB,

bossDB,

dailyQuestDB,

weeklyQuestDB,

monthlyGoalDB,

inventoryDB,

achievementDB,

rewardDB

});

console.log(result);

if(result.alreadyCompleted){

alert("Lesson already completed.");

return;

}

setPlayer(result.player);
setAcademyDB(result.academies);
setSkillDB(result.skills);
setLessonDB(result.lessons);
setBossDB(result.bosses);
setInventoryDB(result.inventory);
setAchievementDB(result.achievements);
setDailyQuestDB(result.daily);
setWeeklyQuestDB(result.weekly);
setMonthlyGoalDB(result.monthly);

alert(result.message);

}catch(error){

console.error(error);

alert(error.message);

}

}
    return(

        <div style={{

            padding:40,

            color:"white"

        }}>

            <h1>

                📖 {lesson.title}

            </h1>

            <p>

                {lesson.description}

            </p>

            <br/>

            <p>

                Difficulty: {lesson.difficulty}

            </p>

            <p>

                Duration: {lesson.duration} min

            </p>

            <p>

                Reward: {lesson.xp} XP

            </p>

            <p>

                Coins: {lesson.coins}

            </p>

            <br/>





<hr />

<h2>Resources</h2>

{resource && (

<>

<h3>📄 Notes</h3>

<ul>

{resource.notes.map(note=>(

<li key={note.title}>
{note.title}
</li>

))}

</ul>

<h3>🎥 Videos</h3>

<ul>

{resource.videos.map(video=>(

<li key={video.title}>

<a
href={video.url}
target="_blank"
rel="noreferrer"
>

{video.title}

</a>

</li>

))}

</ul>

<h3>💻 Exercises</h3>

<ul>

{resource.exercises.map(ex=>(

<li key={ex.title}>
{ex.description}
</li>

))}

</ul>

</>

)}





<button

disabled={lesson.completed}

onClick={completeLesson}

style={{

padding:15,

width:"100%",

border:"none",

borderRadius:12,

cursor:lesson.completed?"default":"pointer",

background:lesson.completed?"#22C55E":"#3B82F6",

color:"white",

fontWeight:"bold"

}}

>

{

lesson.completed

?

"✓ COMPLETED"

:

"COMPLETE LESSON"

}

</button>

        </div>

    );

}