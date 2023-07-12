document.getElementById("botao-buscar").addEventListener("click", () => {
    buscarClima(document.getElementById("campo-cidade").value, document.getElementById("campo-dias").value);
});

async function buscarClima(cidade, dias) {
    document.getElementById("container-resposta").innerHTML = "";
    cidade = cidade.replaceAll(" ", "_");
    const f = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=3aafe9f4a062471980f222347231107&q=${cidade}&days=${dias}&aqi=no&alerts=no`);
    const resposta = await f.json();

    adicionarRespostas(document.getElementById("container-resposta"), "fa-solid fa-sun text-yellow-300", "Temperatura", `${resposta.current.temp_c}ºC`)
    adicionarRespostas(document.getElementById("container-resposta"), "fa-solid fa-temperature-half text-red-500", "Sensação térmica", `${resposta.current.feelslike_c}ºC`)
    adicionarRespostas(document.getElementById("container-resposta"), "fa-solid fa-droplet text-sky-300", "Umidade", `${resposta.current.humidity}%`)
    adicionarRespostas(document.getElementById("container-resposta"), "fa-solid fa-wind text-neutral-400", "Velocidade do vento", `${resposta.current.wind_kph} km/h`)

    for (dia in resposta.forecast.forecastday) {
        adicionardias(dia, resposta.forecast.forecastday[dia])
    }
}

function adicionarRespostas(container, icone, titulo, valor) {
    const p = document.createElement("p");
    p.className = "paragrafo-resposta";

    p.innerHTML = `<i class="${icone}"></i> ${titulo}: ${valor}`;

    container.appendChild(p);
}

function adicionardias(dia, valores) {
    console.log(valores);
    const container = document.getElementById("cards-dias");
    const card = document.createElement("div");
    card.classList = ["flex flex-col items-center justify-center p-1 border-solid border-2 border-black rounded-lg"];
    card.innerHTML = `<h1>${valores.date}</h1>`;
    adicionarRespostas();
    
    container.appendChild(card);
    
}