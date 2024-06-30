import dayjs from "dayjs"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual
selectedDate.value = inputToday

// Define a data mínima como sendo a data atual.
selectedDate.min = inputToday

form.onsubmit = (event) => {
    event.preventDefault()

    try {
        const name = clientName.value.trim()

        if(!name) {
            return alert("Informe o nome do cliente")
        }

        const hourSelected = document.querySelector(".hour-selected")

        if (!hourSelected) {
            alert("Selecione a hora.")
        }

        const [hour] = hourSelected.innerText.split(":")

        const when = dayjs(selectedDate.value).add(hour, "hour")

        const id = new Date().getTime()

        
    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }
}