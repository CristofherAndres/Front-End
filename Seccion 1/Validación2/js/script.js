//Reconocer el formulario
document
	.getElementById('registrationForm')
	.addEventListener('submit', validarFormulario);

function validarFormulario(event) {
	//Prevenir que el formulario se envíe
	event.preventDefault();

	//Limpiar los errores previos
	limpiarErrores();

    //Validador del formulario
    let esValido = true;

	//Obtener los valores de los inputs
	let nombre = document.frm.nombre.value;
	let correo = document.frm.email.value;
	let clave = document.frm.password.value;

	//Validaciones a realizar
	//El nombre debe ser obligatorio
	//El correo debe ser un correo válido
	//La clave debe tener al menos 6 caracteres

	if (nombre.trim() === '') {
		mostrarError('nameError', 'El nombre es obligatorio');
        esValido = false;
	}

	if (!validarCorreo(correo)) {
		mostrarError('emailError', 'El correo no es válido');
        esValido = false;
	}

    if(clave.length < 6){
        mostrarError('passwordError', 'La clave debe tener al menos 6 caracteres');
        esValido = false;
    }

    if(esValido){
        alert('Formulario enviado correctamente');
        //Limpiar los campos del formulario
        document.frm.reset();
    }


}

function validarCorreo(correo){
    const expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return expresion.test(correo)
}

function mostrarError(id, mensaje) {
	document.getElementById(id).innerText = mensaje;
}

function limpiarErrores() {
	document.getElementById('nameError').innerText = '';
	document.getElementById('emailError').innerText = '';
	document.getElementById('passwordError').innerText = '';
}
