// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms)
//     })
// }

// delay(2000).then(() => {
//     console.log('Here')
// })

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Here');
    }, 2000)
})

console.log(promise)

promise.then(result => console.log(result))