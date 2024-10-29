let counter = 0;

const privateCounter = setInterval(() => {
    counter++;

    console.log(`current value of count: ${counter}`);

    if (counter === 5) {
        clearInterval(privateCounter);
        console.log('counter stopped');
    }
}, 500)