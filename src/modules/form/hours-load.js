import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"
import { hoursClick } from "./hours-click.js"

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {

    hours.innerHTML = ""
    
    const unavailableHours = dailySchedules.map((schedule) => {
        return dayjs.utc((schedule.when)).format("HH:mm")
    })

    const opening = openingHours.map((hour) => {
        // Recupera somente a hora
        const [scheduleHour] = hour.split(":")
       
        // Adiciona a hora na data e vericar se está no passado e se já não esta agendado para outro cliente.
        const isHourAvailable = (dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())) && (!unavailableHours.includes(hour))

        return {
            hour,
            isHourAvailable
        }
    })

    opening.forEach(({ hour, isHourAvailable }) => {
        const li = document.createElement("li")
        li.classList.add("hour")
        li.classList.add(isHourAvailable ? "hour-available": "hour-unavailable")
        li.textContent = hour

        if (hour === "9:00") {
            hourHeaderAdd("Manhã")
        } else if (hour === "13:00") {
            hourHeaderAdd("Tarde")
        } else if (hour === "18:00") {
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })

    hoursClick()
}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}