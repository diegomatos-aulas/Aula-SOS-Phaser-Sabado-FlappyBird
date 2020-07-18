class GameScene extends Phaser.Scene{
  constructor(){
    super("GameScene")
  }

  init(){
    let {width, height} = config;
    this.LarguraDoJogo = width;
    this.AlturaDoJogo = height;
  }

  create(){
    this.physics.world.setBounds(0, 0, 320, this.AlturaDoJogo-98)

    // Cenário
    this.background = this.add.tileSprite(0, this.AlturaDoJogo, 0, 0,"background_img");
    this.background.setOrigin(0, 1);

    this.chao = this.add.tileSprite(0, this.AlturaDoJogo, 0, 0, "chao_img");
    this.chao.setOrigin(0, 1);

    // Jogador
    this.jogador = this.physics.add.sprite(this.LarguraDoJogo/2, this.AlturaDoJogo/2 + 20, "player_sprite");
    this.jogador.anims.play("Voo");
    this.jogador.setCollideWorldBounds();
    this.vida = 10;
    // this.passaro.body.setGravity(0, 1200);

    // Canos
    this.canos = this.physics.add.group();
    // Cria com y aleatorio
    let canoNorte = this.canos.create(posX, randomY, "pipeNorth_img");
    // Cria logo em baixo do cano norte, com um espaço ( gap ) entre eles
    let canoSul = this.canos.create(posX, randomY, "pipeSouth_img");

    // Interatividade
    this.input.on("pointerdown", this.voar, this);
  }

  update(){
    this.background.tilePositionX += 0.5;
    this.chao.tilePositionX += 1;
  }

  voar(){
    this.jogador.setVelocity(0, -300);
  }
}