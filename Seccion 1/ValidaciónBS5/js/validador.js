// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
	'use strict';

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll('.needs-validation');

	// Loop over them and prevent submission
	Array.from(forms).forEach((form) => {
		form.addEventListener(
			'submit',
			(event) => {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add('was-validated');
			},
			false
		);
	});
})();



// El nombre puede ser de letras y espacios, no aceptan simbolos y numeros.
// Solo tiene de 3 a 10 caracteres
//Validar que el correo sea valido
// Los demas son campos obligatorios
// setCustomValidity