
var fruits;

function _updateLocations() {
	var board = get_board();
	fruits = fruits.filter(function(fruit, index) {
		return board[fruit.x][fruit.y] > 0;
	});
}

function _getNearestLocation(myX, myY) {
	var arr = fruits.map(function(fruit, index) {
		return Math.abs(myX - fruit.x) + Math.abs(myY - fruit.y);
	});
	var index = arr.indexOf(Math.min.apply(Math, arr));
	return fruits[index];
}

function new_game() {
	fruits = [];
	get_board().map(function(column, xCoor) {
		column.map(function(cell, yCoor) {
			if(cell > 0) {
				fruits.push({x: xCoor, y: yCoor, type: cell});
			}
		});
	});
}

function make_move() {
	_updateLocations();
	var board = get_board();
	var myX = get_my_x();
	var myY = get_my_y();
	var retVal;

	// we found an item! take it!
	if (board[myX][myY] > 0) {
		return TAKE;
	}

	var target = _getNearestLocation(myX, myY);

	var xDiff = target.x - myX;
	var yDiff = target.y - myY;

	// console.log(myX, myY);
	// console.log(target.x, target.y);
	// console.log(xDiff, yDiff);

	if(!!yDiff) {
		retVal = (yDiff > 0) ? SOUTH : NORTH;
	}

	if(!!xDiff) {
		retVal = (xDiff > 0) ? EAST : WEST;
	}

	return retVal;
	// var rand = Math.random() * 4;

	// if (rand < 1) return NORTH;
	// if (rand < 2) return SOUTH;
	// if (rand < 3) return EAST;
	// if (rand < 4) return WEST;

	// return PASS;
}

// Optionally include this function if you'd like to always reset to a
// certain board number/layout. This is useful for repeatedly testing your
// bot(s) against known positions.
//
//function default_board_number() {
//	return 123;
//}
