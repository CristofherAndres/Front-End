let contador = 0;
function sumar() {
    contador++ // contador = contador + 1 ó contador += 1
    console.log(contador);
}

let texto = document.getElementById('texto');
function cambiarTexto() {
    if (texto.innerText === 'Antes') {
        texto.innerText = 'Despues'
    } else {
        texto.innerText = 'Antes'
    }
}