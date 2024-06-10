document
	.getElementById('registrationForm')
	.addEventListener('submit', validarFormulario);

function validarFormulario(event) {
	//Validar el email
	//Validar que la contraseña tenga al menos 6 caracteres

	//Prevenir que el formulario se envie
	event.preventDefault();

	limpiarErrores();

  esValido = true;

	//Validar que el nombre sea obligatorio
	let nombre = document.getElementById('name').value;
	if (nombre.trim() === '') {
		mostrarError('nameError', 'El nombre es obligatorio');
    esValido = false;
	}

	let clave = document.getElementById('password').value;
	if (clave.length < 6) {
		mostrarError(
			'passwordError',
			'La contraseña debe tener al menos 6 caracteres'
		);
    esValido = false;
	}
	let correo = document.getElementById('email').value;
	if (!validarCorreo(correo)) {
		mostrarError('emailError', 'El correo no es valido');
    esValido = false;
	}

  if(esValido){
    alert('Formulario enviado correctamente');
    document.getElementById('registrationForm').reset();
  }
}

function validarCorreo(correo) {
	let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	return regex.test(correo);
}

function mostrarError(id, mensaje) {
	document.getElementById(id).innerText = mensaje;
}
function limpiarErrores() {
	document.getElementById('nameError').innerText = '';
	document.getElementById('emailError').innerText = '';
	document.getElementById('passwordError').innerText = '';
}
