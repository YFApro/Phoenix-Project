export default function FilterBar({

filters,

value,

onChange

}){

return(

<select

value={value}

onChange={e=>onChange(e.target.value)}

>

{

filters.map(filter=>(

<option

key={filter}

>

{filter}

</option>

))

}

</select>

);

}