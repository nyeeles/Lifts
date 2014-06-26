// function Lift() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };


function Lift() {
	this.floor = 0
	this.topFloor = 4
	this.bottomFloor = -1
};

Lift.prototype.goUp = function() {
	if(this.floor < 4)
		this.floor += 1
}

Lift.prototype.goDown = function() {
	if(this.floor > -1) 
		this.floor -= 1	
}
