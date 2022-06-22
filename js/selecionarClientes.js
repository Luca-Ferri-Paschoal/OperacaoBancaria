function selecionaCliente(fichaCliente) {
    fichasCliente.forEach(function (fichaCliente) {
        fichaCliente.classList.remove("selecionado");
    });

    fichaCliente.classList.add("selecionado");
}

function escreveONomeDeleNoFormulario(fichaCliente) {
    let nome = fichaCliente.querySelector(".nome").textContent;

    nome = nome.slice(5, nome.length);
    document.querySelector(".campo__nome").textContent = nome;
}

function selecionaConta(i) {
    contaSelecionada = contas[i];

    if (i === 0) outraConta = contas[1];
    if (i === 1) outraConta = contas[0];
}

let contaSelecionada;
let outraConta;

for (let i = 0; i < fichasCliente.length; i++) {
    let fichaCliente = fichasCliente[i];

    fichaCliente.addEventListener("click", function () {
        selecionaCliente(fichaCliente);
        escreveONomeDeleNoFormulario(fichaCliente);
        selecionaConta(i);
    });
}
