//Validar que el nombre no este vacio (obligatorio)
//Debe contener minimo 2 caracteres
//Maximo 10 caracteres
//No se aceptan los espacios antes y despues del texto

let btnGuardar = document.getElementById('btnGuardar');
btnGuardar.addEventListener('click', validarDatos);

function validarDatos() {
	//validarNombre();
	validarApellido();
}

function validarNombre() {
	let nombre = document.frm.nombre.value;
	nombre = nombre.trim(); //Elimina los espacios en blanco al inicio y al final
	if (nombre.length == 0) alert('El nombre esta vacio');
	else if (nombre.length < 2) alert('El nombre debe tener minimo 2 caracteres');
	else if (nombre.length > 10)
		alert('El nombre debe tener máximo 10 caracteres');
}

function validarApellido() {
	let apellido = document.frm.apellido.value;
	apellido = apellido.trim(); //eliminamos los espacios
    mayusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    for (let i = 0; i < apellido.length; i++){
        if (apellido[i] == ' ') alert('No se aceptan espacios en el apellido')
        break;
    }
    let flagMayuscula = false;
    for (let i = 0; i < mayusculas.length; i++){
        if (apellido[0] == mayusculas[i]) flagMayuscula = true;
        break;
    }
    if(!flagMayuscula) alert('El apellido debe empezar con mayuscula');
}
