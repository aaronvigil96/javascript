let numero = 0;
let buttons = document.querySelectorAll("button");
let titulo = document.querySelector('.numero');


buttons[0].addEventListener('click', () => {
    numero--;
    actualizarTitulo();
});

buttons[1].addEventListener('click', () => {
    numero = 0;
    actualizarTitulo();
})

buttons[2].addEventListener('click', () => {
    numero++;
    actualizarTitulo();
})

const actualizarTitulo = () => {
    titulo.textContent = numero;
    if(numero > 0){
        titulo.classList.remove("red");
        titulo.classList.remove("black");
        titulo.classList.add("green");
    }else if(numero < 0){
        titulo.classList.remove("green");
        titulo.classList.remove("black");
        titulo.classList.add("red");
    }else {
        titulo.classList.remove("red");
        titulo.classList.remove("green");
        titulo.classList.add("black");
    }
}