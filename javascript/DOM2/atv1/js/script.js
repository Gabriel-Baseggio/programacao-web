let botaoAumentar = document.querySelector("#botaoAumentar");
let botaoDiminuir = document.querySelector("#botaoDiminuir");
let contador = document.querySelector("#contador");

botaoAumentar.addEventListener("click", () => {
    contador.innerHTML = parseInt(contador.innerHTML) + 1;
});

botaoDiminuir.addEventListener("click", () => {
    contador.innerHTML = parseInt(contador.innerHTML) - 1;
});