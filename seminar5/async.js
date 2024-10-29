// function logger(message) {
//     console.log(message);
// }

// async function logger2(message) {
//     console.log(message);
// }

// const arrLogger = (message) => {
//     console.log(message);
// }

// const arrLogger2 = async (message) => {
//     console.log(message);
// }

async function f() {
    try {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error('error message')), 1000)
        });

        let result = await promise; // wait until the promise resolves (*)
        console.log(result); // "done!"
    } catch (error) {
        console.log(error)
    }
}

f()
console.log(2)