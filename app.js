const gridSize = 3;

function randInt(limit) {
	return Math.floor(Math.random() * limit);
}

function create2dArray() {
	let emptyGrid = [];
	for (let i = 0; i < gridSize; i++) {
		emptyGrid.push([0]);
		for (let o = 0; o < gridSize; o++) {
			emptyGrid[i].push([0]);
		}
	}
	return emptyGrid;
}

function createTable() {
	for (let i = 0; i < gridSize; i++) {
		let row = $("<tr>").attr("id", "row" + i);
		for (let o = 0; o < gridSize; o++) {
			row.append($("<td>").addClass("col" + o));
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
			for(let row = 0; row < gridSize; row++){
				for(let col = 0; col < gridSize; col++){
					Board.grid[row][col] = 0;
				}
			}

			$("table").empty();
			createTable();

			Board.pieces.forEach((value, index) => {
				$("#row" + value.position.row)
					.find(".col" + value.position.col)
					.text(value.num);
				Board.grid[value.position.row][value.position.col] = value;
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
			
			for(let col = 0; col < gridSize; col++){
				for(let row = gridSize - 1; row >= 0; row++){

					if(!Board.grid[row][col] === 0){

						if(!row === gridSize - 1){

						}
					}
				}
			}


			Board.addPiece();
			console.log(Board.grid);
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