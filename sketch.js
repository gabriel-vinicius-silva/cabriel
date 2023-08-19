// local onde estarão armazenadas as variáveis
let fundoDaTela;
let personagemNaTela;
const larguraPersonagem = 50;
const alturaPersonagem = 50;
let carroPoliciaNaTela;
let bonecoX = 90; // Posição horizontal do boneco
let bonecoY = 349; // Posição vertical do boneco
let xCarro = 600;

// Preload é um pré-carregamento de determinada coisa.
function preload() {
  fundoDaTela = loadImage("midia/img/fundoDeEstrada.PNG");
  personagemNaTela = loadImage("midia/img/militarPersonagem.png");
  carroPoliciaNaTela = loadImage("midia/img/carroPolicia.png");
}

function setup() {
  createCanvas(500, 400); // Tamanho da tela
}

// Onde se desenham os objetos
function draw() {
  // O fundo do jogo será a imagem definida na variável: fundoDaTela
  background(fundoDaTela);

  // Desenha o personagem na tela nas coordenadas especificadas
  image(personagemNaTela, bonecoX, bonecoY, larguraPersonagem, alturaPersonagem);
  image(carroPoliciaNaTela, xCarro, 75, 100, 30);

  movimentaCarro(); // Chamada para mover o carro de polícia

  // Verifica teclas pressionadas para movimentar o boneco
  if (keyIsDown(39)) {
    // Move o boneco para a direita (aumenta a posição X)
    bonecoX += 3;
  }
  if (keyIsDown(37)) {
    // Move o boneco para a esquerda (diminui a posição X)
    bonecoX -= 3;
  }
  if (keyIsDown(38)) {
    // Move o boneco para cima (diminui a posição Y)
    bonecoY -= 3;
  }
  if (keyIsDown(40)) {
    // Move o boneco para baixo (aumenta a posição Y)
    bonecoY += 3;
  }
}

function movimentaCarro() {
  xCarro -= 2; 
  // Verifica se o carro saiu completamente da tela pela esquerda
  if (xCarro < -100) {
    // Reposiciona o carro à direita da tela
    xCarro = width; // Reposiciona o carro à direita da tela
  }
}
