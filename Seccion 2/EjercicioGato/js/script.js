let jugador = 'X';

for (let i = 1; i <= 9; i++) {
	document.getElementById('btn' + i).addEventListener('click', jugar);
}

function jugar(evt) {
	evt.target.value = jugador;
	evt.target.disabled = true;
	jugador == 'X' ? (jugador = 'O') : (jugador = 'X');
	comprobarGanador();
}

function comprobarGanador() {
	let b1 = document.getElementById('btn1').value;
	let b2 = document.getElementById('btn2').value;
	let b3 = document.getElementById('btn3').value;

	/*     if (b1 == 'X' && b2 =='X' && b3 == 'X'){
        alert('Ganó X')
    }

    if (b1 == 'O' && b2 =='O' && b3 == 'O'){
        alert('Ganó O')
    } */

	if (b1 == b2 && b2 == b3 && b1 != ' ') alert('Ganó ' + b1);
}
