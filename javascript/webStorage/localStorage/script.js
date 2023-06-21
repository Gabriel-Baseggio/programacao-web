
function salvarNome() {
    const nome = document.getElementById("nome").value;
    if (nome) {
        localStorage.setItem("nome", nome);
        document.getElementById("mensagem").textContent = "Nome salvo com sucesso!";
    } else {
        document.getElementById("mensagem").textContent = `Erro, nome vazio!`;
    }
}

function recuperarNome() {
    const nome = localStorage.getItem("nome");
    if (nome) {
        document.getElementById("mensagem").textContent = `Nome recuperado: ${nome}`;
    } else {
        document.getElementById("mensagem").textContent = `Erro, nome indisponível!`;
    }
}