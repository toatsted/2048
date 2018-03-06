$(document).ready(function() {
	const rows = 4;
	const cols = 4;

	let board;

	function Unit(position, num) {
		this.position = position;
		this.num = num;
	};

	function updateUnit(unit) {
		$("#row" + unit.position[0]).find(".col" + unit.position[1]).text(unit.num);
	}

	function updateGraph() {
		for (let row = 0; row < board.length; row++) {
			for (let col = 0; col < board[row].length; col++)
				updateUnit(board[row][col]);
		}
	}

	function starterPoints() {
		let positionOne = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
		let twoOrFour = Math.floor(Math.random() * 4);
		if (twoOrFour === 0) {
			board[positionOne[0]][positionOne[1]].num = 4;
		} else {
			board[positionOne[0]][positionOne[1]].num = 2;
		}
		let positionTwo = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
		while (positionOne === positionTwo) {
			positionTwo = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
		}
		twoOrFour = Math.floor(Math.random() * 4);
		if (twoOrFour === 0) {
			board[positionTwo[0]][positionTwo[1]].num = 4;
		} else {
			board[positionTwo[0]][positionTwo[1]].num = 2;
		}
	}

	// create 2d array board full of Units
	board = new Array(cols);
	for (let row = 0; row < board.length; row++) board[row] = new Array(rows);
	for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[row].length; col++) board[row][col] = new Unit([row, col], null);
	}

	starterPoints();
	updateGraph();

	$("body").keydown(function(e) {
		if (e.keyCode === 37) { // left arrow

		} else if (e.keyCode === 38) { // up arrow

		} else if (e.keyCode === 39) { // right arrow

		} else if (e.keyCode === 40) { // down arrow

		}
	});



});