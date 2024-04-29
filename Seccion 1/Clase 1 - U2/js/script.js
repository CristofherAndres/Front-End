//nombre = prompt("Ingresa tu nombre")
//alert("Hola "+nombre+" Bienvenido a mi pagina")

//Buscar el h2 con id saludo para poner el nombre del usuario.
//saludo = document.getElementById("saludo")
//console.log(saludo.innerText) /* Obtener el texto dentro del h2 */
//saludo.innerText = "Hola "+nombre+", bienvenido a mi pagina"

//Buscar el boton con id btnSumar1 para agregarle un evento de un click
//btnSumar = document.getElementById('btnSumar1')

//Iniciar el contador de la suma
var contador = 0;

//Crear función
function sumar() {
	contador++; // contador = contador + 1 ó contador += 1
	console.log('La cantidad de click hechos es: ' + contador);
}

function cambiarTexto() {
	texto = document.getElementById('texto');
	if (texto.innerText === 'Antes') {
		texto.innerText = 'Después';
	} else {
		texto.innerText = 'Antes';
	}
}
