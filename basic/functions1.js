
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
console.log(loginUserMessage());

