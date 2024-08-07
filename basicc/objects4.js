//const snapUser = new Object()
const snapUser={}

snapUser.id = "2509abc"
snapUser.name = "Shruti"
snapUser.isLoggedIn = false

//console.log(snapUser);

const instaUser = {
    email:"ksbhujbal21",
    fullname: {
        userfullname: {
            firstname: "Kashi",
            lastname: "Bhujbal"
        }
    }

}

//console.log(instaUser.fullname);

const obj1 ={1:"A" ,2:"B"}
const obj2 ={3:"A" ,4:"B"}

//const obj3 = Object.assign({},obj1,obj2)  //for merge two value
const obj3 ={...obj1,...obj2}  //this is easy method to merge to value.
//console.log(obj3);

const users =[
    {
        id: 1,
        email: "Kashi09.com"
    },
    {
        id: 2,
        email: "shruti25@.com"
    }
]

//console.log(users[0].email); // khud try kiya tere bhai ne :)

console.log(snapUser); //output { id: '2509abc', name: 'Shruti', isLoggedIn: false }
console.log(Object.keys(snapUser)); // output [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(snapUser)); // output [ '2509abc', 'Shruti', false ]
console.log(Object.entries(snapUser)); // output [ [ 'id', '2509abc' ], [ 'name', 'Shruti' ], [ 'isLoggedIn', false ] ]
console.log(snapUser.hasOwnProperty('name')); // output true
