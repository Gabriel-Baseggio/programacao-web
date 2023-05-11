// Exercício 1
console.log("\n --- Exercício 1 --- ");

const sucessor = function (num) {
    return num + 1;
}
const antecessor = function (num) {
    return num - 1;
}
console.log("Sucessor: " + sucessor(3) + "\nAntecessor: " + antecessor(3));

// Exercício 2
console.log("\n --- Exercício 2 --- ");

const reajustar = function (valor) {
    return valor * 1.15;
}
console.log("Reajuste de 15%: " + reajustar(10));

// Exercício 3
console.log("\n --- Exercício 3 --- ");

const calcularDistancia = function (tempo, velocidade) {
    return velocidade * tempo;
}
console.log("Distância percorrida: " + calcularDistancia(3, 80));

// Exercício 4
console.log("\n --- Exercício 4 --- ");

const imprimirMaior = function (num) {
    return (num > 20) ? (num / 2) : num;
}
console.log(imprimirMaior(22));

// Exercício 5
console.log("\n --- Exercício 5 --- ");

const somaMaior = function (num1, num2) {
    return (num1 + num2 > 10) ? (num1 + num2) : 0;
}
console.log(somaMaior(4, 7));

// Exercício 6
console.log("\n --- Exercício 6 --- ");

const imprimirEmprestimo = function (salario, prestacao) {
    return ((salario * 0.2) < prestacao) ? "Empréstimo não pode ser concedido!" : "Empréstimo pode ser concedido!";
}
console.log(imprimirEmprestimo(2000, 500));

// Exercício 7
console.log("\n --- Exercício 7 --- ");

const definirLucro = function (valCompra) {
    return (valCompra < 20) ? (valCompra * 1.45) : (valCompra * 1.3);
}
console.log("Valor de venda: R$" + definirLucro(25));

// Exercício 8
console.log("\n --- Exercício 8 --- ");

const definirVoto = function (idade) {
    if (idade < 16) {
        return "Não eleitor";
    } else if (idade < 18 || idade > 65) {
        return "Eleitor facultativo";
    }
    return "Eleitor obrigatório";
}
console.log(definirVoto(17));

// Exercício 9
console.log("\n --- Exercício 9 --- ");

const ordenarCrescente = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let aux = arr[i];
                arr[i] = arr[j];
                arr[j] = aux;
            }
        }
    }
    return arr;
}
console.log(ordenarCrescente([5, 2, 7]));

// Exercício 10
console.log("\n --- Exercício 10 --- ");

console.log([1, 2, 3].reverse());

// Exercício 11
console.log("\n --- Exercício 11 --- ");

console.log([5, 2, 7, 5, 3, 2, 1, 10, 11, 2].sort((a, b) => {
    return a - b;
}));

// Exercício 12
console.log("\n --- Exercício 12 --- ");

console.log([1, 2, 3, 4].concat([5, 6, 7, 8]));

// Exercício 13
console.log("\n --- Exercício 13 --- ");

const retornoInvestimento = function (capInicial, taxaJuros, tempoMeses) {
    return capInicial * (1 + taxaJuros) ** tempoMeses;
}
console.log(retornoInvestimento(100, 0.01, 12).toFixed(2));

// Exercício 14
console.log("\n --- Exercício 14 --- ");

const contarCaracter = (str, caracter) => {
    const caracterVzs = str.toUpperCase().split("").filter((letra) => {
        return letra == caracter.toUpperCase();
    });
    return caracterVzs.length;
}
console.log(contarCaracter("Exemplo de uma string qualquer.", "u"));

// Exercício 15
console.log("\n --- Exercício 15 --- ");

const pessoa = {
    nome: "Gabriel Baseggio",
    idade: 17,
    profissao: "Programador",
}
console.log(pessoa);

// Exercício 16
console.log("\n --- Exercício 16 --- ");

const pessoa16 = {
    nome: "Gabriel Baseggio",
    idade: 17,
    profissao: "Programador",
}
pessoa16.hobbies = ["Jogar videogame", "Assistir vídeos", "Jogar futebol"];
console.log(pessoa16);

// Exercício 17
console.log("\n --- Exercício 17 --- ");

const nomes = ["Gabriel", "João Winter", "Yasmin", "Enzo"];
console.log(nomes);
nomes.push("João Santana");
console.log(nomes);
nomes.pop();
console.log(nomes);
nomes.unshift("Kaue");
console.log(nomes);
nomes.shift();
console.log(nomes);
nomes.sort();
console.log(nomes);

// Exercício 18
console.log("\n --- Exercício 18 --- ");

let numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros);
console.log(numeros.join(", "));
numeros.reverse();
console.log(numeros);
numeros = numeros.slice(0, 2);
console.log(numeros);
const pares = numeros.filter((num) => {
    return num % 2 == 0;
});
console.log(pares);
const quadrados = numeros.map((num) => {
    return num ** 2;
});
console.log(quadrados);
const somaNumeros = numeros.reduce((acumulador, num) => {
    return acumulador + num;
}, 0);
console.log(somaNumeros);

// Exercício 19
console.log("\n --- Exercício 19 --- ");

const idades = [10, 20, 30, 17];
idadeMaior18 = idades.every((idade) => {
    return idade > 18;
});
console.log(idadeMaior18);

// Exercício 20
console.log("\n --- Exercício 20 --- ");

const pi = Math.PI;
console.log(pi);

// Exercício 21
console.log("\n --- Exercício 21 --- ");

const raizQuadrada = Math.sqrt(64);
console.log(raizQuadrada);

// Exercício 22
console.log("\n --- Exercício 22 --- ");

const frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas);
console.log(frutas[1]);
frutas.push("Morango");
console.log(frutas);
frutas.shift();
console.log(frutas);
const frutas2 = ["Manga", "Abacaxi", "Melancia"];
const todasFrutas = frutas.concat(frutas2);
console.log(todasFrutas);
const primeirasFrutas = todasFrutas.slice(0, 2);
console.log(primeirasFrutas);
todasFrutas.splice(1, 1);
console.log(todasFrutas);
console.log(todasFrutas.indexOf("Banana"));
const frutasM = todasFrutas.filter((fruta) => {
    return fruta.match("^M");
});
console.log(frutasM);
todasFrutas.forEach((fruta) => {
    console.log(fruta);
});


// Exercício 23
console.log("\n --- Exercício 23 --- ");

const gerarSenha = function (num) {
    let senha = "";
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-=!@#$%¨&*()_+¹²³£¢¬§\'\"\´[~],.;/`{^}<>:?ªº°|\\";

    for (let i = 0; i < num; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }

    return senha;

}
console.log(gerarSenha(50000));

// Exercício 24
console.log("\n --- Exercício 24 --- ");

const gerarNumeroAleatorio = function (min, max) {
    return Math.floor((Math.random() * max) + min);
}
console.log(gerarNumeroAleatorio(10, 20));

// Exercício 25
console.log("\n --- Exercício 25 --- ");

const calculadora = function (calculo) {
    return eval(calculo);
}
console.log(calculadora("2 + 3 * 4"));

// Exercício 26
console.log("\n --- Exercício 26 --- ");

const converterMorse = function (codigo) {
    let convertido = "";
    const alfabeto = {
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z",
    };

    codigo.split("  ").map((palavra) => {
        palavra.split(" ").map((letra) => {
            convertido += alfabeto[letra];
        });
        convertido += " ";
    });

    return convertido;
}
console.log(converterMorse(". ... - --- ..-  -.. . -.-. --- -.. .. ..-. .. -.-. .- -. -.. ---  -- --- .-. ... .  .- .--. . -. .- ...  -.-. --- --  .--- .- ...- .- ... -.-. .-. .. .--. -"));

// Exercício 27
console.log("\n --- Exercício 27 --- ");

const criarMatriz = function (linhas, colunas) {
    let matriz = new Array(linhas);
    for (let i = 0; i < linhas; i++) {
        matriz[i] = new Array(colunas);
    }

    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10) + 1;
        }
    }
    return matriz;
}
console.log(criarMatriz(5, 10));