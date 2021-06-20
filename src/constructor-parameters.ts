export {};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

let taro = new Person("Taro", 30);
console.log(taro);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>

const profile: Profile = ['Takuya', 23]
const takuya = new Person(...profile)
console.log(takuya);
