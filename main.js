let example = document.querySelector('.example')
let btn = document.querySelector('button')
let result = document.querySelector('#result')

let correctResult = 0
let num1 = 0
let num2 = 0

function getRandomNum(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    
    num1 = Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
    num2 = Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
    
    example.textContent = `${num1} x ${num2} = `
}
getRandomNum(2, 9);

function checkResult() {
    correctResult = num1 * num2;
    
    (correctResult == result.value) ? (alert('Правильно'), getRandomNum(2, 9), result.value = '') : alert('Ответ не верный, попробуй еще раз!')
}

btn.addEventListener('click', checkResult)
result.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { 
        checkResult();
    }
});