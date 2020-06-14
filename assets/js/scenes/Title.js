class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }

  preload() {}

  create() {
    this.titleText = this.add.text(
      this.scale.width / 2,
      this.scale.height / 2,
      "Kenzo MMORPG",
      { fontSize: "64px", fill: "#ffffff" }
    );
    this.titleText.setOrigin(0.5);

    this.button = this.add.image(
      this.scale.width / 2,
      this.scale.height * 0.65,
      "button1"
    );
    this.button.setInteractive();
    this.button.on("pointerdown", () => {
      console.log("down");
    });
    this.button.on("pointerover", () => {
      console.log("over");
    });
    this.button.on("pointerout", () => {
      console.log("out");
    });
  }
}
