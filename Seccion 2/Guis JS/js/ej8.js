let sueldo, antiguedad, sueldoFinal;

sueldo = parseInt(prompt('Ingrese su sueldo: '));
antiguedad = parseInt(prompt('Ingrese su antiguedad: '));

if(sueldo<500 && antiguedad >= 10){
    sueldoFinal = sueldo * 1.2;
    document.write("Su sueldo aumento 20% <br>")
} else if (sueldo<500 && antiguedad < 10){
    sueldoFinal = sueldo * 1.05;
    document.write("Su sueldo aumento 5% <br>")
}else {
    sueldoFinal = sueldo;
    document.write("Su sueldo no aumento <br>")
}

document.write("Su sueldo final es: " + sueldoFinal + "<br>")