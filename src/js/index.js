import { connect } from './connect.js'

const submit = document.querySelector('#btn-submit');
const buttonContinue = document.querySelector('.btn-continue');
const texts = document.querySelectorAll('.text');
const connectBtn = document.querySelector('#connect');

let currentText = 0

function hideText(){
    const textSelected = document.querySelector('.selected');
    textSelected.classList.remove('selected');
}

function showText(indice){
    texts[indice].classList.add('selected');
}

buttonContinue.addEventListener('click', () => {
    if(currentText === texts.length - 1){
        currentText = -1;
    }

    hideText();
    currentText++;
    showText(currentText);
})


submit.addEventListener('click', function(event){
    event.preventDefault();

    const input = document.querySelectorAll('.input');
    const fill = document.querySelector('.fill-out');

    input.forEach(function(element){
        if(element.value === ''){
            element.classList.add('error');
            fill.innerHTML = '<p>Please, fill out the fields.</p>'
        }
    })
})

connectBtn.addEventListener('click', connect());