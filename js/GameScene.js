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
    this.GAP = 100;
    this.tempoDeJogo = 0;
    this.velocidadeDosCanos = -120;

    // Cenário
    this.background = this.add.tileSprite(0, this.AlturaDoJogo, 0, 0,"background_img");
    this.background.setOrigin(0, 1);
    this.background.depth = 1;

    this.chao = this.add.tileSprite(0, this.AlturaDoJogo, 0, 0, "chao_img");
    this.chao.setOrigin(0, 1);
    this.chao.depth = 3;

    // Jogador
    this.jogador = this.physics.add.sprite(this.LarguraDoJogo/2, this.AlturaDoJogo/2 + 20, "player_sprite");
    this.jogador.anims.play("Voo");
    this.jogador.setCollideWorldBounds();
    this.jogador.body.setGravity(0, 1200);
    this.vida = 10;
    this.jogador.depth = 5;

    // Canos
    this.canos = this.physics.add.group();
    // this.idUnicoDoLoop = window.setInterval(this.adicionarCanos, 2000);
    this.time.addEvent({
      delay: 2000,
      callback: this.adicionarCanos,
      callbackScope: this,
      loop: true
    })

    // Interatividade
    this.input.on("pointerdown", this.voar, this);

    // HUD
    this.pontuacao = 0;
    this.pontuacao_txt = this.add.text(20, 20, "0", {fontSize: "30px"});
    this.pontuacao_txt.depth = 6;

    // Colisoes
    this.physics.add.overlap(this.jogador, this.canos, this.gameOver , null, this);
  }

  update(time, deltaTime){
    this.background.tilePositionX += 0.5;
    this.chao.tilePositionX += 1;

    if (this.jogador.angle < 20){
      this.jogador.angle++;
    }
  }

  voar(){
    this.jogador.setVelocity(0, -300);
    this.jogador.angle = -20;
  }

  adicionarCanos(){
    let posY = Math.round(Math.random()* -220);
    let canoNorte = this.canos.create(this.LarguraDoJogo, posY, "pipeNorth_img");
    canoNorte.setOrigin(0);
    canoNorte.setVelocity(this.velocidadeDosCanos, 0);
    canoNorte.depth = 4;

    let canoSul = this.canos.create(this.LarguraDoJogo, posY + canoNorte.displayHeight + this.GAP, "pipeSouth_img");
    canoSul.setOrigin(0);
    canoSul.setVelocity(this.velocidadeDosCanos, 0);
    canoSul.depth = 2;
  }

  gameOver(jogador, cano){
    this.scene.start("GameOverScene") // Encerra a cena atual e inicializa a proxima
  }
}