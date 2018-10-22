

let displayRes = "0";


function buttonClickHandler(event) {
    const value = event.target.value;
    if (value === "all-clear") {
        displayRes = "0";
    } else if (value === "=") {
        displayRes = String(Function(`return ${displayRes}`)());
    } else if (value === "."){
        let parts = displayRes.split(/[+\-/*]/);
            if (parts[parts.length-1].indexOf(".") !== -1){
        return
        }
        displayRes = displayRes + value; 
    } else if (displayRes.match(/[+\-/*]$/) !== null && value.match(/[+\-/*]/) !== null){
        displayRes = displayRes.slice(0,-1) + value;
    } else if(displayRes === "0"){
            displayRes = value;
        } else {
        displayRes = displayRes + value;
    }
    document.getElementById("display").value = displayRes;
}

const buttonElement = document.querySelectorAll('#calculator button');
buttonElement.forEach(function (button) {
  button.addEventListener("click", buttonClickHandler);
});
