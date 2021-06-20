export {};

type Profile = {
    name: string;
    age: number;
}

const me: Profile = {
    name: 'Takuta',
    age: 23
}

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>

const frined: PersonalDataType = {
    name: 'shigeru',
    age:25,
}

// frined.age++

type Yomitorisenyo<T> = {
    readonly [P in keyof T]: T[P]
}

type YomitorisenyoProfile = Yomitorisenyo<Profile>