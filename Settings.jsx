import { useRef } from "react";
import { useGame } from "../context/GameContext";

export default function Settings() {

    const { rawState, importSave, resetSave } = useGame();
    const fileInput = useRef(null);

    function exportSave() {
        const blob = new Blob(
            [JSON.stringify(rawState, null, 2)],
            { type: "application/json" }
        );
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "phoenix-save.json";
        a.click();
        URL.revokeObjectURL(url);
    }

    function handleFileChange(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            try {
                const data = JSON.parse(reader.result);
                importSave(data);
            } catch {
                alert("Invalid save file.");
            }
        };
        reader.readAsText(file);
    }

    return (
        <div>
            <h1>Settings</h1>

            <button onClick={exportSave}>Export Save</button>

            <button onClick={() => fileInput.current.click()}>
                Import Save
            </button>
            <input
                ref={fileInput}
                type="file"
                accept="application/json"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />

            <button onClick={resetSave}>Reset Save</button>
        </div>
    );
}
