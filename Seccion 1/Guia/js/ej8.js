//Variables a utilizar
let sueldo, antiguedad, total;

sueldo = parseInt(prompt("Ingrese su sueldo"));
antiguedad = parseInt(prompt("Ingrese su antiguedad"));


if (sueldo <500 && antiguedad >=10){
    total = sueldo * 1.2;
    document.write("Su sueldo aumento un 20%")
} else if (sueldo < 500 && antiguedad <10){
    total = sueldo * 1.05;
    document.write("Su sueldo aumento un 5%")
} else {
    total = sueldo;
    document.write("Su sueldo no aumento")
}

document.write("<br>");
document.write("El sueldo final es: " + total);