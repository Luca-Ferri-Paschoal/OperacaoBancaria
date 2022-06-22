function verificaValoresErrados(valor) {

    if (contaSelecionada === undefined) {
        mensagemDeErro.textContent = "*Por favor, escolha uma conta antes de fazer a operaçao bancária."
        return true;
    } else if (isNaN(valor) || valor <= 0) {
        mensagemDeErro.textContent = "*Por favor, digite um valor válido."
        return true;
    } else {
        return false;
    }
}

function verificaOperacoesErradas(operacao, valor) {
    if (valor > contaSelecionada.saldo && (operacao === "Sacar" || operacao === "Transferir")) {
        operacao = operacao.toLowerCase();
        mensagemDeErro.textContent = `*Não é possível ${operacao} um valor maior do que o saldo.`;
        return true;
    } else {
        return false;
    }
}

function verificaErros(operacao, valor) {
    if (verificaValoresErrados(valor) || verificaOperacoesErradas(operacao, valor)) {
        mensagemDeErro.classList.remove("esconder");
        return false;
    } else {
        mensagemDeErro.classList.add("esconder");
        return true;        
    }
    
}

const mensagemDeErro = document.querySelector(".formulario__erro");
