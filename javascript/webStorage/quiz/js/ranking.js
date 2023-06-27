montarRanking();

function montarRanking() {
    let ranking = JSON.parse(localStorage.getItem("ranking")) || [];
    ranking.forEach(adicionarJogador);
}

function adicionarJogador(jogador) {
    console.log(jogador);
    let tabela = document.getElementById("tabela-ranking");
    let tr = document.createElement("tr");
    let tdJogador = document.createElement("td");
    let tdPontos = document.createElement("td");
    tdJogador.textContent = jogador[0];
    tdPontos.textContent = jogador[1];
    tr.appendChild(tdJogador);
    tr.appendChild(tdPontos);
    tabela.appendChild(tr);
}