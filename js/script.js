const animacao = document.querySelectorAll(".js-scroll");

animacao.forEach((item) => {
  item.classList.add("ativo1");
});

const github = document
  .querySelector("#github")
  .addEventListener("click", () => {
    window.open("https://github.com/baestero", "_blank");
  });

const linkedln = document
  .querySelector("#linkedln")
  .addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/leonardo-b-576301124/", "_blank");
  });

const portfolio = document
  .querySelector("#portfolio")
  .addEventListener("click", () => {
    window.location = "#";
  });

console.log(github, linkedln, portfolio);

const toggleThemeButton = document.getElementById("toggleThemeButton");
const toggleBtn = document.querySelector(".toggle-btn");
const container = document.querySelector(".container");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  container.classList.toggle("active");

  const root = document.documentElement;
  const isDarkMode = root.style.getPropertyValue("--fundo-1") === "#161616"; // Verifica se está no modo escuro
  if (isDarkMode) {
    root.style.setProperty("--fundo-1", "#f7f7f78a");
    root.style.setProperty("--fundo-cards", "#fff");
    root.style.setProperty("--fundo-icons", "#f8f8f8da");
    root.style.setProperty("--texto", "rgba(0, 0, 0, 0.795)");
    root.style.setProperty("--titulos", "rgba(0, 0, 0, 0.795)");
    root.style.setProperty("--btn", "#000");
    root.style.setProperty(
      " --border",
      "0.1px solid rgba(128, 128, 128, 0.151)"
    );
    root.style.setProperty(
      "--meuGradiente",
      "radial-gradient(circle,rgba(255, 255, 255, 1) 0%,rgba(240, 240, 240, 1) 100%"
    );
  } else {
    root.style.setProperty("--fundo-1", "#161616");
    root.style.setProperty("--fundo-cards", "#000");
    root.style.setProperty("--fundo-icons", "#161616");
    root.style.setProperty("--texto", "rgb(136, 135, 135)");
    root.style.setProperty("--titulos", "#fff");
    root.style.setProperty("--btn", "#fff");
    root.style.setProperty(
      "--border",
      "0.1px solid rgba(128, 128, 128, 0.151)"
    );
    root.style.setProperty(
      "--meuGradiente",
      "radial-gradient(circle, rgba(34,34,34,1) 34%, rgba(22,22,22,1) 100%)"
    );
  }
});
