let countEl = document.querySelector('.count')
let inputEl = document.getElementById('input')
let resetEl = document.getElementById('reset')

function increase(){
    let countEl = document.querySelector('.count')
    let input = Number(inputEl.value);
    let value = Number(countEl.innerText);
    countEl.innerText = Number(value + input);
    console.log('increased');
}

function decrease(){
    let countEl = document.querySelector('.count')
    let input = Number(inputEl.value);
    let value = Number(countEl.innerText);
    countEl.innerText = Number(value - input);
    console.log('decreased');
}

function reset(){
    countEl.innerHTML = 0;
}