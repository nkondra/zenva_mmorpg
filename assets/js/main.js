/*
Scene Layout:
 - Boot: load assets
 - Title: Title, play button
 - Game: main logic
 - UI: display current gold count

Classes:
  - Player: Create player, and handle player input
  - Chest: Create the chest, handle amount of gold

*/
var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [BootScene, TitleScene, GameScene, UiScene],
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: {
        y: 0,
      },
    },
  },
};

const game = new Phaser.Game(config);
