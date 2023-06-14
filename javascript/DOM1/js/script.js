// Selecionando elementos
let campoTarefa = document.querySelector("#campo-tarefa");
let botaoAdicionar = document.querySelector("#botao-adicionar");
let listaTarefas = document.querySelector("#lista-tarefas");

// Criando e adicionando elementos
const adicionarTarefa = function () {
  // Pegar o valor do campo de texto
  let nomeTarefa = campoTarefa.value;
  // Criando um elemento li
  let novaTarefa = document.createElement("li");

  if (nomeTarefa.length() == 0) {
    alert("Dê um nome à tarefa");
    return;
  }

  // Alterando o texto do li para o texto do campo de texto
  novaTarefa.innerText = nomeTarefa;

  // Adicionando a nova li à lista de tarefas
  listaTarefas.appendChild(novaTarefa);

  // Adicionando a classe de tarefa na nova tarefa
  novaTarefa.className = "tarefa";

  // Adicionando um eventListener na tarefa
  novaTarefa.addEventListener("click", () => {
    // Adicionando uma classe na tarefa
    novaTarefa.classList.toggle("concluida");
  });

  // Criando o botão para excluir
  let botaoExcluir = document.createElement("button");

  // Definir o texto do botão excluir
  botaoExcluir.innerHTML = "Remover";

  // Adicionando um evento ao botão de excluir
  botaoExcluir.addEventListener("click", () => {
    // listaTarefas.removeChild(novaTarefa);
    novaTarefa.remove();
  });

  botaoExcluir.className = "botao-excluir";

  // Adicionando o novo botão na li
  novaTarefa.appendChild(botaoExcluir);

  // Resetando o valor do campo de texto
  campoTarefa.value = "";

  campoTarefa.focus();
};

// Adicionando eventos
botaoAdicionar.addEventListener("click", adicionarTarefa);

campoTarefa.addEventListener("keyup", function (e) {
  // Verificação do código da tecla enter
  if (e.key === "Enter") {
    adicionarTarefa();
  }
});
