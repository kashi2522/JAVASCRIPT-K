// class user{
// constructor(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }
// encryptPassword(){
//     return `${this.email}kashi`;
// }
// kashi(){
//     return`${this.username} with kashi`
// }

// }

// const chai = new user("chai", "Kashi@gmail.com", "0925")

// console.log(chai.encryptPassword());
// console.log(chai.kashi());

//behind the scene

function User{
    (username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
    }
User.prototype.encryptPassword = function(){
    return`${this.username} with kashi`

}
}

const tea = new user("chai", "Kashi@gmail.com", "0925")

console.log(chai.encryptPassword());

