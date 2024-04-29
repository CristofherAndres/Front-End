/* Definir las variables a usar */
let numero = document.getElementById('numero');

function restar() {
    numero.innerText = parseInt(numero.innerText) - 1;
    console.log(numero.innerText);
}

function sumar() {
    numero.innerText = parseInt(numero.innerText) + 1;
    console.log(numero.innerText);
}
