// const cep = "01001001";

// const consultaCep = fetch(`https://viacep.com.br/ws/${cep}/json/`)
//   .then(response => response.json())
//   .then(data => {
//     if (data.erro) {
//       throw Error("Cep inexistente!")
//     } else {
//       console.log(data)
//     }
//   })
//   .catch(err => console.error(err))
//   .finally(result => console.log("Processo concluído"));

// console.log(consultaCep);

async function buscarEndereco(cep) {

  try {
    const consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const consultaCepConvertida = await consultaCep.json();
    if (consultaCepConvertida.erro) {
      throw Error("Cep inexistente!");
    }
    console.log(consultaCepConvertida);
    document.getElementById("cidade").value = consultaCepConvertida.localidade;
    document.getElementById("endereco").value = consultaCepConvertida.logradouro;
    document.getElementById("complemento").value = consultaCepConvertida.complemento;
    document.getElementById("bairro").value = consultaCepConvertida.bairro;
    document.getElementById("estado").value = consultaCepConvertida.uf;
  } catch (err) {
    console.error(err)
    document.getElementById("erro").textContent = err;
  }

}

const cep = document.getElementById("cep");
cep.addEventListener('focusout', () => buscarEndereco(cep.value));
