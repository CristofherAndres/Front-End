document.getElementById('registrationForm').addEventListener('submit', function(event){
    //Prevenir que el formulario se envie
    event.preventDefault();
    //Limpiar errores previos
    limpiarErrores()

    //Validar que todo es correcto
    let esValido = true;

    //Validar que el nombre sea obligatorio
    let nombre = document.frm.nombre.value
    if (nombre.trim() == ''){
        esValido = false
        mostrarError('nameError', 'El nombre es obligatorio')
    }

    //Validar que el correo sea valido
    let correo = document.frm.email.value
    if(!validarCorreo(correo)){
        esValido = false
        mostrarError('emailError', 'El correo no es valido')
    }

    //La contraseña debe tener al menos 6 caracteres
    let clave = document.frm.password.value
    if (clave.length < 6){
        esValido = false
        mostrarError('passwordError', 'La contraseña debe tener al menos 6 caracteres')
    }

    //Si todo es correcto, enviar el formulario
    if(esValido){
        alert('Formulario enviado')
        document.frm.submit()
    }

})

function validarCorreo(correo){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    return regex.test(correo)
}


function mostrarError(id, mensaje){
    document.getElementById(id).innerText = mensaje
}

function limpiarErrores(){
    document.getElementById('nameError').innerText = ''
    document.getElementById('emailError').innerText = ''
    document.getElementById('passwordError').innerText = ''
}