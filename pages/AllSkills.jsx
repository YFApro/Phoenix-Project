import { useNavigate } from "react-router-dom";
import useDatabase from "../hooks/useDatabase";

export default function AllSkills() {

    const navigate = useNavigate();

    const { academyDB } = useDatabase();

    return (
        <div style={{ padding: 40, color: "white" }}>

            <h1>📚 Skills</h1>
            <p>All skills across every academy.</p>
            <br />

            {academyDB.map(academy => (
                <div key={academy.id} style={{ marginBottom: 30 }}>

                    <h2>{academy.icon} {academy.name}</h2>

                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))",
                        gap: 20,
                        marginTop: 10
                    }}>

                        {academy.skills.map(skill => (
                            <div
                                key={skill}
                                onClick={() => navigate(`/skills/${skill}`)}
                                style={{
                                    background: "#1F2937",
                                    padding: 20,
                                    borderRadius: 18,
                                    cursor: "pointer"
                                }}
                            >
                                <h3>📖 {skill}</h3>
                            </div>
                        ))}

                    </div>

                </div>
            ))}

        </div>
    );
}
