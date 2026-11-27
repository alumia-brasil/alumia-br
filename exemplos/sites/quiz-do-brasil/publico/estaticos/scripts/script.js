const perguntas = [
    {
        enunciado: "Qual é a capital do Pará?",
        alternativas: ["Manaus", "Belém", "Macapá"],
        correta: "Belém"
    },
    {
        enunciado: "Qual é a capital de Pernambuco?",
        alternativas: ["Recife", "Natal", "Maceió"],
        correta: "Recife"
    },
    {
        enunciado: "Qual é a capital de Minas Gerais?",
        alternativas: ["Vitória", "Goiânia", "Belo Horizonte"],
        correta: "Belo Horizonte"
    }
];

const rodada = document.querySelector("#rodada");
const pergunta = document.querySelector("#pergunta");
const progresso = document.querySelector("#progresso");
const placar = document.querySelector("#placar");
const alternativas = document.querySelector("#alternativas");
const resposta = document.querySelector("#resposta");
const avancar = document.querySelector("#avancar");
const resultado = document.querySelector("#resultado");
const resumo = document.querySelector("#resumo");
const reiniciar = document.querySelector("#reiniciar");

let indice = 0;
let pontos = 0;

function atualizarPlacar() {
    placar.textContent = pontos === 1 ? "1 ponto" : pontos + " pontos";
}

function mostrarPergunta() {
    const atual = perguntas[indice];
    progresso.textContent = "Pergunta " + (indice + 1) + " de " + perguntas.length;
    pergunta.textContent = atual.enunciado;
    alternativas.replaceChildren();
    resposta.hidden = true;
    avancar.hidden = true;
    atualizarPlacar();

    for (const cidade of atual.alternativas) {
        const botao = document.createElement("button");
        botao.type = "button";
        botao.textContent = cidade;
        botao.addEventListener("click", () => responder(cidade));
        alternativas.append(botao);
    }
}

function responder(escolha) {
    const correta = perguntas[indice].correta;
    if (escolha === correta) {
        pontos += 1;
        resposta.textContent = "Acertou! A capital é " + correta + ".";
    } else {
        resposta.textContent = "Você escolheu " + escolha + ". A resposta correta é " + correta + ".";
    }

    for (const botao of alternativas.children) {
        botao.disabled = true;
        if (botao.textContent === correta) botao.classList.add("correta");
        else if (botao.textContent === escolha) botao.classList.add("incorreta");
    }
    atualizarPlacar();
    resposta.hidden = false;
    avancar.textContent = indice === perguntas.length - 1 ? "Ver resultado" : "Próxima pergunta";
    avancar.hidden = false;
    resposta.focus();
}

avancar.addEventListener("click", () => {
    indice += 1;
    if (indice < perguntas.length) {
        mostrarPergunta();
        pergunta.focus();
    } else {
        rodada.hidden = true;
        resultado.hidden = false;
        resumo.textContent = "Você acertou " + pontos + " de " + perguntas.length + ".";
        document.querySelector("#titulo-final").focus();
    }
});

reiniciar.addEventListener("click", () => {
    indice = 0;
    pontos = 0;
    resultado.hidden = true;
    rodada.hidden = false;
    mostrarPergunta();
    pergunta.focus();
});

rodada.hidden = false;
mostrarPergunta();
