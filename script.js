document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box")
    const inputs = document.querySelectorAll("section input")
    const button = document.querySelector("button")
    const btnCopy = document.querySelector("#btnCopy")
    const toast = document.querySelector("#toast")
  
    const arrayInput = [...inputs]
  
    arrayInput.forEach(input => {
      input.addEventListener("input", (event) => {
        let configBorderRadius = event.target.value !== "e" ? event.target.value : "0"
  
        if (temPropriedade(event.target, "id", "input1")) {
          box.style.borderTopLeftRadius = parseInt(event.target.value) + "px"
        }
  
        if (temPropriedade(event.target, "id", "input2")) {
          box.style.borderTopRightRadius = parseInt(event.target.value) + "px"
        }
  
        if (temPropriedade(event.target, "id", "input3")) {
          box.style.borderBottomRightRadius = parseInt(event.target.value) + "px"
        }
  
        if (temPropriedade(event.target, "id", "input4")) {
          box.style.borderBottomLeftRadius = parseInt(event.target.value) + "px"
        }
      })
    })
   
    button.addEventListener("click", () => {
      arrayInput.forEach(input => {
        if (input.value !== "") {
          if (temPropriedade(input, "id", "input1")) {
            box.style.borderTopLeftRadius = parseInt(input.value) + "px"
          }
  
          if (temPropriedade(input, "id", "input2")) {
            box.style.borderTopRightRadius = parseInt(input.value) + "px"
          }
  
          if (temPropriedade(input, "id", "input3")) {
            box.style.borderBottomRightRadius = parseInt(input.value) + "px"
          }
  
          if (temPropriedade(input, "id", "input4")) {
            box.style.borderBottomLeftRadius = parseInt(input.value) + "px"
          }
        }
      })
    })
  
    btnCopy.addEventListener("click", () => {
      toast.classList.add('active')
      setTimeout(() => {
        toast.classList.remove('active')
      }, 3000)
    })
  })
  
  function temPropriedade(elemento, propriedade, valor) {
    return elemento[propriedade] === valor
  }