// Local onde estarão armazenadas as variáveis
let fundoDaTela;
let personagemNaTela;
const larguraPersonagem = 50;
const alturaPersonagem = 50;
let carroPoliciaNaTela;
let bonecoX = 90; // Posição horizontal do boneco
let bonecoY = 349; // Posição vertical do boneco
let xCarro = 600; // Posição inicial do carro de polícia na tela
let carroLaranja; // Imagem do carro laranja
let xCarroLaranja = 300; // Posição inicial do carro laranja na tela
let yCarroLaranja = 140; // Posição vertical do carro laranja
let carroVinhoNaTela; // Carro de cor vinho
let xCarroVinho = 600; // Posição inicial do carro vinho na tela
let yCarroVinho = 175; // Posição vertical do carro vinho
let velocidadeCarroVinho = 3; // Velocidade do carro vinho

// Pré-carregamento das imagens
function preload() {
  fundoDaTela = loadImage("midia/img/fundoDeEstrada.PNG");
  personagemNaTela = loadImage("midia/img/militarPersonagem.png");
  carroPoliciaNaTela = loadImage("midia/img/carroPolicia.png");
  carroLaranja = loadImage("midia/img/carroLaranja.png");
  carroVinhoNaTela = loadImage("midia/img/carroVinho.png"); 
}

function setup() {
  // Tamanho da tela
  createCanvas(500, 400); 
}

function draw() {
  // Define o fundo da tela
  background(fundoDaTela); 

  // Desenha o personagem na tela nas coordenadas especificadas
  image(personagemNaTela, bonecoX, bonecoY, larguraPersonagem, alturaPersonagem);
  
  // Desenha o carro de polícia na tela nas coordenadas especificadas
  image(carroPoliciaNaTela, xCarro, 75, 100, 30);

  // Desenha o carro laranja na tela nas coordenadas especificadas
  image(carroLaranja, xCarroLaranja, yCarroLaranja, 100, 30);
  
  // Desenha o carro vinho na tela nas coordenadas especificadas
  image(carroVinhoNaTela, xCarroVinho, yCarroVinho, 100, 30);

  movimentaCarro(); // Chamada para mover o carro de polícia
  movimentaCarroLaranja(); // Chamada para mover o carro laranja
  movimentaCarroVinho(); // Chamada para mover o carro vinho

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
    // Verifica se o boneco atravessou a rua e chegou à parte superior
    if (bonecoY < 0) {
      bonecoY = 349; // Volta para o início da tela
    }
  }
  if (keyIsDown(40)) {
    // Move o boneco para baixo (aumenta a posição Y)
    bonecoY += 3;
  }
}

// Função para movimentar o carro de polícia
function movimentaCarro() {
  xCarro -= 2; // Move o carro para a esquerda
  // Verifica se o carro saiu completamente da tela pela esquerda
  if (xCarro < -100) {
    // Reposiciona o carro à direita da tela
    xCarro = width;
  }
}

// Função para movimentar o carro laranja
function movimentaCarroLaranja() {
  // Move o carro laranja para a esquerda
  xCarroLaranja -= 2; 
  // Verifica se o carro laranja saiu completamente da tela pela esquerda
  if (xCarroLaranja < -100) {
    // Reposiciona o carro laranja à direita da tela
    xCarroLaranja = width;
  }
}

// Função para movimentar o carro vinho
function movimentaCarroVinho() {
  // Move o carro vinho para a esquerda com a velocidade definida
  xCarroVinho -= velocidadeCarroVinho;
  // Verifica se o carro vinho saiu completamente da tela pela esquerda
  if (xCarroVinho < -100) {
    // Reposiciona o carro vinho à direita da tela
    xCarroVinho = width;
  }
}
