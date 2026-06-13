const opcoesPresente = document.querySelectorAll(".presente-opcao");
const botaoConfirmarPresente = document.getElementById("confirmar-presente");
const mensagemPresente = document.getElementById("mensagem-presente");

const mensagensPresente = {
    jogo: "Escolha confirmada: jogo surpresa. O nome continua em segredo, mas eu acho que você vai gostar.",
    unha: "Escolha confirmada: unha por minha conta. Pode escolher bem linda que eu pago."
};

let presenteSelecionado = sessionStorage.getItem("presenteEscolhido") || "";

if (!mensagensPresente[presenteSelecionado]) {
    presenteSelecionado = "";
}

function atualizarSelecao() {
    opcoesPresente.forEach(function(opcao) {
        const estaSelecionado = opcao.dataset.presente === presenteSelecionado;

        opcao.classList.toggle("selecionado", estaSelecionado);
        opcao.setAttribute("aria-pressed", estaSelecionado ? "true" : "false");
    });

    if (botaoConfirmarPresente) {
        botaoConfirmarPresente.disabled = !presenteSelecionado;
    }
}

function mostrarMensagem(texto) {
    if (!mensagemPresente) {
        return;
    }

    mensagemPresente.textContent = texto;
    mensagemPresente.classList.remove("mostrar");

    window.setTimeout(function() {
        mensagemPresente.classList.add("mostrar");
    }, 10);
}

opcoesPresente.forEach(function(opcao) {
    opcao.setAttribute("aria-pressed", "false");

    opcao.addEventListener("click", function() {
        presenteSelecionado = opcao.dataset.presente;

        atualizarSelecao();
    });
});

if (botaoConfirmarPresente) {
    botaoConfirmarPresente.addEventListener("click", function() {
        if (!presenteSelecionado) {
            return;
        }

        sessionStorage.setItem("presenteEscolhido", presenteSelecionado);
        mostrarMensagem(mensagensPresente[presenteSelecionado] + " Me manda no whatsapp a escolha. Se não escolher algo vai acontecer de qualquer forma...");
    });
}

atualizarSelecao();

if (presenteSelecionado) {
    mostrarMensagem(mensagensPresente[presenteSelecionado]);
}
