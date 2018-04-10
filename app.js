function randInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

const gridSize = 4;

$(() => {

	Board = {

		pieces: [],

		addPiece: function() {
			let location = {
				row: randInt(gridSize),
				col: randInt(gridSize)
			}

			let locations = [];
			Board.pieces.forEach((value, index) => {
				locations.push(value.location);
			})

			while(location in locations){
				locations = {
					row: randInt(gridSize),
					col: randInt(gridSize)
				}
			}

			new Piece((randInt(10) === 0) ? 4 : 2, location)
			Board.display();
		},

		display: function() {
			$(".slot").text("0")
			Board.pieces.forEach((value, index) => {
				$("#row" + value.location.row)
					.find(".col" + value.location.col)
						.text(value.num);
			})
		},

		slide: function(row){
			let end = [];
			row.forEach((value, index) => {
				(value === "0") ? null : end.push(value);
			})
			while(end.length < gridSize){
				end.push("0");
			}
			return end;
		}
	}

	class Piece{
		constructor(num, location){
			this.num = num;
			this.location = location;
			Board.pieces.push(this);
		}
	}

	$("#slideButton").on("click", function() {
		for(let i = 0; i < gridSize; i++){
			let row = [];
			for(let u = 0; u < gridSize; u++){
				row.push($("#row" + i)
					.find(".col" + u)
					.text());
			}
			console.log(Board.slide(row));
		}
	})
});