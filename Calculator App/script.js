let display = document.getElementById("display");

function appendToDisplay(value) {
  display.innerText += value;
}

function clearDisplay() {
  display.innerText = "";
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function calculateResult() {
  try {
    display.innerText = eval(display.innerText.replace("x", "*").replace("÷", "/"));
    display.classList.add("animation");
    setTimeout(() => {
      display.classList.remove("animation");
    }, 500);
  } catch {
    display.innerText = "Error";
  }
}
