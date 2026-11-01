const KEY = "phoenix-save";

export function saveGame(data) {

    localStorage.setItem(

        KEY,

        JSON.stringify(data)

    );

}

export function loadGame() {

    const save = localStorage.getItem(KEY);

    if (!save) return null;

    return JSON.parse(save);

}