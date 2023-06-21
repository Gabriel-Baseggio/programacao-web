let listaCompras = document.getElementById("lista-compras");
let adicionarBtn = document.getElementById("adicionar-btn");
let itemInput = document.getElementById("item-input");

let itensSalvos = JSON.parse(localStorage.getItem("itens")) || [];
itensSalvos.forEach(adicionarItemNaLista);

adicionarBtn.addEventListener("click", () => {
    let nomeItem = itemInput.value;
    adicionarItemNaLista(nomeItem)
    
    itensSalvos.push(nomeItem);
    localStorage.setItem("itens", JSON.stringify(itensSalvos));
    itemInput.value = '';
})

function adicionarItemNaLista(nomeItem) {
    let itemLista = document.createElement("li");
    itemLista.textContent = nomeItem;
    listaCompras.appendChild(itemLista);
}