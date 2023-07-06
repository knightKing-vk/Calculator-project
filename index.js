const display = document.getElementById("display");
const buttons = document.getElementById("buttons");
buttons.addEventListener("click", (event) => {
  let target = event.target;
  if (target.innerHTML === "C") {
    display.value = "";
  } else if (target.classList.contains("number")) {
    display.value += target.innerHTML;
  } else if (target.classList.contains("operator")) {
    let lastChar = display.value[display.value.length - 1]; 
    if (["+", "-", "*", "/"].includes(lastChar)) {
      display.value = display.value.slice(0, -1) + target.innerHTML; 
    } else {
      display.value += target.innerHTML;
    }
  } else if (target.innerHTML === "=") {
    if (display.value.length !== 0) {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Syntax Error!";
      }
    } else display.value = "";
  }
});

document.body.addEventListener("keypress", (event) => {
  let target = event.key;
  const numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operatorsArray = ["+", "-", "*", "/"];
  if (target === "c") {
    display.value = "";
  } else if (numbersArray.includes(event.key)) {
    display.value += target;
  } else if (operatorsArray.includes(event.key)) {
    let lastChar = display.value[display.value.length - 1]; 
    if (operatorsArray.includes(lastChar)) {
      display.value = display.value.slice(0, -1) + target; 
    } else {
      display.value += target;
    }
  } else if (target === "=") {
    if (display.value.length !== 0) {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Syntax Error!";
      }
    } else display.value = "";
  } else {
    alert("Wrong key pressed!");
  }
});