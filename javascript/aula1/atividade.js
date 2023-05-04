// Questão 1
let numQ1 = 10

if (numQ1 > 0) {
    console.log(`1 - ${numQ1} é positivo`)
} else if (numQ1 < 0) {
    console.log(`1 - ${numQ1} é negativo`)
} else {
    console.log(`1 - ${numQ1} é zero`)
}


// Questão 2
let nota1Q2 = 10, nota2Q2 = 10, nota3Q2 = 10

let mediaQ2 = (nota1Q2 + nota2Q2 + nota3Q2) / 3

let situacao = ""

if (mediaQ2 >= 7) {
    situacao = "aprovado"
} else if (mediaQ2 >= 5) {
    situacao = "em exame"
} else {
    situacao = "reprovado"
}

console.log(`2 - A média do aluno foi: ${mediaQ2} e a situação é: ${situacao}`)

// Questão 3

let respostas = ""
for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0) {
        respostas += `${i} `
    }
}

console.log(`3 - Números múltiplos de 3 entre 1 a 30: ${respostas}`)

// Questão 4

let numQ4 = 8, resultado = 1
const auxQ4 = numQ4

for (let i = numQ4; i > 0; i--) {
    resultado *= numQ4
    numQ4--
}

console.log(`4 - Fatorial de ${auxQ4}: ${resultado}`)

// Questão 5

let ano = 2003

if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    console.log(`5 - ${ano} é um ano bissexto`)
} else {
    console.log(`5 - ${ano} não é um ano bissexto`)
}

// Questão 6

let valorCelsius = 100

console.log(`6 - ${valorCelsius}°C para Fahrenheit: ${(valorCelsius * 1.8 + 32)}°F`)

// Questão 7

let palavra = "farigiraf"
let somaLetras = 0

for (let i = 0; i < palavra.length; i++) {
    if (palavra.charAt(i).toLowerCase() == palavra.charAt(palavra.length - 1 - i).toLowerCase()) {
        somaLetras++
    }
}

if (somaLetras == palavra.length) {
    console.log(`7 - ${palavra} é um palíndromo`)
} else {
    console.log(`7 - ${palavra} não é um palíndromo`)
}

// if (palavra.split('').reverse().join('').toLowerCase() == palavra.toLowerCase()) {
//     console.log(`7 - ${palavra} é um palíndromo`)
// } else {
//     console.log(`7 - ${palavra} não é um palíndromo`)
// }

// Questão 8

let array = [1, 2, 3287, 4, 5, 6]
let maior = -9999;

for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
        maior = array[i]
    }
}

console.log(`8 - O maior número da lista ${array} é ${maior}`)

// Questão 9

let arraySort = [4, 12093, 3, 102983, 5, 6, 7, 8, 219873, 1]

for (let i = 0; i < arraySort.length; i++) {
    for (let j = i + 1; j < arraySort.length; j++) {
        if (arraySort[i] > arraySort[j]) {
            let aux = arraySort[i]
            arraySort[i] = arraySort[j]
            arraySort[j] = aux
        }
    }
}   

console.log(`9 - Lista em ordem crescente: ${arraySort}`)

