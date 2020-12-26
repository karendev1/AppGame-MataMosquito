//Encontrando altura e largura da página

var width;
var height;

function ajustaTamanhoPalcoJogo(){
     width = window.innerWidth
     height = window.innerHeight

     console.log(width, height)
}
ajustaTamanhoPalcoJogo()

//Criando posições randômicas

var posicaoX = Math.floor(Math.random() * width) - 90
var posicaoY = Math.floor(Math.random() * height) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//Criar o elemento html

var mosquito = document.createElement('img')
mosquito.src = 'assets/imagens/mosca.png'
mosquito.className = 'mosquito1'
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)