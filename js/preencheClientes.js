function preencherCliente (fichaCliente, cliente, conta) {
    fichaCliente.querySelector(".nome").textContent += " " + cliente.nome;
    fichaCliente.querySelector(".cpf").textContent += " " + cliente.cpf;
    fichaCliente.querySelector(".agencia").textContent += " " + conta.agencia;
    fichaCliente.querySelector(".saldo").textContent += " " + conta.saldo.toFixed(2);
}

const clientes = [new Cliente("Ricardo", 11122233309), new Cliente("Alice", 88822233309)];

const contas = [new ContaCorrente(clientes[0], 1001), new ContaCorrente(clientes[1], 1002)];

const fichasCliente = document.querySelectorAll(".clientes__informacoes-cliente");

for (let i = 0; i < fichasCliente.length; i++) {
    let cliente = clientes[i];
    let conta = contas[i];
    let fichaCliente = fichasCliente[i];

    preencherCliente(fichaCliente, cliente, conta);
}
