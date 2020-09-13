
describe('bowlingGame', function() {

  it('can create new game', function() {
    let game = new bowlingGame();

  });

  it('can roll a gutter game', function() {
    let game = new bowlingGame();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score).toBe(0);

  });
  
  it('rolls 1s for each roll, totalling 20 at the end of a game', function() {
    let game = new bowlingGame();
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score).toBe(20);

  });


});