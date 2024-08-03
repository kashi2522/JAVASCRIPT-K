const name = "Kashi"
const repoCount = 50
//.log(name+ repoCount+" value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameNAme = String ('kashi-hc-com')

// console.log(gameNAme[0]);
// console.log(gameNAme.charAt(2));
// console.log(gameNAme.indexOf('i'));
// console.log(gameNAme.toUpperCase());

const newString = gameNAme.substring(0,4)
console.log(newString);

const anotherString = gameNAme.slice (-5,4)
console.log(anotherString);

const newStringOne = "   kashi    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://kashi.com/kashi%20Bhujbal"

console.log(url.replace('%20','-'));
console.log(url.includes('Bhujbal'));

console.log(gameNAme.split('-'))