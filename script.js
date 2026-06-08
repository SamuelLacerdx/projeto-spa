const elemento = {
  // Botoes
  btnCotacao: document.querySelector("#cotacao"),
  btnImc: document.querySelector("#Imc"),
  btnTemperatura: document.querySelector("#temperatura"),
  btnVelocidade: document.querySelector("#velocidade"),
  btnMassa: document.querySelector("#massa"),
  btnRegraTres: document.querySelector("#tres"),

  // Telas
  msgBemVindo: document.querySelector(".msg-inicio"),
  telaCotacao: document.querySelector("#cotacao-moedas"),
  telaImc: document.querySelector("#calculo-imc"),
  telaTemperatura: document.querySelector("#conversor-temperatura"),
  telaVelocidade: document.querySelector("#conversor-velocidade"),
  telaMassa: document.querySelector("#conversor-massa"),
  telaRegra: document.querySelector("#calculo-tres"),

  // IMC
  inputAltura: document.querySelector("#altura"),
  inputPeso: document.querySelector("#peso"),
  btnCalcularImc: document.querySelector("#buttonIMC"),
  resultadoImc: document.querySelector("#imc"),
  resultadoTipo: document.querySelector("#tipoImc"),

};

//  Navegar 

function mostrarTela(telaAtiva) {
  const todasTelas = [
    elemento.msgBemVindo,
    elemento.telaCotacao,
    elemento.telaImc,
    elemento.telaTemperatura,
    elemento.telaVelocidade,
    elemento.telaMassa,
    elemento.telaRegra,
  ];

  todasTelas.forEach((tela) => tela.classList.add("escondido"));
  telaAtiva.classList.remove("escondido");
}

function iniciarNavegacao() {
  elemento.btnCotacao.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarTela(elemento.telaCotacao);
  });

  elemento.btnImc.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarTela(elemento.telaImc);
  });

  elemento.btnTemperatura.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarTela(elemento.telaTemperatura);
  });

  elemento.btnVelocidade.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarTela(elemento.telaVelocidade);
  });

  elemento.btnMassa.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarTela(elemento.telaMassa);
  });

  elemento.btnRegraTres.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarTela(elemento.telaRegra);
  });
}

// IMC 

function calcularImc() {
  let altura = parseFloat(elemento.inputAltura.value);
  const peso = parseFloat(elemento.inputPeso.value);
  const genero = document.querySelector(".genero:checked").value;

  if (!altura || !peso || altura <= 0 || peso <= 0) {
    elemento.resultadoImc.textContent = "Preencha os campos corretamente.";
    elemento.resultadoTipo.textContent = "";
    return;
  }

  // Converte automaticamente se o usuario colocar altura sem ponto (1.75 / 175)
  if (altura > 3) {
    altura = altura / 100;
  }

  const imc = peso / (altura * altura);
  const limiteAbaixoPeso = genero === "masculino" ? 20.7 : 19.1;
  let classificacao = "";

  if (imc < limiteAbaixoPeso) {
    classificacao = "Abaixo do peso";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade grau I";
  } else if (imc < 40) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III";
  }

  elemento.resultadoImc.textContent = `IMC: ${imc.toFixed(2)}`;
  elemento.resultadoTipo.textContent = `Classificação: ${classificacao}`;
}

function iniciarImc() {
  elemento.btnCalcularImc.addEventListener("click", calcularImc);
}
iniciarNavegacao()
iniciarImc()