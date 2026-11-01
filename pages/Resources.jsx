import useDatabase from "../hooks/useDatabase";

export default function Resources() {

    const {
        resourceDB,
        setResourceDB
    } = useDatabase();

    function toggleFavorite(id){

        setResourceDB(

            resourceDB.map(resource=>{

                if(resource.id!==id){

                    return resource;

                }

                return{

                    ...resource,
                    favorite:!resource.favorite

                };

            })

        );

    }

    function toggleCompleted(id){

        setResourceDB(

            resourceDB.map(resource=>{

                if(resource.id!==id){

                    return resource;

                }

                return{

                    ...resource,
                    completed:!resource.completed

                };

            })

        );

    }

function toggleCompleted(id){

setResourceDB(

resourceDB.map(resource=>{

if(resource.id!==id){

return resource;

}

return{

...resource,

completed:!resource.completed

};

})

);

}



function toggleFavorite(id){

setResourceDB(

resourceDB.map(resource=>{

if(resource.id!==id){

return resource;

}

return{

...resource,

favorite:!resource.favorite

};

})

);

}





    return(

        <div style={{padding:30}}>

            <h1>📚 Resources</h1>

            {

                resourceDB.map(resource=>(

                    <div

                        key={resource.id}

                        style={{

                            marginBottom:20,

                            padding:20,

                            borderRadius:15,

                            background:"#1f2937",

                            color:"white"

                        }}

                    >

                        <h2>

                            {resource.title}

                        </h2>

                        <p>

                            Academy :
                            {" "}
                            {resource.academy}

                        </p>

                        <p>

                            Skill :
                            {" "}
                            {resource.skill}

                        </p>

                        <p>

                            Type :
                            {" "}
                            {resource.type}

                        </p>


<div
style={{
display:"flex",
gap:10,
marginTop:15
}}
>

<button

onClick={()=>{

if(resource.url){

window.open(

resource.url,

"_blank"

);

}

}}

>

📖 Open

</button>

<button

onClick={()=>toggleFavorite(resource.id)}

>

{

resource.favorite

?

"⭐"

:

"☆"

}

Favorite

</button>

<button

onClick={()=>toggleCompleted(resource.id)}

>

{

resource.completed

?

"✔ Completed"

:

"Mark Complete"

}

</button>

</div>




<br/>

<button

onClick={()=>window.open(resource.url,"_blank")}

>

Open

</button>

{" "}

<button

onClick={()=>toggleCompleted(resource.id)}

>

{

resource.completed

?

"✅ Completed"

:

"Mark Complete"

}

</button>

{" "}

<button

onClick={()=>toggleFavorite(resource.id)}

>

{

resource.favorite

?

"⭐"

:

"☆"

}

</button>







                        <div
                            style={{
                                display:"flex",
                                gap:10,
                                marginTop:15,
                                flexWrap:"wrap"
                            }}
                        >

                            <a

                                href={resource.url}

                                target="_blank"

                                rel="noreferrer"

                            >

                                <button>

                                    🔗 Open

                                </button>

                            </a>

                            <button

                                onClick={()=>toggleFavorite(resource.id)}

                            >

                                {

                                    resource.favorite

                                    ?

                                    "⭐ Favorite"

                                    :

                                    "☆ Favorite"

                                }

                            </button>

                            <button

                                onClick={()=>toggleCompleted(resource.id)}

                            >

                                {

                                    resource.completed

                                    ?

                                    "✅ Completed"

                                    :

                                    "☐ Mark Completed"

                                }

                            </button>

                        </div>

                    </div>

                ))

            }

        </div>

    );

}