var main = criandoSelector("main");
var audio = criandoSelector("audio");
var btn = criandoSelector(".botao-principal");
var audio = criandoSelector(".audio1");
var audio2 = criandoSelector(".audio2");
var escolhaDrink = criandoSelector(".escolha-drink");
var botaoEscolha = document.querySelectorAll(".botao");
var box1 = criarElemento("div");
var box2 = criarElemento("div");

btn.addEventListener("click", verifica);

// função verifica sem uma função dentro dela
// function verifica() {
//   var condicao = Math.round(Math.random() * 2);

//   if (condicao === 1) {
//     btn.style.display = "none";
//     main.appendChild(box1);
//     box1.classList.add("caixa-aberta");
//     box1.innerHTML = `
//     <h2>Estamos Abertos! Bora Beber!</h2>
//     <p class='botao-escolha'>Clique aqui para escolher o seu drink!<p>`;

//     audio.play();
//   } else {
//     btn.style.display = "none";
//     main.appendChild(box2);
//     box2.classList.add("caixa-fechada");
//     box2.innerHTML = `<h2>Estamos Fechados! Tururu :C</h2>`;
//     audio2.play();
//   }
//   return condicao;
// }

function verifica() {
  var condicao = Math.round(Math.random() * 2);

  if (condicao === 1) {
    layout(
      box1,
      "caixa-aberta",
      `
         <h2>Estamos Abertos! Bora Beber!</h2>
        <p class='botao-escolha'>Clique aqui para escolher o seu drink!<p>`,
      audio
    );
  } else {
    layout(
      box2,
      "caixa-fechada",
      `<h2>Estamos Fechados! Tururu :C</h2>`,
      audio2
    );
  }
  return condicao;
}
function layout(elemento, classe, mensagem, audio) {
  btn.style.display = "none";
  main.appendChild(elemento);
  elemento.classList.add(classe);
  elemento.innerHTML = mensagem;
  audio.play();
}

box1.addEventListener("click", function () {
  box1.style.display = "none";
  escolhaDrink.style.display = "flex";
});

botaoEscolha.forEach(function (item) {
  item.addEventListener("click", function (event) {
    escolhaDrink.style.display = "none";
    const valor = item.textContent;
    switch (valor) {
      case "Caipirinha":
        bomDrink(`<img class="imagens" src="./images/caipirinha.gif">
        <p>Aqui está irmão, bom drink!</p>`);
        break;
      case "Cerveja":
        bomDrink(`<img  class="imagens"src="./images/beer.gif" alt="">
        <p>Aqui está irmão, bom drink!</p>`);
        break;
      case "Refrigerante":
        bomDrink(
          `<img  class="imagens"src="./images/coca-cola.gif" alt=""> 
          <p>Aqui está irmão, bom drink!</p>`
        );
        break;
      case "Vodka":
        bomDrink(`<img  class="imagens"src="./images/vodka.gif" alt="">
      <p>Aqui está irmão, bom drink!</p>`);
        break;
      case "Água":
        bomDrink(`<img class="imagens" src="./images/agua.gif" alt="">
      <p>Aqui está irmão, bom drink!</p>`);
        break;
    }
  });
});

function criarElemento(elemento) {
  return document.createElement(elemento);
}

function criandoSelector(elemento) {
  return document.querySelector(elemento);
}

function bomDrink(mensagem) {
  let bebida = criarElemento("div");
  bebida.innerHTML = mensagem;
  bebida.classList.add("botao");
  main.appendChild(bebida);
}
