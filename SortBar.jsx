export default function SortBar({

value,

onChange

}){

return(

<select

value={value}

onChange={e=>onChange(e.target.value)}

>

<option value="name">

Name

</option>

<option value="xp">

XP

</option>

<option value="level">

Level

</option>

<option value="difficulty">

Difficulty

</option>

<option value="coins">

Coins

</option>

</select>

);

}