const Next = document.querySelector(".btnN");
const Prev = document.querySelector(".btnP");
const nums = document.querySelectorAll(".num");
const lines = document.querySelectorAll(".line");

let currentActive = 1;

Next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > nums.length) {
    currentActive = nums.length;
  }
  update();
});

Prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

// update

function update() {
  const actives = document.querySelectorAll("active");
  for (const [i, num] of nums.entries()) {
    if (i < currentActive) {
      num.classList.add("active");
    } else {
      num.classList.remove("active");
    }
  }
  for (const [i, line] of lines.entries()) {
    if (i + 1 < currentActive) {
      line.classList.add("activeLine");
    } else {
      line.classList.remove("activeLine");
    }
  }

  if (currentActive == 1) {
    Prev.disabled = true;
  } else if (currentActive == 4) {
    Next.disabled = true;
  } else {
    Prev.disabled = false;
    Next.disabled = false;
  }
}
