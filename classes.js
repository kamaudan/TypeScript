var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created:" + this.name);
    }
    return User;
}());
var dan = new User("Dan", "kamaudan@gmail.com", 99);
console.log(dan.email);
