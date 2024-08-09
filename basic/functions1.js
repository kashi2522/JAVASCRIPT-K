
function SayMyName (){
console.log("K");
console.log("a");
console.log("s");
console.log("h");
console.log("i");
}
//SayMyName()

function TwoNumbers(){ // this is the simple method to add two numbers
    console.log(5*5)
    console.log(5+5)
    console.log(5-5)
    console.log(5/5)

}
//TwoNumbers()

//function TwoNumber1(number1,number2){ //this is the hard method to add two numbers
    
    //console.log(number1+number2);
//}

function TwoNumber1(number1,number2){ 
    let result =number1 + number2
   // console.log("kashu");
    //return result   // yachya nantr kahi pn print hot nahi.
    return number1+number2
}
TwoNumber1(5,5)

const result = TwoNumber1(3,5)
//console.log("Result:", result);

function loginUserMessage(username="kashinath"){
    if(username==undefined){ // yachya "==="jagevar aapn "!" symbol pn vapru shakto
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`


}
//console.log(loginUserMessage("Kashu")); //"Kashu just logged in"
//console.log(loginUserMessage());


function calculateCartPrice(...num1){ // (... this is the rest operator
    // which can be use for add multiple values )
    return num1
}
//console.log(calculateCartPrice(200,400,600,800,1000));

const user = {
    username:"Kashu",
    price : 1000
}
function handleObjecct(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObjecct(user)


const newArray =[200,400,600,800]
function returnSecondValue(getArray){
    return getArray[3]
}
 console.log(returnSecondValue(newArray));