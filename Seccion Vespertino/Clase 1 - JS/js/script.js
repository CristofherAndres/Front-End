//Buscar el espacio donde vamos a poner el nombre
var texto = document.getElementById('texto');
texto.innerText = 'Hola ' + nombre;
console.log(texto);

function cambiarTexto() {
	var texto = document.getElementById('texto');

	if (texto.innerText == 'Antes') {
		texto.innerText = 'Después';
	} else {
		texto.innerText = 'Antes';
	}
}
