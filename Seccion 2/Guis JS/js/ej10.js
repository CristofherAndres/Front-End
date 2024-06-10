let cantNeg = 0;
let cantPos = 0;
let cantM15 = 0;
let sumPar = 0;

for (let i = 0; i < 10; i++) {
	let num = parseInt(prompt('Ingrese un número: '));
	if (num > 0) cantPos++;
	if (num < 0) cantNeg++;
	if (num % 15 == 0 && num != 0) cantM15++;
	if (num % 2 == 0) sumPar += num;
}

document.write(`Cantidad de números positivos: ${cantPos}<br>`);
document.write(`Cantidad de números negativos: ${cantNeg}<br>`);
document.write(`Cantidad de números múltiplos de 15: ${cantM15}<br>`);
document.write(`Suma de números pares: ${sumPar}<br>`);
