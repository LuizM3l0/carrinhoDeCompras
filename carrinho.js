function alteraQtd(produto, acao){
    const qtd= document.getElementById('qtd_' + produto)
    const preco= document.getElementById('preco_' + produto)
    const total= document.getElementById('total_' + produto)

    if(acao =='-' && qtd.innerHTML == 0){
        alert("Atenção a quantidade não pode ser menor que zero.")
    }
    else{

    acao == '+' ? qtd.innerHTML++ : qtd.innerHTML --
    total.innerHTML = qtd.innerHTML * preco.innerHTML
    soma()
    }
}
function soma(){
    let soma = 0

    for(let i = 1; i < 4; i++){
        soma += Number(document.getElementById('total_' + i).innerHTML)
    }

    document.getElementById('subtotal').innerHTML = soma

}