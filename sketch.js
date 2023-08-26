// Local onde estarão armazenadas as variáveis
let fundoDaTela;
let personagemNaTela;
const larguraPersonagem = 50;
const alturaPersonagem = 50;
let carroPoliciaNaTela;
let xCarros = [600, 300, 600];
let yCarros = [150, 175, 0];
let xBoneco = 90; // Posição horizontal do boneco
let yBoneco = 349; // Posição vertical do boneco
let carroLaranja; // Imagem do carro laranja
let carroVinhoNaTela; // Imagem do carro vinho
let velocidadeCarroVinho = 4; // Velocidade do carro vinho
let velocidadeCarroLaranja = 6; // Velocidade do carro laranja;
let comprimentoDoCarro = 100;
let alturaDoCarro = 30;

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
  
  // Desenha o boneco na tela nas coordenadas especificadas
  image(personagemNaTela, xBoneco, yBoneco, larguraPersonagem, alturaPersonagem);
  verificaColisao();
  
  // Desenha o carro de polícia na tela nas coordenadas especificadas
  image(carroPoliciaNaTela, xCarros[0], 75, comprimentoDoCarro, alturaDoCarro);

  // Desenha o carro laranja na tela nas coordenadas especificadas
  image(carroLaranja, xCarros[1], yCarros[0], comprimentoDoCarro, alturaDoCarro);

  // Desenha o carro vinho na tela nas coordenadas especificadas
  image(carroVinhoNaTela, xCarros[2], yCarros[1], comprimentoDoCarro, alturaDoCarro);

  movimentaCarro(); // Chamada para mover o carro de polícia
  movimentaCarroLaranja(); // Chamada para mover o carro laranja
  movimentaCarroVinho(); // Chamada para mover o carro vinho

  // Verifica teclas pressionadas para movimentar o boneco
  if (keyIsDown(39)) {
    // Move o boneco para a direita (aumenta a posição X)
    xBoneco += 3;
  }
  if (keyIsDown(37)) {
    // Move o boneco para a esquerda (diminui a posição X)
    xBoneco -= 3;
  }
  if (keyIsDown(38)) {
    // Move o boneco para cima (diminui a posição Y)
    yBoneco -= 3;
    // Verifica se o boneco atravessou a rua e chegou à parte superior
    if (yBoneco < 0) {
      yBoneco = 349; // Volta para o início da tela
    }
  }
  if (keyIsDown(40)) {
    // Move o boneco para baixo (aumenta a posição Y)
    yBoneco += 3;
  }
}

// Função para movimentar o carro de polícia
function movimentaCarro() {
  xCarros[0] -= 2; // Move o carro para a esquerda
  // Verifica se o carro saiu completamente da tela pela esquerda
  if (xCarros[0] < -comprimentoDoCarro) {
    // Reposiciona o carro à direita da tela
    xCarros[0] = width;
  }
}

// Função para movimentar o carro laranja
function movimentaCarroLaranja() {
  // Move o carro laranja para a esquerda com a velocidade definida
  xCarros[1] -= velocidadeCarroLaranja; 
  // Verifica se o carro laranja saiu completamente da tela pela esquerda
  if (xCarros[1] < -comprimentoDoCarro) {
    // Reposiciona o carro laranja à direita da tela
    xCarros[1] = width;
  }
}

// Função para movimentar o carro vinho
function movimentaCarroVinho() {
  // Move o carro vinho para a esquerda com a velocidade definida
  xCarros[2] -= velocidadeCarroVinho;
  // Verifica se o carro vinho saiu completamente da tela pela esquerda
  if (xCarros[2] < -comprimentoDoCarro) {
    // Reposiciona o carro vinho à direita da tela
    xCarros[2] = width;
  }
}

// Função para verificar colisões
function verificaColisao() {
  // Verifica colisão com os carros
  for (let i = 0; i < xCarros.length; i++) {
    if (
      xBoneco + larguraPersonagem > xCarros[i] &&
      xBoneco < xCarros[i] + comprimentoDoCarro &&
      yBoneco + alturaPersonagem > yCarros[i] &&
      yBoneco < yCarros[i] + alturaDoCarro
    ) {
      xBoneco = 90;
      yBoneco = 349;
    }
  }
}
