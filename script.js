const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está em uma caminhada pelo parque e vê um grupo discutindo sobre o desmatamento na Amazônia. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Isso é preocupante!",
                afirmacao: "Você ficou alarmado com o impacto do desmatamento e começou a pensar em como pode ajudar."
            },
            {
                texto: "É triste, mas não há muito o que fazer.",
                afirmacao: "Embora compreenda a gravidade, sente que as ações individuais são insuficientes."
            }
        ]
    },
    {
        enunciado: "Na escola, sua professora de ciências anuncia um projeto sobre reciclagem e sustentabilidade. Ela pede que vocês escolham uma iniciativa para implementar na comunidade. O que você decide fazer?",
        alternativas: [
            {
                texto: "Organizar uma coleta seletiva em parceria com os vizinhos.",
                afirmacao: "Você mobilizou a comunidade para coletar recicláveis e ajudar a reduzir o lixo."
            },
            {
                texto: "Criar um jardim comunitário usando compostagem.",
                afirmacao: "Você ajudou a criar um espaço verde, reaproveitando resíduos orgânicos e incentivando a agricultura urbana."
            }
        ]
    },
    {
        enunciado: "Em uma aula de geografia, discutem-se as mudanças climáticas e o aquecimento global. A professora pergunta o que você acha ser a maior prioridade para combater essas questões. Qual é sua resposta?",
        alternativas: [
            {
                texto: "Reduzir o uso de combustíveis fósseis.",
                afirmacao: "Você acredita que diminuir a dependência de energia suja é crucial para reduzir o impacto ambiental."
            },
            {
                texto: "Preservar as florestas e os ecossistemas naturais.",
                afirmacao: "Você defende a proteção de áreas verdes como parte essencial da luta contra as mudanças climáticas."
            }
        ]
    },
    {
        enunciado: "Durante uma visita a um centro de reciclagem, você descobre que muitos produtos recicláveis ainda acabam em aterros sanitários. Como você responde a essa situação?",
        alternativas: [
            {
                texto: "Propor novas campanhas de conscientização para a reciclagem correta.",
                afirmacao: "Você lidera um movimento para educar mais pessoas sobre a reciclagem adequada e seu impacto."
            },
            {
                texto: "Buscar alternativas de reutilização antes mesmo da reciclagem.",
                afirmacao: "Você passou a explorar formas de reaproveitar materiais e reduzir o consumo antes de recorrer à reciclagem."
            }
        ]
    },
    {
        enunciado: "Você e seus amigos estão preparando um projeto final para uma feira de ciências sobre soluções sustentáveis. Um colega sugere usar tecnologia de IA para otimizar o consumo de energia em casa. Qual é sua postura?",
        alternativas: [
            {
                texto: "Apoiar o uso de IA para melhorar a eficiência energética.",
                afirmacao: "Você acredita que a tecnologia pode ajudar a diminuir o desperdício de energia e apoiar práticas mais sustentáveis."
            },
            {
                texto: "Buscar soluções naturais, como painéis solares ou telhados verdes.",
                afirmacao: "Você prefere integrar tecnologias sustentáveis diretamente, como energia solar e telhados verdes, ao invés de depender apenas de IA."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
