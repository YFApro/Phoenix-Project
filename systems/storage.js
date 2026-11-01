export function saveGame(data){

localStorage.setItem(

"phoenix-save",

JSON.stringify(data)

);

}

export function loadGame(){

const save=localStorage.getItem(

"phoenix-save"

);

if(!save){

return null;

}

return JSON.parse(save);

}

export function clearGame(){

localStorage.removeItem(

"phoenix-save"

);

}