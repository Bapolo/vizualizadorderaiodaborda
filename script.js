document.addEventListener("DOMContentLoaded", () => {
    const box = document.querySelector(".box")
    const inputs = document.querySelectorAll(".inputs input")
    const btnCopy = document.querySelector("#btnCopy")
    const toast = document.querySelector("#toast")
    const select = document.querySelector("select")

    const arrayInput = [...inputs]

    arrayInput.forEach(input => {
        input.addEventListener("input", (event) => {

            const valorDosInputs = arrayInput.map(input => input.value || 0)

            if (parseInt(select.value) !== 8) {

                box.style.borderRadius = `${valorDosInputs[0]}px ${valorDosInputs[1]}px ${valorDosInputs[2]}px ${valorDosInputs[3]}px`

            } else {

                box.style.borderRadius = `${valorDosInputs[0]}px ${valorDosInputs[1]}px ${valorDosInputs[2]}px ${valorDosInputs[3]}px / ${valorDosInputs[4]}px ${valorDosInputs[5]}px ${valorDosInputs[6]}px ${valorDosInputs[7]}px`

            }
        })
    })

    btnCopy.addEventListener("click", () => {
        let copyText

        if (parseInt(select.value) !== 8) {
            const [input1, input2, input3, input4] = arrayInput

            input1.value = input1.value || 0;
            input2.value = input2.value || 0;
            input3.value = input3.value || 0;
            input4.value = input4.value || 0;

            copyText = `border-radius: ${input1.value}px ${input2.value}px ${input3.value}px ${input4.value}px ;`
        } else {
            const [input1, input2, input3, input4, input5, input6, input7, input8] = arrayInput

            input1.value = input1.value || 0;
            input2.value = input2.value || 0;
            input3.value = input3.value || 0;
            input4.value = input4.value || 0;
            input5.value = input5.value || 0;
            input6.value = input6.value || 0;
            input7.value = input7.value || 0;
            input8.value = input8.value || 0;

            copyText = `border-radius: ${input1.value}px ${input2.value}px ${input3.value}px ${input4.value}px / ${input5.value}px ${input6.value}px ${input7.value}px ${input8.value}px ;`
        }

        mostrarToast(toast)

        copyText(copyText)
    })

    select.addEventListener("change", () => {
        if (parseInt(select.value) !== 8) {
            visibilidadeDosUltimoInputs(arrayInput, "block")
        } else {
            visibilidadeDosUltimoInputs(arrayInput, "none")
        }
    })
})

function visibilidadeDosUltimoInputs(array, visibilidade) {
    for (let contador = 4; contador <= array.length - 1; contador++) {
        array[contador].style.display = visibilidade
    }
}

function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => {
            console.log("Copiado:", text);
        })
        .catch(err => {
            console.error("Erro ao copiar:", err);
        });
}

function mostrarToast(toast) {
    toast.classList.add('active')
    setTimeout(() => {
        toast.classList.remove('active')
    }, 3000)
}