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
    
    document.body.innerHTML = "";
    let pontos = 0;
    let q = ["Quanto tempo você tem para usar o dash da Jett após ativá-lo?"];
    let opcoes = [["12 segundos", "8 segundos", "10 segundos", "14 segundos"], [], []];
    
    for (let i = 0; i < 1; i++) {
        console.log("XD");
        questao(q[i], opcoes[i]);
        console.log("XD2");
    }
    
    localStorage.setItem("ranking", JSON.stringify([jogador, pontos]));
    
});

function questao(questaoTxt, opcoes) {
    let questao = document.createElement("h1");
    questao.textContent = questaoTxt; 
    let div = document.createElement("div"); 

    for (let i = 0; i < 4; i++) {
        let resp = document.createElement("button");

        resp.textContent = opcoes[i];
        resp.addEventListener('click', () => {
            
        })

        div.appendChild(resp);
    }

    document.body.appendChild(questao);
    document.body.appendChild(div);
}

function errou(el) {
    el.style.backgroundColor = "red";
}

function acertou(el) {
    el.style.backgroundColor = "green";
}