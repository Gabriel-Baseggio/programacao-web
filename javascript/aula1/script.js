console.log("Hello World!");

// Comentário de uma linha!

function exemploVar () {
    var nome = "Maria";
    console.log(nome);
}

exemploVar();

// console.log(nome);

const constante = "Variável que não pode ser alterada após declarada!";
var variavel = "Variável que pode ser declarada mais de uma vez!";
let variavelLet = "Variável que só pode ser declarada uma única vez!";

console.log(constante);
console.log(variavel);
console.log(variavelLet);

let nome = "João";
let sobrenome = "Silva";
let saudacao = `Olá, ${nome} ${sobrenome}`;

console.log(saudacao);

const n = 10;
let num = 1, numAnterior = 0, string = "";

for (let i = 0; i < n; i++) {
    string += `${num}, `
    let aux = num
    num += numAnterior
    numAnterior = aux
}

console.log(string)

function definirNumero () {
    let num = parseInt(document.getElementById("inputNumero").value)
    alert(num);
    if (num % 2 == 0) {
        alert("É par")
    } else {
        alert("É ímpar")
    }
}
