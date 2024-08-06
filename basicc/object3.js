//singleton
//object.create

//Object literals

const mySym =Symbol("Kashu")

const Jsuser ={
    name:"kashinath",
    "full name":"kashinath Bhujbal",
    [mySym]:"kashu",
    age:19,
    prn:2324003457,
    email:"k.s.bhujbal99.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]

}

// console.log(Jsuser.email);
// console.log(Jsuser["email"])
// console.log(Jsuser[mySym])

//console.log(Jsuser.email = "ksbhujbal21@gmail.com")
//Object.freeze(Jsuser)
Jsuser.email = "ksbhujbal215156@gmail.com"
///console.log(Jsuser);


Jsuser.greeting = function (){
    console.log("Hello JS user");
}

Jsuser.greetingTwo = function (){
    console.log(`Hello JS user,${this.name}`);
}


console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());




