$(document).ready(function() {
	const rows = 4;
	const cols = 4;

	let board = {
		grid: [],
		pieces: 

		addPiece() {

		}

	};

	function Unit(position, num) {
		this.position = position;
		this.num = num;
	};

	function updateUnit(unit) {
		$("#row" + unit.position[0]).find(".col" + unit.position[1]).text(unit.num);
	}

	function updateGraph() {
		for (let row = 0; row < board.grid.length; row++) {
			for (let col = 0; col < board.grid[row].length; col++)
				updateUnit(board.grid[row][col]);
		}
	}

	function addPiece() {
		position = 
		pieces.forEach((value, index) => {

		});
	}

	function starterPoints() {
		let positionOne = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
		let twoOrFour = Math.floor(Math.random() * 4);
		if (twoOrFour === 0) {
			board.grid[positionOne[0]][positionOne[1]].num = 4;
		} else {
			board.grid[positionOne[0]][positionOne[1]].num = 2;
		}
		let positionTwo = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
		while (positionOne === positionTwo) {
			positionTwo = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
		}
		twoOrFour = Math.floor(Math.random() * 4);
		if (twoOrFour === 0) {
			board.grid[positionTwo[0]][positionTwo[1]].num = 4;
		} else {
			board.grid[positionTwo[0]][positionTwo[1]].num = 2;
		}
	}

	// create 2d array board.grid full of Units
	board.grid = new Array(cols);
	for (let row = 0; row < board.grid.length; row++) board.grid[row] = new Array(rows);
	for (let row = 0; row < board.grid.length; row++) {
		for (let col = 0; col < board.grid[row].length; col++) board.grid[row][col] = new Unit([row, col], null);
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