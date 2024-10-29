let counter = 0;

const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const span = document.getElementById('counter');

console.log(increaseBtn)

increaseBtn.addEventListener('click', () => {
    counter++;

    span.textContent = counter;
})

decreaseBtn.addEventListener('click', () => {
    counter--;

    span.textContent = counter;
})