function main() {
  // selecione o botão usando o método getElementById
  const botao = document.getElementById("botao");

  botao.addEventListener("click", function () {
    // selecione o parágrafo usando o método getElementById
    const paragrafo = document.getElementById("paragrafo");

    // altere o texto do parágrafo
    paragrafo.textContent = "O texto deste parágrafo foi alterado!";
  });

  const cleanButton = document.getElementById("cleanButton");

  cleanButton.addEventListener("click", function () {
    const paragrafo = document.getElementById("paragrafo");
    paragrafo.textContent = "";
  });
}

document.addEventListener("DOMContentLoaded", main);
