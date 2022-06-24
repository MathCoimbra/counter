const subtracao = document.getElementById('subtracao').addEventListener('click', decrement)
const adicao = document.getElementById('adicao').addEventListener('click', increment)

var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber != 10) {
    document.getElementById('adicao').addEventListener('click', increment)
  }
  if(currentNumber < 0){
    document.getElementById('currentNumber').style.color = "red"
  } else if (currentNumber >= 0) {
    document.getElementById('currentNumber').style.color = "black"
  }
}

function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber == 10) {
    document.getElementById('adicao').removeEventListener('click', increment)
  } 
  if(currentNumber < 0){
    document.getElementById('currentNumber').style.color = "red"
  } else if (currentNumber >= 0) {
    document.getElementById('currentNumber').style.color = "black"
  }
  
}

