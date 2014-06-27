// function Lift() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };


function Lift() {
	this.floor = 0;
	this.topFloor = 4;
	this.bottomFloor = -1;
	this.hasClosedDoors = true;
	this.elapsedTime;
};

Lift.prototype.goUp = function() {
	if(this.floor < 4)
		this.floor += 1;
};

Lift.prototype.goDown = function() {
	if(this.floor > -1) 
		this.floor -= 1;
};

Lift.prototype.goTo = function(floor) {
	this.floor = floor;
};

Lift.prototype.openDoors = function() {
	this.hasClosedDoors = false
}

Lift.prototype.closeDoors = function() {
	this.hasClosedDoors = true
}

function ElevatorSystem(lift) {
	this.timeElapsed = 0
	// this.lift = lift
}

ElevatorSystem.prototype.lowerLift = function(lift) {
	lift.goDown
	this.incrementTime()
}

ElevatorSystem.prototype.raiseLift = function(lift) {
	lift.goUp
	this.incrementTime()
}

ElevatorSystem.prototype.incrementTime = function() {
	this.timeElapsed += 1
}

function FloorPanel(floor, lift) {
	this.floor = floor;
	this.lift = lift;
};

FloorPanel.prototype.upButton = function() {
	this.lift.floor = this.floor;
};

FloorPanel.prototype.downButton = function() {
	this.lift.floor = this.floor;
};