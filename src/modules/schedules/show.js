import dayjs from "dayjs";

// Seleciona as sessões manhã, tarde e noite.
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodNight = document.getElementById("period-night")

export function schedulesShow({ dailySchedules }){
    try {
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodNight.innerHTML = ""

        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")
            const name = document.createElement("span")
            const time = document.createElement("strong")

            console.log(schedule)

            item.setAttribute("data-id", schedule.id)
            time.textContent = dayjs.utc((schedule.when)).format("HH:mm")
            name.textContent = schedule.name.trim()

            const cancelIcon = document.createElement("img")
            cancelIcon.classList.add("cancel-icon")
            cancelIcon.setAttribute("src", "./src/assets/cancel.svg")
            cancelIcon.setAttribute("alt", "Cancelar")

            item.append(time, name, cancelIcon)

            const hour = dayjs.utc((schedule.when)).hour()

            if(hour <= 12) {
                periodMorning.appendChild(item)
            } else if(hour > 12 && hour <= 18) {
                periodAfternoon.appendChild(item)
            } else {
                periodNight.appendChild(item)
            }
            
        })

    } catch (error) {
        alert("Não foi possível exibir os agendamentos.")
    }
}



