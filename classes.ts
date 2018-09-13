class User{
   private name: string;
   public email: string;
   private age: number;

    constructor(name: string, email: string, age: number) {
        this.name = name;
        this.email = email;
        this.age = age;

        console.log("User Created:" + this.name)
    }

}

let dan = new User("Dan", "kamaudan@gmail.com", 99)

console.log(dan.email);