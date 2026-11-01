export function notify(

title,

message

){

return{

id:Date.now(),

title,

message,

date:new Date(),

read:false

};

}

export function markRead(

notification

){

notification.read=true;

return notification;

}