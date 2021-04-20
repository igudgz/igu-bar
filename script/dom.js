var main = document.querySelector("main");
var audio = document.querySelector("audio");
var btn = document.querySelector(".botao");
btn.addEventListener("click", verifica);
var audio = document.querySelector(".audio1");
var audio2 = document.querySelector(".audio2");

function verifica() {
  var condicao = Math.round(Math.random() * 2);
  for (var tentativas = 0; 2 > tentativas; tentativas++) {
    if (condicao === 1) {
      var box = document.createElement("div");
      main.appendChild(box);
      box.classList.add("caixa-aberta");
      box.innerHTML = `<h2>Estamos Abertos! Bora Beber!</h2>`;
      var audio = document.querySelector("audio");
      audio.play();
    } else {
      var box = document.createElement("div");
      main.appendChild(box);
      box.classList.add("caixa-fechada");
      box.innerHTML = `<h2>Estamos Fechados! Tururu :C</h2>`;
      audio2.play();
    }
    return condicao;
  }
}
