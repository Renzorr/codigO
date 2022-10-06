const main = document.getElementById("main-container");
const arrParrafos = document.querySelectorAll("p");

main.innerHTML = "DOM Class";

function addRemove() {
  main.classList.toggle("clicked");
}

const input = document.getElementById("input");

input.addEventListener("keyup", function (keyup) {
  const text = input.value;

  arrParrafos.forEach((p) => {
    p.innerHTML = text;
  });
});
