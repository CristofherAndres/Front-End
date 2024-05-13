//Variables a utilizar
let precio, cantidad, total;

precio = parseInt(prompt("Ingrese el precio del producto"));
cantidad = parseInt(prompt("Ingrese la cantidad del producto"));

total = precio * cantidad;

document.write("El total a pagar es: " + total);