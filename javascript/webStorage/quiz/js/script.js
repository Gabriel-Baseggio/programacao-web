document.getElementById("botao-ranking").addEventListener('click', () => {
    window.location.href = "ranking.html";
});

let pontos = 0;
let jogador = "";
let rankingLS = JSON.parse(localStorage.getItem("ranking")) || [];
document.getElementById("botao-comecar").addEventListener('click', () => {
    do {
        jogador = prompt("Digite seu nome");

        if (!jogador) {
            alert("Digite um nome válido!")
        }
    } while (!jogador);

    let q = ["Quanto tempo você tem para usar o dash da Jett após ativá-lo?", "Quanto tempo a spike demora para explodir?", "Quanto custa uma vandal?", "Qual a frase da Skye após cegar um inimigo com sua bang?", "Qual o maior rank do Valorant?"];
    let opcoes = [["12 segundos", "8 segundos", "10 segundos", "14 segundos"], ["45 segundos", "43 segundos", "44 segundos", "42 segundos"], [2900, 2800, 2850, 2950], ["Ceguei!", "Achei um!", "Lá vai pássaro!", "Cegando!"], ["Radiante", "Diamante", "Ascendente", "Imortal"]];

    mostrarQuestao(q, opcoes);

});

function mostrarQuestao(q, opcoes) {
    if (q.length <= 0 || opcoes.length <= 0) {
        finalizar();
    }
    document.body.innerHTML = "";
    let questao = document.createElement("h1");
    questao.textContent = q[0];
    let div = document.createElement("div");
    let opc = opcoes[0];
    let numRandom = Math.floor(Math.random() * 4);
    let respCorreta = opc[0];
    opc.splice(0, 1, opc[numRandom]);
    opc.splice(numRandom, 1, respCorreta);
    
    for (let i = 0; i < 4; i++) {
        let resp = document.createElement("button");

        resp.textContent = opc[i];
        if (i == numRandom) {
            resp.addEventListener('click', () => {
                resp.style.backgroundColor = "lime";
                setTimeout(() => {
                    q.shift();
                    opcoes.shift();
                    pontos++;
                    mostrarQuestao(q, opcoes);
                }, 500);
            })
        } else {
            resp.addEventListener('click', () => {
                resp.style.backgroundColor = "red";
                setTimeout(() => {
                    q.shift();
                    opcoes.shift();
                    mostrarQuestao(q, opcoes);
                }, 500);
            })
        }
        div.appendChild(resp);
    }

    document.body.appendChild(questao);
    document.body.appendChild(div);
}

function finalizar() {
    let pontosTxt = "pontos!";
    if (pontos <= 1) {
        pontosTxt = "ponto!"    
    }
    alert(`Parabéns ${jogador}, você conseguiu ${pontos} ${pontosTxt}`);
    rankingLS.push([jogador, pontos]);
    rankingLS.sort(function (a, b) {
        return a[1] - b[1];
    });
    rankingLS.reverse();
    localStorage.setItem("ranking", JSON.stringify(rankingLS));
    window.location.reload();
}