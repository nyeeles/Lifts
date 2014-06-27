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

var lift;
var floorPanel2;

beforeEach(function() {
  lift = new Lift();
});

describe("Lift", function() {

  describe("going up and down", function() {

    it("starts on the ground floor", function() {
      expect(lift.floor).toEqual(0);
    });

    it("can go up to floor 4", function() {
      expect(lift.topFloor).toEqual(4);

    });

    it("it's bottom floor is the basement", function() {
      expect(lift.bottomFloor).toEqual(-1);
    });

    it("can go up", function() {
      lift.goUp();
      expect(lift.floor).toEqual(1);
    });

    it("can't go above floor 4", function() {
      lift.floor = 4;
      lift.goUp();
      expect(lift.floor).toEqual(4);
    });

    it("can go down", function() {
      lift.goDown();
      expect(lift.floor).toEqual(-1);
    });

    it("can't go below the basement", function() {
      lift.floor = -1;
      lift.goDown();
      expect(lift.floor).toEqual(-1);
    });

    it("can go to a specified floor froom any current floor", function() {
      lift.goTo(4);
      expect(lift.floor).toEqual(4);
      lift.goTo(-1);
      expect(lift.floor).toEqual(-1);
    });


  });

  describe("opening and closing doors", function() {

    it("starts with closed doors", function() {
      expect(lift.hasClosedDoors).toBeTruthy();
    });

    it("can open its doors", function() {
      lift.openDoors();
      expect(lift.hasClosedDoors).toBeFalsy();
    })

    it("can close them again", function() {
      lift.openDoors();
      lift.closeDoors();
      expect(lift.hasClosedDoors).toBeTruthy();
    })

  });

});

describe("ElevatorSystem", function() {
  
  var system;

  beforeEach(function() {
    system = new ElevatorSystem(lift);
  })

  it("starts with 0 time elapsed", function() {
    expect(system.timeElapsed).toEqual(0);
  });

  it("takes 1 time for an elevator to move up one floor", function(){
    system.raiseLift(lift);
    expect(system.timeElapsed).toEqual(1);
  });

  it("takes 1 time for an elevator to move down one floor", function(){
    system.lowerLift(lift);
    expect(system.timeElapsed).toEqual(1);
  });

});

describe("Floor", function() {

  beforeEach(function() {
    lift = new Lift();
    floorPanel2 = new FloorPanel(2, lift);
  });


  it("calls a lift when an upButton is pressed", function() {
    floorPanel2.upButton();
    expect(lift.floor).toEqual(2);
  });

  it("calls a lift when a downButton is pressed", function() {
    floorPanel2.downButton();
    expect(lift.floor).toEqual(2);
  });

  xit("opens the doors of a lift going up past it if upButton is pressed", function(){
    lift.goTo(4)
  })

});