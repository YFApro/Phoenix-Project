import useDatabase from "../hooks/useDatabase";

export default function TaskLibrary() {

    const {

        taskTemplateDB,
        taskDB,
        setTaskDB

    } = useDatabase();

    function addTask(template){

        const newTask={

            id:Date.now(),

            title:template.title,

            description:template.description,

            academy:template.academy,

            skill:template.skill,

            duration:template.duration,

            xp:template.xp,

            coins:template.coins,

            completed:false

        };

        setTaskDB([

            ...taskDB,

            newTask

        ]);

    }

    return(

        <div style={{padding:30}}>

            <h1>📚 Task Library</h1>

            <br/>

            {

                taskTemplateDB.map(template=>(

                    <div

                        key={template.id}

                        style={{

                            background:"#1f2937",

                            padding:20,

                            borderRadius:15,

                            marginBottom:20

                        }}

                    >

                        <h2>{template.title}</h2>

                        <p>{template.description}</p>

                        <p>Academy : {template.academy}</p>
                        <p>Skill : {template.skill}</p>
                        <p>{template.duration} min</p>

                        <button

                            onClick={()=>addTask(template)}

                        >

                            ➕ Add to Planner

                        </button>

                    </div>

                ))

            }

        </div>

    );

}