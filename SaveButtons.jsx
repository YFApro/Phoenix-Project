import {

deleteSave

} from "../systems/storage";

export default function SaveButtons(){

function reset(){

deleteSave();

window.location.reload();

}

return(

<div>

<button

onClick={reset}

>

Reset Save

</button>

</div>

);

}