export {}

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'Takuya'
    static lastName: string = 'Tsutsumi'

    static work() {
       return `Hey! This is ${this.firstName}!`
    }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer)
console.log(Me.work());

