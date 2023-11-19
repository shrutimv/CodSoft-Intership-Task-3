let currentInput = "";
let display = document.getElementById("display");

function AppendDisplay(value){
  currentInput += value;
  display.innerText = currentInput;
}
function clearDisplay() {
  currentInput = "";
  display.innerText = "0";
}

function result(){
  try{
    let res = eval(currentInput);
    display.innerText = res;
    currentInput = res;
    }
    catch(error){
      display.innerText = "Error";
    }
}