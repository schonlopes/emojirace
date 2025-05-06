let xJogador = [20, 20, 20, 20];
let yJogador = [50, 150, 250, 350];
let jogador = ["🎈", "👽", "🐱‍🏍", "🎱"];
let quantidade = jogador.length;
let teclas = ["a", "s", "d", "f"];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  if (!focused) {
    background("red");
    if (frameCount % 60 < 30) {
      textAlign(CENTER, CENTER);
      textSize(30);
      fill(255);
      text("Clique na tela para iniciar!", width / 2, height / 2);
    }
    return;
  }

  background("limegreen");

  desenhaLinhaChegada();
  criaJogadores();
  sinalizaVitoria();

  function criaJogadores() {
    textSize(30);
    for (let i = 0; i < quantidade; i++) {
      text(jogador[i], xJogador[i], yJogador[i]);
    }
  }

  function desenhaLinhaChegada() {
    fill("white");
    rect(350, 0, 10, 400);
    fill("black");
    for (let yAtual = 0; yAtual < 400; yAtual += 20) {
      rect(350, yAtual, 10, 10);
    }
  }

  function sinalizaVitoria() {
    textAlign(CENTER, CENTER);

    for (let i = 0; i < quantidade; i++) {
      if (xJogador[i] > 350) {
        text(jogador[i] + " Venceu!", width / 2, height / 2);
        noLoop();
      }
    }
  }
}

function keyReleased() {
  for (i = 0; i < 4; i++) {
    if (key == teclas[i]) {
      xJogador[i] += random(20);
    }
  }
}