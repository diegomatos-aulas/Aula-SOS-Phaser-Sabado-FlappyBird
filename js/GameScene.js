class GameScene extends Phaser.Scene{
  constructor(){
    super("GameScene")
  }

  create(){
    let {width:LarguraDoJogo, height:AlturaDoJogo} = config;

    this.physics.world.setBounds(0, 0, 320, AlturaDoJogo-98)

    this.fundo = this.add.image(0, AlturaDoJogo, "background_img");
    this.fundo.setOrigin(0, 1);

    this.chao = this.add.image(0, AlturaDoJogo, "chao_img");
    this.chao.setOrigin(0, 1);

    this.jogador = this.physics.add.sprite(LarguraDoJogo/2, AlturaDoJogo/2 + 20, "player_sprite");
    this.jogador.anims.play("Voo");
    this.jogador.setCollideWorldBounds();
    // this.passaro.body.setGravity(0, 1200);
  }

  update(){

  }
}