export {}

// * owner
//  * 所有者
//  * 初期化時に設定
//  * 途中で変更できない
//  * 参照できる

// * secretCard
//  * 所有者
//  * 初期化時に設定
//  * 途中で変更できる
//  * 参照できない


class MyNumberCard {
    private _owner: string;
    private _secretNumber: number;

    constructor(owner: string, secretNumber: number) {
        this._owner = owner;
        this._secretNumber = secretNumber
    }

    get owner() {
        return this._owner;
    }

    set secretNumber(secretNumber: number) {
        this._secretNumber = secretNumber
    }

    debugPrint() {
        return this._secretNumber;
    }
}

let card = new MyNumberCard('Takuya', 1234567890)
// card.owner = "Ham";

console.log(card.owner);
// console.log(card.secretNumber);
console.log(card.debugPrint());
card.secretNumber = 11111111111
console.log(card.debugPrint());

console.log(card.secretNumber);
