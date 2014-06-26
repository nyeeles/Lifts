// describe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

describe("Lift", function() {

  var lift;

  beforeEach(function() {
    lift = new Lift();
  });

  it("starts on the ground floor", function() {
    expect(lift.floor).toEqual("G")
  });

});