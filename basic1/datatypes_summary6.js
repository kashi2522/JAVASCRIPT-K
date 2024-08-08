// primitive datatypes
//7 types-string,boolean,null,number,undifined,symbol,Bigint

const score = 100
const scoreValue = 100.9
const isLoggedIn = false
const outsideTemp = null
let userEmail

const id =Symbol('123')
const anotherId =Symbol ('123')
console.log(id==anotherId);

const bigNumber = 12345677895545451561541451n




//Non-primitive(Reference)
//array,object,functions

const Name = ["shweta","Rajshri","shruti","sakshi"]

let myObj = {
    name:"kashi",
    age:19,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp );