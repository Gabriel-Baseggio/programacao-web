// Exercício 1
console.log("\n --- Exercício 1 ---");

function somar(a, b) {
    return a + b;
}
console.log(somar(2, 2));

// Exercício 2
console.log("\n --- Exercício 2 ---");

const subtrair = function (a, b) {
    return a - b;
}
console.log(subtrair(2, 2));

// Exercício 3
console.log("\n --- Exercício 3 ---");

const multiplicar = (a, b) => {
    return a * b;
}
console.log(multiplicar(2, 2));

// Exercício 4
console.log("\n --- Exercício 4 ---");

const ehPar = (a) => {
    return a % 2 == 0;
}
console.log(ehPar(2));

// Exercício 5
console.log("\n --- Exercício 5 ---");

const calcularMedia = (arr) => {
    const soma = arr.reduce((acumulador, num) => {
        return acumulador + num;
    }, 0);
    return soma / arr.length;
}
console.log(calcularMedia([1, 2, 3, 4, 5]));

// Exercício 6
console.log("\n --- Exercício 6 ---");

const tornarMaiuscula = (str) => {
    return str.toUpperCase();
}
console.log(tornarMaiuscula("Olá!"));

// Exercício 7
console.log("\n --- Exercício 7 ---");

const filtrarArray = (arr, numMaior) => {
    const maiores = arr.filter((num) => {
        return num > numMaior;
    });
    return maiores;
}
console.log(filtrarArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));

// Exercício 8
console.log("\n --- Exercício 8 ---");

const contarOcorrencias = (arr, val) => {
    const ocorrencias = arr.filter((num) => {
        return num == val;
    });
    return ocorrencias.length;
}
console.log(contarOcorrencias([1, 2, 2, 3, 3, 3, 4, 4, 4, 4], 4));

// Exercício 9
console.log("\n --- Exercício 9 ---");

const contarVogais = (str) => {
    const vogais = str.toUpperCase().split("").filter((letra) => {
        return letra == "A" || letra == "E" || letra == "I" || letra == "O" || letra == "U";
    });
    return vogais.length;
}
console.log(contarVogais("Exemplo de uma string qualquer."));

// Exercício 10
console.log("\n --- Exercício 10 ---");

const criarArray = (num) => {
    let arrNova = [];
    for (let i = 1; i <= num; i++) {
        arrNova[i - 1] = i;
    }
    return arrNova;
}
console.log(criarArray(5));

// Exercício 11
console.log("\n --- Exercício 11 ---");

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
}

console.log(carro.marca);
carro.ano = 2025;
carro.getIdade = function() {
    return (new Date().getFullYear() - this.ano);  
};
carro.getDescricao = function() {
    return `Marca do carro: ${this.marca}\nModelo do carro: ${this.modelo}\nAno do carro: ${this.ano}`;  
};
console.log(carro.getIdade());
console.log(carro.getDescricao());

// Exercício 12
console.log("\n --- Exercício 12 --- ");

const retornarAleatorio = function() {
    return (Math.random() * 100) - 1;
}
console.log(retornarAleatorio());

// Exercício 13
console.log("\n --- Exercício 13 --- ");

const diferencaDatas = function(data1, data2) {
    return (data1 - data2) / 86400000;
}
console.log(diferencaDatas(new Date(), new Date("2005-08-30")));

// Exercício 14
console.log("\n --- Exercício 14 --- ");

const adicionarDias = function(data) {
    data.setDate(data.getDate() + 100);
    return data;
}
console.log(adicionarDias(new Date()));

// Exercício 15
console.log("\n --- Exercício 15 --- ");

const conta = {
    saldo: 1000,
    titular: "Gabriel",

    depositar: function(valor) {
        this.saldo += valor;
    },
    sacar: function(valor) {
        this.saldo -= valor;
    },
    verSaldo: function() {
        console.log(`Saldo: ${this.saldo}`);
    },
}

conta.verSaldo();
conta.depositar(500);
conta.verSaldo();
conta.sacar(1000);
conta.verSaldo();

// Exercício 16
console.log("\n --- Exercício 16 --- ");

const frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas[1]);

frutas.push("Manga");

frutas.shift();

console.log(frutas.length);

for (let i = 0; i < frutas.length; i++) {
    console.log(`${i} - ${frutas[i]}`);
}

frutas.forEach((fruta) => {
    console.log(fruta);
});

const tamanhoFrutas = frutas.map((fruta) => {
    return fruta.length;
});
console.log(tamanhoFrutas);

const frutasMaiores = tamanhoFrutas.filter((tamanhoFruta) => {
    return tamanhoFruta > 5;
});
console.log(frutasMaiores);

const somarMaiores = frutasMaiores.reduce((acumulador, tamanhoFruta) => {
    return acumulador + tamanhoFruta;
}, 0);
console.log(somarMaiores);