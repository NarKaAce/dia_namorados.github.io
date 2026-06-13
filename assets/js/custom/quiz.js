const perguntas = [

    {
        pergunta: "Qual foi nosso primeiro filme só nós dois?",

        respostas: [
            {
                texto: "O Brilho Eterno de Uma Mente Sem Lembranças",
                mensagem: "Esse eu ainda quero ver",
                correta: "false"
            },
            {
                texto: "Entrevista com o Demonio",
                mensagem: "NOOOOOOO",
                correta: "false"
            },
            {
                texto: "Quando o Mal Espreita",
                mensagem: "NOOOO TERROR",
                correta: "false"
            },
            {
                texto: "Dias Perfeitos",
                mensagem: "Essa primeira foi fácil porque tá recente",
                correta: "true"
            }
        ]
    },


    {
        pergunta: "Quem se apaixonou primeiro?",

        respostas: [
            {
                texto: "Eu",
                mensagem: "A resposta sou eu quem estava fazendo o site ou é eu você que está lendo?",
                correta: "true"
            },
            {
                texto: "Você",                
                mensagem: "Tá, supostamente foi você que se interessou primeiro mas eu que me apaixonei...",
                correta: "true"
            }
        ]
    },

    {
        pergunta: "Qual foi o primeiro apelido que usamos?",

        respostas: [
            {
                texto: "Momo",
                mensagem: "Apelido novo né, acho fofo também",
                correta: "false"
            },
            {
                texto: "Honey",                
                mensagem: "Siiiiim, honey always",
                correta: "true"
            },
            {
                texto: "Meu bem",
                mensagem: "Acho meu bem tão fofo",
                correta: "false"
            },
            {
                texto: "Cara",
                mensagem: "Talvez foi esse né, ate hoje você usa bastante",
                correta: "false"
            },
        ]
    },

    {
        pergunta: "Em qual horário normalmente temos nossas melhores conversas?",

        respostas: [
            {
                texto: "Manhã",
                mensagem: "De manhã somos muits fofos",
                correta: "false"
            },
            {
                texto: "Tarde",                
                mensagem: "De tarde você me odeia, fica me xingando quando a gente joga",
                correta: "false"
            },
            {
                texto: "Noite/Madrugada",
                mensagem: "Você fica ai até tarde, absurdo gente",
                correta: "true"
            }
        ]
    },

    {
        pergunta: "Qual jogo foi o mais importante pro nosso relacionamento crescer?",

        respostas: [
            {
                texto: "It Takes Two",
                mensagem: "Isso é considerado jogo de casal e você vindo jogar comigo......",
                correta: "false"
            },
            {
                texto: "Valorant",                
                mensagem: "ECA ECA",
                correta: "false"
            },
            {
                texto: "R.E.P.O",
                mensagem: "Acho que nosso favoritinho, pelo menos pra mim foi ele que fez a gente mais proximo",
                correta: "true"
            },
            {
                texto: "Peak",                
                mensagem: "Foi o primeiro presentin que te dei ne",
                correta: "false"
            }
        ]
    },

];

let perguntaAtual = 0;

const resultado = document.getElementById("resultado");

function carregarPergunta(){

    document.getElementById("proxima")
    .style.display = "none";

    resultado.innerHTML = "";

    document.getElementById("contador").innerHTML =
    `${perguntaAtual + 1}/${perguntas.length}`;

    const pergunta = perguntas[perguntaAtual];

    document.getElementById("numero-pergunta")
    .innerHTML = `Pergunta ${perguntaAtual + 1}`;

    document.getElementById("texto-pergunta")
    .innerHTML = pergunta.pergunta;

    const areaRespostas = document.getElementById("respostas");

    areaRespostas.innerHTML = "";

    pergunta.respostas.forEach(function(resposta){

        const botao = document.createElement("button");

        botao.classList.add("resposta");

        botao.innerHTML = resposta.texto;

        botao.onclick = function(){

            // Remove seleção das outras respostas
            const todosBotoes = document.querySelectorAll(".resposta");

            todosBotoes.forEach(function(item){
                item.classList.remove("selecionada");
            });


            // Marca a resposta escolhida
            this.classList.add("selecionada");


            // Mostra mensagem da resposta
            resultado.innerHTML = resposta.mensagem;


            if (resposta.correta === "true") {

                document.getElementById("proxima")
                .style.display = "inline-block";

            }else{
                document.getElementById("proxima")
                .style.display = "none";
            }   

        };


        areaRespostas.appendChild(botao);

    });

    const bloco =
    document.querySelector(".pergunta");


    bloco.style.animation = "none";


    setTimeout(() => {

        bloco.style.animation = "";

    }, 10);

}

const proxima = document.getElementById("proxima");


proxima.onclick = function(){

    perguntaAtual++;

    if(perguntaAtual < perguntas.length){

        carregarPergunta();

    } else {

        resultado.innerHTML =
        "Caboo ❤️";

        proxima.style.display = "none";

        concluirSecao("quiz");

    }

};

carregarPergunta();