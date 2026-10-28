import { useNavigate } from "react-router-dom";

export default function AcademyCard({ academy }) {

    if (!academy) return null;

    const xp = academy.xp ?? 0;
    const next = academy.xpToNextLevel ?? 1500;
    const level = academy.level ?? 1;
    const icon = academy.icon ?? "📘";
    const name = academy.name ?? "Unknown";
    const description = academy.description ?? "";
    const color = academy.color ?? "#3B82F6";
    const navigate=useNavigate();
    const skills = Array.isArray(academy.skills)
        ? academy.skills
        : [];

    const percent = Math.min(
        (xp / next) * 100,
        100
    );

    return (

        <div
            style={{
                background:"#1f2937",
                borderRadius:20,
                padding:25,
                marginBottom:20
            }}
        >

            <div
                style={{
                    display:"flex",
                    justifyContent:"space-between"
                }}
            >

                <h2>

                    {icon} {name}

                </h2>

                <h2>

                    Lv. {level}

                </h2>

            </div>

            <p>{description}</p>

            <div
                style={{
                    background:"#444",
                    height:18,
                    borderRadius:999,
                    overflow:"hidden"
                }}
            >

                <div
                    style={{
                        width:`${percent}%`,
                        background:color,
                        height:"100%"
                    }}
                />

            </div>

            <p>

                {xp} / {next} XP

            </p>

            <strong>

                Skills

            </strong>

            <ul>

                {

                    skills.map(skill=>

                        <li key={skill}>

                            {skill}

                        </li>

                    )

                }

            </ul>

          <button

onClick={()=>navigate(

`/academy/${academy.id}`

)}

style={{

marginTop:20,

padding:12,

width:"100%",

border:"none",

borderRadius:12,

background:academy.color,

color:"white",

cursor:"pointer",

fontWeight:"bold"

}}

>

ENTER

</button>

 </div>

    );

}