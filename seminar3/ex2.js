const arr = [1,2,5,6,12,14];

const sumDivisibleBy = (arr, divisor) => {
    return arr.filter(num => num % divisor === 0).reduce((acc, el) => acc + el, 0);
}

console.log(sumDivisibleBy(arr, 2))
console.log(sumDivisibleBy(arr, 3))