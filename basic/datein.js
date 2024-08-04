//let myDate = new Date()
// console.log(myDate.toString());             1
// console.log(myDate.toDateString());         2
// console.log(myDate.toISOString());          3
// console.log(myDate.toJSON());               4
// console.log(myDate.toLocaleString());       5       
// console.log(myDate.toLocaleDateString());   6   
// console.log(myDate.toTimeString());         7

let myCreateDate = new Date(2024,1,24)
// console.log(myCreateDate);
// console.log(myCreateDate.toLocaleString());
// console.log(myCreateDate.toDateString());

let miCreateDate = new Date("06-14-2024")
//console.log(miCreateDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getMinutes());

newDate.toLocaleString('default',{
    weekday:"long",
});







