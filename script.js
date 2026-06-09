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

  // Cotação
  inputValorCotacao: document.querySelector("#valor-cotacao"),
  btnBuscarCotacao: document.querySelector("#buttonCotacao"),
  resultadoCotacao: document.querySelector("#resultado-cotacao"),

  // Temperatura
  inputCelsius: document.querySelector("#celsius"),
  inputFahrenheit: document.querySelector("#fahrenheit"),
  btnCelsiusParaFahrenheit: document.querySelector("#btnCelsiusParaFahrenheit"),
  btnFahrenheitParaCelsius: document.querySelector("#btnFahrenheitParaCelsius"),
  resultadoTemperatura: document.querySelector("#resultado-temperatura"),

  // Velocidade
  inputKmh: document.querySelector("#kmh"),
  inputMs: document.querySelector("#ms"),
  btnKmhParaMs: document.querySelector("#btnKmhParaMs"),
  btnMsParaKmh: document.querySelector("#btnMsParaKmh"),
  resultadoVelocidade: document.querySelector("#resultado-velocidade"),
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

// Cotação
async function buscarCotacao() {
  const valor = parseFloat(elemento.inputValorCotacao.value);

  if (isNaN(valor) || valor <= 0) {
    elemento.resultadoCotacao.textContent =
      "Digite um valor válido em dólares.";
    return;
  }

  elemento.resultadoCotacao.textContent = "Buscando cotação...";

  try {
    const resposta = await fetch(
      "https://economia.awesomeapi.com.br/json/last/USD-BRL",
    );
    const dados = await resposta.json();
    const cotacao = parseFloat(dados.USDBRL.bid);
    const total = valor * cotacao;

    elemento.resultadoCotacao.textContent = `$ ${valor.toFixed(2)} = R$ ${total.toFixed(2)} (cotação: R$ ${cotacao.toFixed(2)})`;
  } catch (erro) {
    elemento.resultadoCotacao.textContent =
      "Erro ao buscar cotação. Tente novamente.";
  }
}

function iniciarCotacao() {
  elemento.btnBuscarCotacao.addEventListener("click", buscarCotacao);
}

// Temperatura
function celsiusParaFahrenheit() {
  const celsius = parseFloat(elemento.inputCelsius.value);

  const fahrenheit = (celsius * 9) / 5 + 32;
  elemento.resultadoTemperatura.textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
}

function fahrenheitParaCelsius() {
  const fahrenheit = parseFloat(elemento.inputFahrenheit.value);

  const celsius = ((fahrenheit - 32) * 5) / 9;
  elemento.resultadoTemperatura.textContent = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
}

function iniciarTemperatura() {
  elemento.btnCelsiusParaFahrenheit.addEventListener(
    "click",
    celsiusParaFahrenheit,
  );
  elemento.btnFahrenheitParaCelsius.addEventListener(
    "click",
    fahrenheitParaCelsius,
  );
}

function kmhParaMs() {
  const kmh = parseFloat(elemento.inputKmh.value);

  if (isNaN(kmh) || kmh < 0) {
    elemento.resultadoVelocidade.textContent = "Preencha o campo de Km/h.";
    return;
  }

  const ms = kmh / 3.6;
  elemento.resultadoVelocidade.textContent = `${kmh} Km/h = ${ms.toFixed(2)} m/s`;
}

function msParaKmh() {
  const ms = parseFloat(elemento.inputMs.value);

  if (isNaN(ms) || ms < 0) {
    elemento.resultadoVelocidade.textContent = "Preencha o campo de m/s.";
    return;
  }

  const kmh = ms * 3.6;
  elemento.resultadoVelocidade.textContent = `${ms} m/s = ${kmh.toFixed(2)} Km/h`;
}

function iniciarVelocidade() {
  elemento.btnKmhParaMs.addEventListener("click", kmhParaMs);
  elemento.btnMsParaKmh.addEventListener("click", msParaKmh);
}

iniciarNavegacao();
iniciarImc();
iniciarCotacao();
iniciarTemperatura();
iniciarVelocidade();
