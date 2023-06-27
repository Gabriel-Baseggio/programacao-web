let campoTarefa = document.querySelector("#campo-tarefa");
let botaoAdicionar = document.querySelector("#botao-adicionar");
let listaTarefas = document.querySelector("#lista-tarefas");
let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas")) || [];
tarefasSalvas.forEach(adicionarTarefaNaLista);

botaoAdicionar.addEventListener("click", () => {
  let nomeTarefa = campoTarefa.value;

  if (nomeTarefa.length == 0) {
    alert("Dê um nome à tarefa");
    return;
  }

  let tarefa = { nome: nomeTarefa, estado: '' };

  tarefasSalvas.push(tarefa);
  adicionarTarefaNaLista(tarefa)
});

campoTarefa.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    let nomeTarefa = campoTarefa.value;

    if (nomeTarefa.length == 0) {
      alert("Dê um nome à tarefa");
      return;
    }

    let tarefa = { nome: nomeTarefa, estado: '' };

    tarefasSalvas.push(tarefa);
    adicionarTarefaNaLista(tarefa)
  }
});

function adicionarTarefaNaLista(tarefa) {
  let nomeTarefa = tarefa.nome;
  let estadoTarefa = tarefa.estado;
  let novaTarefa = document.createElement("li");

  novaTarefa.className = "tarefa";

  novaTarefa.textContent = nomeTarefa;

  if (estadoTarefa != '') {
    novaTarefa.classList.toggle("concluida");

  }

  novaTarefa.addEventListener("click", () => {
    for (let i = 0; i < document.getElementsByClassName("tarefa").length; i++) {
      if (novaTarefa == document.getElementsByClassName("tarefa")[i]) {
        tarefasSalvas[i].estado = tarefasSalvas[i].estado == "concluida"? "" : "concluida";
      }
    }
    novaTarefa.classList.toggle("concluida");
    localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
  });

  let botaoExcluir = document.createElement("button");

  botaoExcluir.innerHTML = "Remover";

  botaoExcluir.addEventListener("click", () => {
    for (let i = 0; i < document.getElementsByClassName("tarefa").length; i++) {
      if (novaTarefa == document.getElementsByClassName("tarefa")[i]) {
        tarefasSalvas.splice(i, 1);
      }
    }
    listaTarefas.removeChild(novaTarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
  });

  botaoExcluir.className = "botao-excluir";

  localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));

  novaTarefa.appendChild(botaoExcluir);

  campoTarefa.value = "";

  campoTarefa.focus();

  listaTarefas.appendChild(novaTarefa);
}

let botaoModo = document.getElementById("botao-modo");
document.body.className = localStorage.getItem("modo") || "modo-claro";

botaoModo.addEventListener("click", () => {
  if (document.body.className === "modo-claro") {
    document.body.className = "modo-escuro";
  } else {
    document.body.className = "modo-claro";
  }
  localStorage.setItem("modo", document.body.className)
})