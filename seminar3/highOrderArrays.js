const arr = [123, 54, 23, 564];

const filteredArray = arr.filter(el => el % 2 === 0);

// console.log(arr);
// console.log(filteredArray);


const newForEachArr = arr.forEach(el => {
    return el;
})

const newMapArr = arr.map(el => {
    return el * 10;
})

const newMapArr2 = arr.map( async (el) => {
    return el * 10;
})

// console.log(newForEachArr);
// console.log(newMapArr);

const sum = arr.reduce((acc, el) => acc + el, 0);

const foundNumber = arr.find(el => el === 545)
console.log(foundNumber);