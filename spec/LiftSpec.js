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
    expect(lift.floor).toEqual(0)
  });

  it("can go up to floor 4", function() {
    expect(lift.topFloor).toEqual(4)

  });

  it("it's bottom floor is the basement", function() {
    expect(lift.bottomFloor).toEqual(-1)
  });

  it("can go up", function() {
    lift.goUp()
    expect(lift.floor).toEqual(1)
  });

  it("can't go above floor 4", function() {
    lift.floor = 4
    lift.goUp()
    expect(lift.floor).toEqual(4)    
  });

  it("can go down", function() {
    lift.goDown()
    expect(lift.floor).toEqual(-1)
  });

  it("can't go below the basement", function() {
    lift.floor = -1
    lift.goDown()
    expect(lift.floor).toEqual(-1)
  });

  it("can go to a specified floor froom any current floor", function() {
    lift.goTo(4)
    expect(lift.floor).toEqual(4)
    lift.goTo(-1)
    expect(lift.floor).toEqual(-1)
  })

  it("goes to any floor where an up button was pressed", function() {
    var floor2 = new Floor(2, lift)
    expect(lift.floor).toEqual(0)
    floor2.upButton()
    expect(lift.floor).toEqual(2)
  })

  

});