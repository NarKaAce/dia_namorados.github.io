const secoes = {
    quiz: false,
    jukebox: false,
    roleta: false
};

function salvarProgresso() {
    sessionStorage.setItem("progressoAmor", JSON.stringify(secoes));
}

function concluirSecao(secao) {
    if (!(secao in secoes)) return;

    secoes[secao] = true;

    salvarProgresso();
    verificarFinal();
}

function carregarProgresso() {
    const salvo = sessionStorage.getItem("progressoAmor");

    if (salvo) {
        Object.assign(secoes, JSON.parse(salvo));
    }

    verificarFinal();
}

function verificarFinal() {
    const completo = Object.values(secoes)
        .every(valor => valor === true);

    if (completo) {
        desbloquearFinal();
    }
}

function desbloquearFinal() {
    const final = document.getElementById("final");

    if (!final) {
        return;
    }

    final.style.display = "block";
    final.classList.remove("bloqueado");

    final.querySelector("h2").innerHTML = "Surpresa Final";
    final.querySelector(".content p").innerHTML =
        "Você desbloqueou a surpresa ❤";
}

carregarProgresso();

const linkFinal = document.getElementById("link-final");
const botaoModal = document.querySelector(".botao-modal");
const fecharModal = document.querySelector(".fechar");

if (linkFinal) {
    linkFinal.addEventListener("click", function(event) {
        if (this.closest("article").classList.contains("bloqueado")) {
            event.preventDefault();

            const modal = document.getElementById("modal-bloqueado");

            if (modal) {
                modal.style.display = "flex";
            }
        }
    });
}

if (botaoModal) {
    botaoModal.addEventListener("click", function(){
        const modal = document.getElementById("modal-bloqueado");

        if (modal) {
            modal.style.display = "none";
        }
    });
}

if (fecharModal) {
    fecharModal.addEventListener("click", function(){
        const modal = document.getElementById("modal-bloqueado");

        if (modal) {
            modal.style.display = "none";
        }
    });
}
