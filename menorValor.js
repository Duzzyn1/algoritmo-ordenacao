function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;
    
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual; // guarda por indice
        }
    }
    return maisBarato;
}

module.exports = menorValor;