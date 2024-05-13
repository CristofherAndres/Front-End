let num1, num2, num3, num4, suma, producto;

num1 = parseInt(prompt('Ingrese el primer número: '));
num2 = parseInt(prompt('Ingrese el segundo número: '));
num3 = parseInt(prompt('Ingrese el tercero número: '));
num4 = parseInt(prompt('Ingrese el cuarto número: '));

suma = num1 + num2 + num3 + num4;
producto = num1 * num2 * num3 * num4;

document.write('La suma de los números es: ' + suma);
document.write('<br>');
document.write('El producto de los números es: ' + producto);
