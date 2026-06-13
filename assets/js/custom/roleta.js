const roleta = document.getElementById("roleta");
const botao = document.getElementById("girar");
const resultado = document.getElementById("resultado-date");

const premios = [
    {
        titulo: "Filminho",
        descricao: "Filminho together, com direito a comentários durante as cenas e xingar pós filme",
        color: "#7E8C54"
    },
    {
        titulo: "Fazer quiz junto",
        descricao: "A gente pode responder quiz/perguntas que tem por ai na internet sobre casal",
        color: "#6B4C7A"
    },
    {
        titulo: "Juuugar",
        descricao: "Jogar nossos joguinhos coops :p",
        color: "#C87533"
    },
    {
        titulo: "Fofocar",
        descricao: "Ficar em call fofocando (desde falar mal dos outros até ficar bobinhos conversando)",
        color: "#6B4F3A"
    },
    {
        titulo: "Música",
        descricao: "A gente pode montar ou ouvir uma playlist juntos e ficar conversandinho",
        color: "#252525"
    }
];

const total = premios.length;
const angulo = 360 / total;

let giroAtual = 0;

roleta.style.background = `conic-gradient(${premios
    .map((premio, i) => {
        const inicio = i * angulo;
        const fim = (i + 1) * angulo;

        return `${premio.color} ${inicio}deg ${fim}deg`;
    })
    .join(", ")})`;

premios.forEach((premio, i) => {
    const texto = document.createElement("div");
    texto.className = "fatia-texto";
    texto.innerText = premio.titulo;

    const rotacao = (i * angulo) + (angulo / 2);

    texto.style.transform = `rotate(${rotacao}deg) translateY(clamp(-145px, -34vw, -95px))`;
    roleta.appendChild(texto);
});

botao.onclick = function () {
    botao.disabled = true;

    const sorteio = Math.floor(Math.random() * total);

    const voltas = 6;
    const offset = angulo / 2;
    const anguloAtual = ((giroAtual % 360) + 360) % 360;
    const destino = (360 - (sorteio * angulo) - offset) % 360;
    const incremento = (voltas * 360) + destino - anguloAtual;

    giroAtual += incremento;

    roleta.style.transform = `rotate(${giroAtual}deg)`;
    resultado.innerHTML = "<p>Girando...</p>";

    setTimeout(() => {
        const premio = premios[sorteio];

        resultado.innerHTML = `
            <h2>${premio.titulo}</h2>
            <p>${premio.descricao}</p>
        `;

        botao.disabled = false;
        concluirSecao("roleta");
    }, 4500);
};
