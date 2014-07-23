function new_game() {
}

var fruitLocations;

function make_move() {
	var board = get_board();

	if(!fruitLocations) {
		fruitLocations = [];
		board.map(function(column, xCoor) {
			column.map(function(cell, yCoor) {
				if(cell > 0) {
					fruitLocations.push([xCoor, yCoor]);
				}
			});
		});
	}

	// we found an item! take it!
	if (board[get_my_x()][get_my_y()] > 0) {
		return TAKE;
	}

	var rand = Math.random() * 4;

	if (rand < 1) return NORTH;
	if (rand < 2) return SOUTH;
	if (rand < 3) return EAST;
	if (rand < 4) return WEST;

	return PASS;
}

// Optionally include this function if you'd like to always reset to a
// certain board number/layout. This is useful for repeatedly testing your
// bot(s) against known positions.
//
//function default_board_number() {
//	return 123;
//}
