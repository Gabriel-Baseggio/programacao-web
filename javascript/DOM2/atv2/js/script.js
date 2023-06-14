let titulo = document.querySelector("#titulo");
let paragrafo = document.querySelector("#paragrafo");
let botaoMudarCorFundo = document.querySelector("#mudarCorFundo");
let botaoMudarCorTitulo = document.querySelector("#mudarCorTitulo");
let botaoMudarCorParagrafo = document.querySelector("#mudarCorParagrafo");
let botaoMudarFonteTitulo = document.querySelector("#mudarFonteTitulo");
let botaoMudarFonteParagrafo = document.querySelector("#mudarFonteParagrafo");
let botaoMudarTudo = document.querySelector("#mudarTudo");

let corFundo = document.querySelector("#corFundo");
let corTitulo = document.querySelector("#corTitulo");
let corParagrafo = document.querySelector("#corParagrafo");
let fonteTitulo = document.querySelector("#fonteTitulo");
let fonteParagrafo = document.querySelector("#fonteParagrafo");

function gerarCor() {
    return `rgb(${parseInt(Math.random() * 256)}, ${parseInt(Math.random() * 256)}, ${parseInt(Math.random() * 256)})`;
}

function gerarFonte() {
    let fontes = ['Abril Fatface', 'Bodoni Moda', 'Bree Serif', 'Leckerli One', 'Maven Pro', 'Merriweather', 'Monomaniac One', 'Monoton', 'Montserrat', 'Noto Serif', 'Pacifico', 'Quicksand', 'Roboto Slab', 'Sacramento', 'Space Grotesk'];
    return fontes[parseInt(Math.random() * fontes.length)];
}

function mudarCorFundo() {
    document.body.style.backgroundColor = gerarCor();
    let txt = document.body.style.backgroundColor.slice(4, document.body.style.backgroundColor.length - 1).split(",");

    let somaCores = 0;
    txt.forEach(num => {
        somaCores += parseInt(num);
    });

    if (somaCores < 300) {
        document.getElementById("valores").style.color = "white";
    } else {
        document.getElementById("valores").style.color = "black";
    }
    corFundo.innerText = "Cor do fundo: " + document.body.style.backgroundColor;
}

function mudarCorTitulo() {
    titulo.style.color = gerarCor();
    corTitulo.innerText = "Cor do título: " + titulo.style.color;
}

function mudarCorParagrafo() {
    paragrafo.style.color = gerarCor();
    corParagrafo.innerText = "Cor do parágrafo: " + paragrafo.style.color;
}

function mudarFonteTitulo() {
    titulo.style.fontFamily = gerarFonte();
    fonteTitulo.innerText = "Fonte do título: " + titulo.style.fontFamily;
}

function mudarFonteParagrafo() {
    paragrafo.style.fontFamily = gerarFonte();
    fonteParagrafo.innerText = "Fonte do parágrafo: " + paragrafo.style.fontFamily;
}

function mudarTudo() {
    mudarCorFundo();
    mudarCorTitulo();
    mudarCorParagrafo();
    mudarFonteTitulo();
    mudarFonteParagrafo();

    corFundo.innerText = "Cor do fundo: " + document.body.style.backgroundColor;
    corTitulo.innerText = "Cor do título: " + titulo.style.color;
    corParagrafo.innerText = "Cor do parágrafo: " + paragrafo.style.color;
    fonteTitulo.innerText = "Fonte do título: " + titulo.style.fontFamily;
    fonteParagrafo.innerText = "Fonte do parágrafo: " + paragrafo.style.fontFamily;
}

botaoMudarCorFundo.addEventListener("click", mudarCorFundo);

botaoMudarCorTitulo.addEventListener("click", mudarCorTitulo);

botaoMudarCorParagrafo.addEventListener("click", mudarCorParagrafo);

botaoMudarFonteTitulo.addEventListener("click", mudarFonteTitulo);

botaoMudarFonteParagrafo.addEventListener("click", mudarFonteParagrafo);

botaoMudarTudo.addEventListener("click", mudarTudo);