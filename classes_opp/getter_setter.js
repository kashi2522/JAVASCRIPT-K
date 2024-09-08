class user {
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase() //RAJSHRI@259
    }

    set email(value){
        this._email=value
    }




    get password (){
        return  `${this._password}shruti`//KASHI09
    }
    set password (value){
        this._password =value

    }
}
const kashi = new user("rajshri@259", "kashi09")
console.log(kashi.password);
// o/p = rajshri@259
console.log(kashi.email);
//RAJSHRI@259