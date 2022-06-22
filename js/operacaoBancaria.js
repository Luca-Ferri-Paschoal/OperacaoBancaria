function fazerOperacaoBancaria(operacao, valor) {
    switch (operacao) {
        case "Depositar":
            contaSelecionada.depositar(valor);
            break;

        case "Sacar":
            contaSelecionada.sacar(valor);
            break;

        case "Transferir":
            contaSelecionada.transferir(valor, outraConta);
            break;

        default:
            console.log("Não foi possível fazer a operação desejada");
    }
}

function escreverSaldoAtualizado() {
    for (let i = 0; i < fichasCliente.length; i++) {
        let saldo = fichasCliente[i].querySelector(".saldo");
        let valorDoSaldo = saldo.textContent;

        valorDoSaldo = valorDoSaldo.slice(0, 9);
        valorDoSaldo += contas[i].saldo.toFixed(2);

        saldo.textContent = valorDoSaldo;
    }
}

const botaoOperar = document.querySelector(".formulario__operar");

botaoOperar.addEventListener("click", function (event) {
    event.preventDefault();

    let valor = parseFloat(document.querySelector(".formulario__valor").value);
    let operacao = document.querySelector(".formulario__selecione-operacao").value;
    let naoTemErro = verificaErros(operacao, valor);
    
    if (naoTemErro) fazerOperacaoBancaria(operacao, valor);
    escreverSaldoAtualizado();
});
