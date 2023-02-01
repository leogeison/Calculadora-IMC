import { modal } from './modal.js'
import { alertError } from './alert-error.js'
import { calculateIMC, notANumber } from './utils.js'

const form = document.querySelector('form')
const inputWeigth = document.querySelector('#weigth')
const inputHeigth = document.querySelector('#heigth')

inputWeigth.oninput = () => alertError.close()
inputHeigth.oninput = () => alertError.close()

form.onsubmit = event => {
  event.preventDefault()

  const weigth = inputWeigth.value
  const heigth = inputHeigth.value

  const showAlertError = notANumber(weigth) || notANumber(heigth)

  if (showAlertError) {
    alertError.open()
    return
  }

  alertError.close()

  const result = calculateIMC(weigth, heigth)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  modal.message.innerText = message
  modal.open()
}
