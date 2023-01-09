const buttonElement = document.getElementById("submitButton");

function copyInput() {
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);

// modify the copyInput callback to receive the event object
function copyInput(event) {
    // take a look at the event!
    console.log(event);
    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = inputElement.value;
  }

const log = document.querySelector("#log");

//document.addEventListener("keyup", logKey);

function logKey(e) {
  // how do we know which key was pressed?
  console.log(e);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
}

function squareNum(){
  let sqaureResults = 0
  const num = parseFloat(document.getElementById('num').value);
  sqaureResults = num * num
  document.getElementById('sqaureResults').innerHTML = sqaureResults;
};
const clickmeEvent = document.getElementById('clickme');
clickmeEvent.addEventListener('click', copyInput);

let squared = document.getElementById('squarenum');
squared.innerHTML = squareNum(); 
squared.addEventListener('click', squareNum);

//---------------------------------------//
//---- Functions with event Listeners ---//
//---------------------------------------//
let btnDoubled = document.getElementById('doubleNum');
btnDoubled.addEventListener('click', double)

function double(){
  let resultDoubled = 0
  let num = parseFloat(document.getElementById('inputNumDoubled').value);
  resultDoubled = num * 2;
  document.getElementById('doubleOutput').innerHTML = resultDoubled;
}

