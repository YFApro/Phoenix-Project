export default function SearchBar({

value,

onChange

}){

return(

<input

placeholder="Search..."

value={value}

onChange={e=>onChange(e.target.value)}

/>

);

}