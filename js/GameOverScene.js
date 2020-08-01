class GameOverScene extends Phaser.Scene{
  constructor(){
    super("GameOverScene")
  }

  init(){
    let {width, height} = config;
    this.LarguraDoJogo = width;
    this.AlturaDoJogo = height;
  }

  create(){
    this.bg = this.add.image(0, this.AlturaDoJogo, "background_img").setOrigin(0, 1);
    this.chao = this.add.image(0, this.AlturaDoJogo, "chao_img").setOrigin(0, 1);

    this.gameOverScreen = this.add.image(this.LarguraDoJogo/2, this.AlturaDoJogo/3, "gameOverScreen_img");
    this.enter_btn = this.add.image(this.LarguraDoJogo/2, this.gameOverScreen.y + 100, "enter_img");

    this.moeda = this.add.sprite(96, 189, "coin_sprite");

    this.enter_btn.setInteractive().on("pointerdown", () => {
      this.scene.start("GameScene") // Encerra a cena atual e inicializa a proxima
    })
  }
}