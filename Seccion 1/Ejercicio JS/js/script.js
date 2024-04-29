/* Definir las variables a usar */
let numero = document.getElementById('numero');
let inMax = document.getElementById('inMax');

function restar() {
    numero.innerText = parseInt(numero.innerText) - 1;
    console.log(numero.innerText);
}

function sumar() {

    if (inMax.value == ""){
        numero.innerText = parseInt(numero.innerText) + 1;
        console.log(numero.innerText);
    }else if (parseInt(numero.innerText)<parseInt(inMax.value)){
        numero.innerText = parseInt(numero.innerText) + 1;
        console.log(numero.innerText);
    }else{
        alert("No se puede superar el valor máximo");
    }

}
