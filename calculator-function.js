

let displayRes = "";


function buttonClickHandler(event) {
    const value = event.target.value;
    if (value === "all-clear") {
        displayRes = "";
    } else if (value === "=") {
        displayRes = Function(`return ${displayRes}`)();
        console.log(displayRes)
    } else {
        displayRes = displayRes + value;
    }
    document.getElementById("calculator-screen").value = displayRes;
}

const buttonElement = document.querySelectorAll('#calculator button');
buttonElement.forEach(function (button) {
  button.addEventListener("click", buttonClickHandler);
});
