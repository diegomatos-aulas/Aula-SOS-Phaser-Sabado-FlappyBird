class MenuScene extends Phaser.Scene{
  constructor(){
    super("MenuScene")
  }

  preload(){
    this.load.image("background_img", "assets/imagens/Background.png")
    this.load.image("chao_img", "assets/imagens/Floor.png")
  }

  create(){
    let {width:LarguraDoJogo, height:AlturaDoJogo} = config;
    this.fundo = this.add.image(0, AlturaDoJogo, "background_img");
    this.fundo.setOrigin(0, 1);
    this.chao = this.add.image(0, AlturaDoJogo, "chao_img");
    this.chao.setOrigin(0, 1)
  }
}