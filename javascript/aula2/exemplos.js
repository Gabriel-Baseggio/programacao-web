console.log("\n ---------- Criando funções ----------")
// 1ª maneira de criar uma função
function somar(a, b) {
    return a + b;
}

console.log(somar(3, 4));

// 2ª maneira de criar uma função
const subtrair = function (a, b) {
    return a - b;
}

console.log(subtrair(10, 3));

// 3ª maneira de criar uma função
const multiplicar = (a, b) => a * b;

console.log(multiplicar(3, 4));

console.log("\n ---------- Escopos de variáveis ----------")
// Variável de escopo global
let variavelGlobal = "Olá! Global.";

const escopoGlobal = () => console.log(variavelGlobal);

escopoGlobal();
console.log(variavelGlobal)

// Variável de escopo local
const escopoLocal = () => {
    let variavelLocal = "Olá! Local.";
    console.log(variavelLocal);
}

escopoLocal();
// console.log(variavelLocal); // Dará erro!

// Variável de escopo de bloco
if (true) {
    let variavelBloco = "Olá! Bloco.";
    console.log(variavelBloco);
}

// console.log(variavelBloco); // Dará erro

// Objetos!
console.log("\n ---------- Objetos ----------")

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    //...

    ligar: function() {
        console.log("O carro está ligado!");
    },
    //...
}

console.log(carro.marca);
console.log(carro.ano);
carro.ligar();

carro.cor = "Preto";
console.log(carro.cor);

// Propriedades

let pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",

    apresentar: function() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e moro em ${this.cidade}.`);
    }
}

pessoa.apresentar();

// Objeto Math
console.log("\n ---------- Objeto Math ----------");

console.log(Math.random());
console.log(Math.round(4.7));
console.log(Math.round(4.4));
console.log(Math.max(0, 180, 30, 20, -8, -200));
console.log(Math.min(0, 180, 30, 20, -8, -200));

// Objeto Date
console.log("\n ---------- Objeto Date ----------");

let dataAtual = new Date();
console.log(dataAtual);

let dataEspecifica = new Date("2023-12-25");
console.log(dataEspecifica);

let data = new Date();
console.log(data.getFullYear());
console.log(data.getMonth());
console.log(data.getDate());
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());

// Arrays
console.log("\n ---------- Arrays ---------- ");

const frutas = ["Maçã", "Banana", "Uva"];
console.log(frutas[1]);

const numeros = [1, 2, 3];

// Adiciona um elemento no final
numeros.push(4);
console.log(numeros);

// Retira um elemento do final
numeros.pop();
console.log(numeros);

const animais = ["Cachorro", "Gato", "Coelho"];

// Retira um elemento do início
animais.shift();
console.log(animais);

// Adiciona um elemento no início
animais.unshift("Tartaruga");
console.log(animais);

const cores = ["Vermelho", "Verde", "Azul"];

// Tira elementos -> (Index inicial, Número de elementos a remover, Elementos a adicionar, Elementos a adicionar, ...)
cores.splice(1, 2);
console.log(cores);

cores.splice(1, 0, "Amarelo");
console.log(cores);

const nums = [1, 2, 3, 4, 5];
// Passa por cada elemento da array
nums.forEach((num) => {
    console.log(num * 2);
});

// Mapeia uma array e cria uma outra array com o que você alterar
const dobrados = nums.map((num) => {
    return num * 2;
});
console.log(dobrados);

// Filtra a array e cria outra array apenas com os elementosque pertencem ao filtro
const impares = nums.filter((num) => {
    return num % 2 !== 0;
});
console.log(impares);

// Percorre o array e soma os elementos do array -> (função para somar os elementos, valor inicial da variável)
const soma = nums.reduce((acumulador, num) => {
    return acumulador + num;
}, 0);
console.log(soma);