//Validar el nombre
//Oblicatorio
//Debe contener un minimo de 2 caracteres
//Debe contener un maximo de 10 caracteres
//Eliminar los espacios antes y despues del texto principal
//No puede contener numeros

let btnGuardar = document.getElementById('btnGuardar');
btnGuardar.addEventListener('click', validarDatos);

function validarDatos() {
	//validarNombre();
	validarApellido();
}

function validarNombre() {
	let nombre = document.frm.nombre.value;
	nombre = nombre.trim(); //Elimina los espacios antes y despues del texto principal
	if (nombre.length == 0) alert('El nombre es obligatorio');
	else if (nombre.length < 2)
		alert('El nombre debe contener un minimo de 2 caracteres');
	else if (nombre.length > 10)
		alert('El nombre debe contener un maximo de 10 caracteres');
	else if (tieneNumero(nombre)) alert('El nombre no puede contener numeros');
	else alert('Nombre correcto');
}

function tieneNumero(nombre) {
	numeros = '0123456789';
	for (let i = 0; i < nombre.length; i++) {
		for (let j = 0; j < numeros.length; j++) {
			if (nombre[i] == numeros[j]) return true;
		}
	}
}

//Validar apellido
//El apellido es opcional
//Pero no se aceptan ningun espacio
//No puede contener numeros
//El apellido debe empezar con mayuscula

function validarApellido() {
	let apellido = document.frm.apellido.value;

    if(apellido.length==0){
        alert('Apellido correcto')
        return
    }
	if (tieneEspacio(apellido)) alert('El apellido no puede contener espacios');
	else if (tieneNumero(apellido))
		alert('El apellido no puede contener numeros');
	else if (!parteMayuscula(apellido))
		alert('El apellido debe empezar con mayuscula');
	else alert('Apellido correcto');
}

function tieneEspacio(apellido) {
	for (let i = 0; i < apellido.length; i++) {
		if (apellido[i] == ' ') return true;
	}
}

function parteMayuscula(apellido) {
	mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÑ';
	for (let i = 0; i < mayusculas.length; i++) {
        if(apellido[0]==mayusculas[i]) return true
    }
    return false
}
