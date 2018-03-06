const gridSize = 4;

function randInt(limit) {
	return Math.floor(Math.random() * limit);
}

function create2dArray() {
	let emptyGrid = new Array(gridSize);
	for (let i = 0; i < gridSize; i++) {
		emptyGrid[i] = new Array(gridSize);
		for (let o = 0; o < gridSize; o++) {
			emptyGrid[i][o] = 0;
		}
	}
	return emptyGrid;
}

function createTable() {
	for (let i = 0; i < gridSize; i++) {
		let row = $("<tr>").attr("id", "#row" + i);
		for (let o = 0; o < gridSize; o++) {
			row.append($("<td>").attr("id", ".col" + o));
		}
		$("table").append(row);
	}
}

$(document).ready(() => {

	let Board = {

		grid: create2dArray(),

		pieces: [],

		startGame() {
			for (let i = 0; i < 2; i++) {
				Board.addPiece();
			}
		},

		display() {
			Board.pieces.forEach((value, index) => {
				$("#row" + value.position.row)
					.find(".col" + value.position.col)
					.text(value.num);
			});
		},

		addPiece() {
			let randPosition = {
				row: randInt(gridSize),
				col: randInt(gridSize),
			}

			Board.pieces.forEach((value) => {

				while (randPosition.row === value.position.row &&
					randPosition.col === value.position.col) {

					randPosition = {
						row: randInt(gridSize),
						col: randInt(gridSize),
					}
				}

			});
			twoOrFour = (randInt(10) === 0) ? 4 : 2;

			Board.grid[randPosition.row][randPosition.col] = twoOrFour;
			Board.pieces.push(new Piece(randPosition, twoOrFour));
			Board.display();
		},

		slide() {

		},

	}

	function Piece(position, num) {

		this.position = {
			row: position.row,
			col: position.col,
		}

		this.num = num;

	}

	createTable();
	Board.startGame();
	console.log(Board.grid);

	$("body").append($("<button>").text("slide").attr("id", "slide-button"));
	$("body").on("click", "#slide-button", function() {
		Board.slide();
	});
});