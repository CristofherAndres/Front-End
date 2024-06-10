let btnGuardar = document.getElementById('btnGuardar');
btnGuardar.addEventListener('click', validarDatos);

function validarDatos() {
	//validarNombre();
	validarApellido();
}

function validarNombre() {
	let nombre = document.frm.nombre.value;
	nombre = nombre.trim();
	if (nombre.length == 0) alert('El nombre es obligatorio');
	if (nombre.length < 2) alert('El nombre debe tener al menos 2 caracteres');
	if (nombre.length > 10)
		alert('El nombre debe tener al menos de 10 caracteres');
}

//Validar el nombre
//Minimo 2 caracteres
//maximo 10 caracteres
//No puede ser vacio (obligatorio)
//Se deben borrar los espacios en blanco al inicio y al final del texto ingresado

//Validar el apellido
//Opcional
//No se acepta ningun espacio
//La primera letra debe ser mayuscula

function validarApellido() {
	let apellido = document.frm.apellido.value;
    const mayuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let flagMay = false;
	if (apellido.length != 0) {
		//No aceptar espacios
		for (let i = 0; i < apellido.length; i++) {
			if (apellido[i] == ' ') alert('No se aceptan espacios en el apellido');
			break;
		}
        //Validar que la primera letra sea mayuscula
        for(let i = 0; i < mayuscula.length; i++) {
            if (apellido[0] == mayuscula[i]) flagMay = true;
            break;
        }

        if (!flagMay) alert('El apellido debe empezar con mayuscula')

	}
}
