document.getElementById("botao-ranking").addEventListener('click', () => {
    window.location.href = "ranking.html";
});

document.getElementById("botao-comecar").addEventListener('click', () => {
    let jogador = "";
    do {
        jogador = prompt("Digite seu nome");
        
        if (!jogador) {
            alert("Digite um nome válido!")
        }
    } while(!jogador);
    
    let q = ["Quanto tempo você tem para usar o dash da Jett após ativá-lo?", "", "", ""];
    let opcoes = [["14 segundos", "8 segundos", "10 segundos", "12 segundos"], [], [], []];
    let pontos = 0;

    pontos += mostrarQuestao(q, opcoes, 0);
    
    localStorage.setItem("ranking", JSON.stringify([jogador, pontos]));
    
});

function mostrarQuestao(q, opcoes, pontos) {
    if (q.length <= 0 || opcoes.length <= 0) {
        return pontos;
    }
    document.body.innerHTML = "";
    let questao = document.createElement("h1");
    questao.textContent = q[0]; 
    let div = document.createElement("div"); 
    let opc = opcoes[0];

    for (let i = 0; i < 4; i++) {
        let resp = document.createElement("button");
        
        resp.textContent = opc[i];
        if (i == 3) {
            resp.addEventListener('click', () => {
                resp.style.backgroundColor = "green";
                q.unshift();
                opcoes.unshift();
                pontos++;
                mostrarQuestao(q, opcoes, pontos);
            })
        } else {
            resp.addEventListener('click', () => {
                resp.style.backgroundColor = "red";
                q.unshift();
                opcoes.unshift();
                mostrarQuestao(q, opcoes, pontos);
            })
        }
        div.appendChild(resp);
    }

    document.body.appendChild(questao);
    document.body.appendChild(div);
}