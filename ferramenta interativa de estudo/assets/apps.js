let respostaEstaVisivel = false

function viraCartao(){
    respostaestaVisivel = !respostaEstaVisivel
}

function viraCartao() {
    respostaEstaVisivel = !respostaEstaVisivel
    cartao.classList.toggle('active', respostaEstaVisivel)
}

cartao.addEventListener('click', viraCartao)