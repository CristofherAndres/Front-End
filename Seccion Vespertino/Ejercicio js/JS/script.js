/* Definir la variable de nuestro contador */

let contador = document.getElementById('numero');
let inMax = document.getElementById('inMax');

function restar() {
	contador.innerText = parseInt(contador.innerText) - 1;
}

function sumar() {
	/* Primera condición es sumar hasta el infinito si no hay limite */
	if (inMax.value == '') {
		//Sumar de 1 en 1 hasta el infinito
		contador.innerText = parseInt(contador.innerText) + 1;
	} else if (parseInt(contador.innerText) < parseInt(inMax.value)) {
		/* Si existe un limite */
		contador.innerText = parseInt(contador.innerText) + 1;
	}
}
