const elemento = {
  // Botoes
  btnCotacao: document.querySelector("#cotacao"),
  btnImc: document.querySelector("#Imc"),
  btnTemperatura: document.querySelector("#temperatura"),
  btnVelocidade: document.querySelector("#velocidade"),
  btnMassa: document.querySelector("#massa"),
  btnRegraTres: document.querySelector("#tres"),

  // telas
  msgBemVindo: document.querySelector(".msg-inicio"),
  telaCotacao: document.querySelector("#cotacao-moedas"),
  telaImc: document.querySelector("#calculo-imc"),
  telaTemperatura: document.querySelector("#conversor-temperatura"),
  telaVelocidade: document.querySelector("#conversor-velocidade"),
  telaMassa: document.querySelector("#conversor-massa"),
  telaRegra: document.querySelector("#calculo-tres"),
};

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

  elemento.btnRegra.addEventListener("click", (event) => {
    event.preventDefault();
    mostrarTela(elemento.telaRegra);
  });
}

iniciarNavegacao();