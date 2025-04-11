let result = document.querySelector(".result");
let calcul = "";
let buttons = document.querySelectorAll("button");
let histo = "";
const casio = document.querySelector(".casio");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let value = this.textContent;
    if (value === "C") {
      calcul = "";
      result.textContent = "0";
    } else if (value === "=") {
      try {
        calcul = eval(calcul);
        result.textContent = calcul;
      } catch (error) {
        result.textContent = "Erreur";
        calcul = "";
      }
    } else {
      calcul += value;
      result.textContent = calcul;
    }
  });
});

casio.addEventListener("mouseenter", () => {
  casio.style.background = "blue";
});
casio.addEventListener("mouseout", () => {
  casio.style.background = "pink";
});
