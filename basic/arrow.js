const user ={
    username:"Kashi",
    ID: 999,
    welcomeMessage:function (){
       // console.log(`${this.username}, welcome to website`);
        //console.log(this)
    }

}

user.welcomeMessage()
//console.log(this)

//function chai(){
    //let username = "Kashi"
    //console.log(this.username);

//const chai =function(){
   // let username = "Kashi"
   // console.log(this.username);
//}

// const chai =()=>{
//     let username ="Kashi"
//     console.log(this.username);
// }
// chai()


//const add =(num1,num2)=> { this is the basic variable declare method
    //return num1+num2
//}
//console.log(add(5,5));

// adds =(num1,num2)=> num1+num2// this is the another veriable declare method

adds = (num1,num2)=>(num1+num2) // this is another easy method
console.log(adds(5,6));











