let jugador = 'X';

for (let i = 1; i <= 9; i++) {
	document.getElementById('btn' + i).addEventListener('click', jugar);
}

function jugar(evt) {
	evt.target.value = jugador;
	jugador == 'X' ? (jugador = 'O') : (jugador = 'X');
	evt.target.disabled = true;

	comprobarGanador();
}

function comprobarGanador() {
	let b1 = document.getElementById('btn1').value;
	let b2 = document.getElementById('btn2').value;
	let b3 = document.getElementById('btn3').value;

	if (b1 == b2 && b2 == b3 && b1 != ' ') alert('Ganador: ' + b1);
}
