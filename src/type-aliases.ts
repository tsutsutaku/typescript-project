export {}

type Mojiretsu = string;

const fooString: string = 'Hello';
const foomojiretsu: Mojiretsu = 'Hello';


type Profile = {
    name: string;
    age: number;
}

const example: Profile = {
    name: 'Ham',
    age: 43
};

type Profiles2 = typeof example;