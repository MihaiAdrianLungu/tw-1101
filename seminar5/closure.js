const privateCounter = (() => {
    let count = 0;

    console.log(`initial value of the counter is ${count}`);

    return () => {
        count++;
        console.log(`current value of the counter is ${count}`);
    }
})();

const privateCounter2 = () => {
    let count = 0;

    console.log(`initial value of the counter 2 is ${count}`);

    return {
        increment: () => {
            count++;
            console.log(`current value of the counter 2 is ${count}`);
        },
        decrement: () => {
            count--;
            console.log(`current value of the counter 2 is ${count}`); 
        }
    }
}

privateCounter();

privateCounter2().increment();
privateCounter2().decrement();