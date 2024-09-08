const user = {
    _email:'asus.com',
    _password:'asus-India',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    },

    get password(){
        return this._password.toUpperCase()
    },

    set password(value){
        this._password=value
    }
}
    const india = Object.create(user)
    console.log(india.email);
    console.log(india.password);