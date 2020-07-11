const config = {
  width: 320,
  height: 480,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {
        y: 1200
      }
    } // ARCADE, MATTER E IMPACT
  },
  scene: [MenuScene, GameScene],
  backgroundColor: "#5c94fc",
  scale: {
    mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

new Phaser.Game(config);