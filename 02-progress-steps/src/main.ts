import "./style.css";

const progress: HTMLElement = document.getElementById("progress")!;
const next: HTMLSelectElement | HTMLElement = document.getElementById("next")!;
const prev: HTMLElement = document.getElementById("prev")!;
const circles: NodeListOf<HTMLDivElement> = document.querySelectorAll(
  ".circle",
);

let curActive = 1;

next.addEventListener("click", () => {
  if (curActive && curActive < circles.length) {
    curActive++;

    if (curActive && curActive > 1) {
      prev.removeAttribute("disabled");
    }
    if (curActive == 4) {
      next.setAttribute("disabled", "");
      // next.disabled = true;
    }
  }
  update();
});

prev.addEventListener("click", () => {
  if (curActive && curActive > 1) {
    curActive--;
    if (curActive && curActive == 1) {
      prev.setAttribute("disabled", "");
    }
    if (curActive && curActive < 4) {
      next.removeAttribute("disabled");
    }
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < curActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const active: NodeListOf<HTMLDivElement> = document.querySelectorAll(
    ".active",
  );

  // console.log((active.length - 1) / (circles.length - 1) * 100 + "%");

  progress.style.width = (active.length - 1) / (circles.length - 1) * 100 + "%";
}
