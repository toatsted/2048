const gridSize = 4;

function randInt(limit) {
	return Math.floor(Math.random() * limit);
}

function create2dArray() {
	let emptyGrid = new Array(gridSize);
	emptyGrid.forEach((value) => {
		value = new Array(gridSize);
	});

	return emptyGrid;
}

$(document).ready(() => {

	let Board = {

		grid: create2dArray(),

		pieces: [],

		startGame() {
			for (let i = 0; i < 2; i++) {
				Board.addPiece();
				Board.pieces[i].display();
			}
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

			Board.pieces.push(new Piece(randPosition, (randInt(10) === 0) ? 4 : 2));

			console.log("randPosition:" + JSON.stringify(randPosition));
		},

		slide(direction) {

		},

	}

	function Piece(position, num) {

		this.position = {
			row: position.row,
			col: position.col,
		}

		this.num = num;

		this.display = function(){
			$("#row" + this.position.row)
				.find(".col" + this.position.col)
				.text(this.num);
		}

	}

	Board.startGame();
});