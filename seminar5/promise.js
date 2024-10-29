let promise = new Promise((resolve, reject) => {
    //executor
    setTimeout(() => {
        const success = false;

        if (success) {
            resolve("Operation succeeded");
        } else {
            reject(new Error("Operation failed"));
        }
    }, 2000);
});

promise.then((message) => {
    console.log(message);
}).catch((error => {
    console.log(error);
}))

console.log('here')