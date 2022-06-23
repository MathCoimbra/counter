const subtracao = document.getElementById('subtracao')
const adicao = document.getElementById('adicao')

adicao.addEventListener('click', increment)
subtracao.addEventListener('click', decrement)

var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
  if(currentNumber < 0){
    document.getElementById('currentNumber').style.color = "red"
  } else if (currentNumber > 0) {
    document.getElementById('currentNumber').style.color = "black"
  }
}

function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
  if (currentNumber == 10) {
    adicao.removeEventListener('click', increment)
  } else if (currentNumber != 10 )
  {
    adicao.addEventListener('click', increment)
  }
  if(currentNumber < 0){
    document.getElementById('currentNumber').style.color = "red"
  } else if (currentNumber > 0) {
    document.getElementById('currentNumber').style.color = "black"
  }
  
}

