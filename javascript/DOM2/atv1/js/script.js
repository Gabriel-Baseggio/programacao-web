let botaoAumentar = document.querySelector("#botaoAumentar");
let botaoDiminuir = document.querySelector("#botaoDiminuir");
let contador = document.querySelector("#contador");

botaoAumentar.addEventListener("click", () => {
    contador.innerHTML = parseInt(contador.innerHTML) + 1;
});

botaoDiminuir.addEventListener("click", () => {
    contador.innerHTML = parseInt(contador.innerHTML) - 1;
});

var id;
botaoAumentar.onmousedown = () => {
    contador.innerHTML = parseInt(contador.innerHTML) + 1;

    id = setInterval(() => {
        contador.innerHTML = parseInt(contador.innerHTML) + 1;
    }, 1)
}
botaoAumentar.onmouseup = () => {
    clearInterval(id)
}

var id2;
botaoDiminuir.onmousedown = () => {
    contador.innerHTML = parseInt(contador.innerHTML) - 1;

    id2 = setInterval(() => {
        contador.innerHTML = parseInt(contador.innerHTML) - 1;
    }, 1)
}
botaoDiminuir.onmouseup = () => {
    clearInterval(id2)
}