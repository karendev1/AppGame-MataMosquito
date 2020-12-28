//Encontrando altura e largura da página

var width;
var height;
var vidas = 1;

function ajustaTamanhoPalcoJogo(){
     width = window.innerWidth
     height = window.innerHeight

     console.log(width, height)
}
ajustaTamanhoPalcoJogo()

//Criando posições randômicas

function posicaoRandomica(){
// remover o mosquito anterior (caso exista)
if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()

    if(vidas > 3){
        alert('Game Over')
    } else{
        document.getElementById('v' + vidas).src="assets/imagens/coracao_vazio.png" 

        vidas++
    }
}

var posicaoX = Math.floor(Math.random() * width) - 90
var posicaoY = Math.floor(Math.random() * height) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

//Criar o elemento html

var mosquito = document.createElement('img')
mosquito.src = 'assets/imagens/mosca.png'
mosquito.className = tamanhoRandomico() + ' ' + ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function () {
    this.remove() // O this faz referencia ao proprio elemento html que executa a função
}

document.body.appendChild(mosquito)
}



console.log(ladoAleatorio())

// Tamanhos randômicos

function tamanhoRandomico(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

//Lado A e lado B

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
}

setInterval(function(){
    posicaoRandomica()
}, 2000)