var lodash = require('lodash');

export {}

const sum: (...values: number[]) => number = (...values: number[]): number => {
    var su = lodash.sum(values)
    return su
};

console.log(sum(1,2,3,4));