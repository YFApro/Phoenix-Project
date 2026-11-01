export function toggleFavorite(resourceDB,id){

return resourceDB.map(resource=>{

if(resource.id!==id){

return resource;

}

return{

...resource,

favorite:!resource.favorite

};

});

}

export function toggleCompleted(resourceDB,id){

return resourceDB.map(resource=>{

if(resource.id!==id){

return resource;

}

return{

...resource,

completed:!resource.completed

};

});

}