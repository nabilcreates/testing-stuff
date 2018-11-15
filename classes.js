let people = []

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    push(){
        return{
            name: this.name,
            age: this.age
        }
    }
}

let nabil = new Person('Nabil',15)
people.push(nabil.push())

let yasin = new Person('Yasin',9)
people.push(yasin.push())

console.log(people)