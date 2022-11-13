const converter = document.querySelector("#converter")
const result = document.querySelector(".result")
const convertBtn = document.querySelector(".conv")
const resetBtn = document.querySelector(".reset")
const changeBtn = document.querySelector(".change")
const main = document.querySelector(".main")
const second = document.querySelector(".second")

const convertionHandler = () => {
  if (main.textContent == "Celsius") {
    temp = converter.value * 1.8 + 32
    result.textContent = `${converter.value} \xB0C is equal to ${temp.toFixed(2)} \xB0F`
  }
  if (main.textContent == "Farenheit") {
    temp = (converter.value - 32) / 1.8
    result.textContent = `${converter.value} \xB0F is equal to ${temp.toFixed(2)} \xB0C`
  }
}

const changeDegreesConvertion = () => {
  if (main.textContent == "Celsius") {
    main.textContent = "Farenheit"
    second.textContent = "Celsius"
    result.textContent = ""
  } else if (main.textContent == "Farenheit") {
    main.textContent = "Celsius"
    second.textContent = "Farenheit"
    result.textContent = ""
  }
}

const resetHandler = () => {
  converter.value = ""
  result.textContent = ""
}

const isInputEmpty = () => {
  if (converter.value != "") {
    convertionHandler()
  } else {
    result.textContent = "Please, enter a number!"
  }
}

convertBtn.addEventListener("click", isInputEmpty)
resetBtn.addEventListener("click", resetHandler)
changeBtn.addEventListener("click", changeDegreesConvertion)
