const team_banglore = ["virat", "siraj","fab"]
const team_mumbai = ["hardik", "rohit","bumrah"]

const team_INDIA = team_banglore.concat(team_mumbai)
//Combines two or more arrays.
 //This method returns a new array without modifying any existing arrays.

console.log(team_INDIA);

const cartoon =["doremon","shinchan","oggy","chhota bheem"]
const cartoons =["shiva","hatori","ben-10","Hanuman"]

const Entertainment = [...cartoon,...cartoons]
//console.log(Entertainment);


const another_array = [1,2,3,[4,5,6,[7,8,9]]]
const real_another_array = another_array.flat(3)//total array values
////console.log(real_another_array);

const another_array2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array2 = another_array2.flat(Infinity)//in case of no idea about values
//console.log(real_another_array2);

console.log(Array.isArray("KASHI"));
console.log(Array.from("KASHI"));
console.log.apply(Array.from({name:"KASHI"}));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//returns new array