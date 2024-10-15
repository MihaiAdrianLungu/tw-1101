const arr = [1,2,3,4]

// for (let i = 0; i < arr.length; i ++) {
//     console.log(arr[i]);
// }

// for (el of arr) {
//     console.log(el)
// }

// for (el in arr) {
//     console.log(el)
// }

// arr.forEach(el => {
//     console.log(el);
// })

arr.forEach((el, index) => {
    console.log(el);
    console.log(index);
})