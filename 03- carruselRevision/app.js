const personas = [{nombre: "Ricardo Mollo", profesion: "Un distinto", sobreMi: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta accusantium delectus officia doloremque quas tenetur ex corporis, libero temporibus? Qui eum quibusdam omnis, impedit sunt perspiciatis amet aliquam optio iusto."},{nombre: "Juanito Roca",profesion: "Albañil", sobreMi: "Ejerzo hace aproximadamente 3 años, siendo el ultimo unos de mis mejores años hasta el momento."}];
const buttons = document.querySelectorAll("button");
let numero;
let titulo = document.querySelector("h2");
let subtitulo = document.querySelector("h3");
let parrafo = document.querySelector("p");

window.addEventListener('DOMContentLoaded', () => {
    numero = numeroRandom();
    actualizarDatos();
});

buttons[0].addEventListener("click", () => {
    if(numero === 0){
        numero = personas.length - 1;
    }else {
        numero--;
    }
    actualizarDatos();
});


buttons[1].addEventListener("click", () => {
    let numeroAleatorio = numeroRandom();
    while(numeroAleatorio == numero){
        numeroAleatorio = numeroRandom();
    }
    numero = numeroAleatorio;
    actualizarDatos();
});

buttons[2].addEventListener("click", () => {
    if(numero === personas.length - 1){
        numero = 0;
    }else {
        numero++;
    }
    actualizarDatos();
});

const numeroRandom = () => {
    return Math.floor(Math.random() * personas.length);
}

const actualizarDatos = () => {
    titulo.textContent = personas[numero].nombre;
    subtitulo.textContent = personas[numero].profesion;
    parrafo.textContent = personas[numero].sobreMi;
}