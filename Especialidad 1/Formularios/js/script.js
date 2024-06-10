//Obtener el formularioo enviado
document
	.getElementById('registrationForm')
	.addEventListener('submit', validarDatos);

function validarDatos() {
	//Detener el envio del formulario, para validar los datos.
	event.preventDefault();
    limpiarErrores()

	//Variables a validar
	let nombre = document.getElementById('name').value;
	let correo = document.getElementById('email').value;
	let password = document.getElementById('password').value;

	//Bandera para indicar si el formulario es valido
	let esValido = true;

	//Validar el nombre que es obligatorio
	if (nombre.trim() === '') {
		mostrarError('nameError', 'El nombre es obligario');
		esValido = false;
	}

	//validar el correo electronico
	if (!validarCorreo(correo)) {
		mostrarError('emailError', 'Por favor, ingrese un correo valido');
		esValido = false;
	}

	//Validar la contraseña, la cual debe tener al menos 6 caracteres
	if (password.length < 6) {
		mostrarError(
			'passwordError',
			'La contraseña debe tener al menos 6 caracteres'
		);
		esValido = false;
	}

    if (esValido){
        alert("El formulario es valido")
    }

}
function limpiarErrores(){
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
}

function mostrarError(id, mensaje) {
	document.getElementById(id).innerText = mensaje;
}

function validarCorreo(email) {
	const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	return re.test(email);
}
