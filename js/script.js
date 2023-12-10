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
