let cantNeg = 0;
let cantPos = 0;
let cant15 = 0;
let sumPar = 0;

for (let i = 1; i <= 10; i++) {
	let valor = parseInt(prompt('Ingrese un valor'));
    if (valor < 0) {
        cantNeg++;
    } else if (valor > 0) {
        cantPos++;
    }
    if (valor % 15 == 0 && valor != 0) {
        cant15++;
    }
    if (valor % 2 ==0){
        sumPar += valor;
    }
}

document.write(`Cantidad de negativos: ${cantNeg}<br>`);
document.write(`Cantidad de positivos: ${cantPos}<br>`);
document.write(`Cantidad de múltiplos de 15: ${cant15}<br>`);
document.write(`Suma de los pares: ${sumPar}<br>`);
